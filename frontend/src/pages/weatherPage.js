import CityName from "../components/CityName/CityName";
import Temperature from "../components/Temperature/Temperature";
import WeatherImage from "../components/WeatherImage/WeatherImage";

const temperature =20;

const WeatherPage = () => {
    return (
        <>
            <CityName temperature={temperature}/>
            <Temperature temp={temperature}/>
            <WeatherImage/>
        </>
    )
}

export default WeatherPage;