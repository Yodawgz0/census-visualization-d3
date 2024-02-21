import axios from "axios";
import React, { useState, useEffect } from "react";
import { censusData } from "./IProps";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

axios.defaults.withCredentials = true;

function HomePage() {
  const [data, setData] = useState<censusData[]>([]);
  const history = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        console.log(response);
        setData(response.data);
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
      <p>HomePage</p>
      <Button>Log Out</Button>
      {data?.map((e, i) => (
        <div key={i} className=" d-flex flex-row ">
          {" "}
          <p>{e.name}</p>
          <p>{e.population}</p>
          <p>{e.time}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
