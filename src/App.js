import "./styles/main.css";
import "./styles/flex.css"

import { LoginContainer } from "./components/LoginContainer";
const axios = require("axios");

const App = () => {

    // const config = {
    //     method: "get",
    //     url: "https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&avoid=highways&mode=bicycling&key=AIzaSyBr_qJTe-9_TZhGM2Dhwh_NmGrKArMaR-k",
    //     headers: {},
    // };
    axios.get("https://maps.googleapis.com/maps/api/directions/json?origin=37.7680296%2C-122.4375126&destination=side_of_road%3A37.7663444%2C-122.4412006&key=AIzaSyBr_qJTe-9_TZhGM2Dhwh_NmGrKArMaR-k").then((res) => {
      console.log(res.data);
    })
    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    return <>
      <LoginContainer />
    </>;
};

export default App;
