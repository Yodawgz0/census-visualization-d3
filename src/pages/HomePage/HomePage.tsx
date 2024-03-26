import axios from "axios";
import React, {
  useState,
  useEffect,
  useRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import { censusData, Icountry } from "./IProps";
import { useNavigate } from "react-router";
import { Button, Form } from "react-bootstrap";
import { Map } from "../../components/Map";
import { countryMapData } from "../../components/data";
import { handleLogOut } from "services/Logout";

axios.defaults.withCredentials = true;

const HomePage: React.FC = () => {
  const [data, setData] = useState<censusData[]>([]);
  const [year, setYear] = useState(1800);
  useRef<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  >();
  const history = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/census_data")
      .then((response) => {
        const formattedData: censusData[] = response.data.map(
          (country: Icountry) => ({
            id: country["query_text_values"].id,
            geo: country["query_text_values"].geo,
            name: country["query_text_values"].name,
            time: country["query_text_values"].time,
            Population: country["query_text_values"].Population,
          })
        );
        setData(formattedData);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          history("/login");
        }
        console.error("Error fetching data", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="mt-3 d-flex flex-row justify-content-around">
        <div className="w-50">
          <Form.Label>Year Selected: {year}</Form.Label>
          <Form.Range
            min={1800}
            max={2050}
            step={1}
            value={year}
            onChange={(e) => setYear(parseInt(e.currentTarget.value))}
          />
        </div>
        <Button onClick={() => handleLogOut()} className="mt-2 me-3">
          Log Out
        </Button>
      </div>
      <div className="d-flex flex-column align-items-center mt-5">
        <Map data={countryMapData} width={1200} height={600} />
      </div>
    </div>
  );
};

export default HomePage;
