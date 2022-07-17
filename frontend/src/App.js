import './App.css';
import CityName from "./components/CityName/CityName";
import Temperature from "./components/Temperature/Temperature";
import WeatherImage from "./components/WeatherImage/WeatherImage";

function App() {
    const temperature = "+25";
    return (
        <div className="App">
            <CityName/>
            <Temperature temp={temperature}/>
            <WeatherImage/>
        </div>
    );
}

export default App;
