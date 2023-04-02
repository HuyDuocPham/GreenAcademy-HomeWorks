import { useEffect, useState } from "react";
import axios from "axios";
import { Weather } from "./styles";

const App = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=4aa108b82d7e4b969a6163908230204&q=ho-chi-minh-city&aqi=no"
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      });
  }, []);

  return (
    <div>
      {data.location && data.current && (
        <Weather>
          <div>
            {data.location.name}, {data.location.country}
          </div>
          <div>
            lon: {data.location.lon}, lat: {data.location.lat}
          </div>
          <div>{data.location.localtime}</div>
          <div>
            {data.current.condition.text}
            <img
              src="//cdn.weatherapi.com/weather/64x64/night/116.png"
              alt="^^"
            />
          </div>
          <div>UV: {data.current.uv}</div>
        </Weather>
      )}
    </div>
  );
};

export default App;
