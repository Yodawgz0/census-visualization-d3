import axios from "axios";
import React, { useState, useEffect } from "react";

function HomePage() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    // Axios GET request
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        // setData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div>
      <p>HomePage</p>
      {data}
    </div>
  );
}

export default HomePage;
