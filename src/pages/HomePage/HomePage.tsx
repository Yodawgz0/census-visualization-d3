import axios from "axios";
import React, { useState, useEffect } from "react";
import { censusData } from "./IProps";

function HomePage() {
  const [data, setData] = useState<censusData[]>([]);

  useEffect(() => {
    // Axios GET request
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div>
      <p>HomePage</p>
      {data.map((e) => (
        <div className=" d-flex flex-row ">
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
