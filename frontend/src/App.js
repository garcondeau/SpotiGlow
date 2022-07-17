import './App.css';
import CityName from "./components/CityName/CityName";
import Temperature from "./components/Temperature/Temperature";
import WeatherImage from "./components/WeatherImage/WeatherImage";

function App() {
    return (
        <div className="App">
            <CityName/>
            <Temperature temp="+30"/>
            <WeatherImage/>
        </div>
    );
}

export default App;
