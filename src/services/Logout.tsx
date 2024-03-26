import axios from "axios";
import { useNavigate } from "react-router";

export const handleLogOut = () => {
  axios.get("http://localhost:8080/log_out").then((response) => {
    console.log(response.data);
  });
};
