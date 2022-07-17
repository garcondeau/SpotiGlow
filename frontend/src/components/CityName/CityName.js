import {useState} from "react";

const CityName = ({temperature}) => {
    let city = ""
    if (temperature <25) {
        city = "Warszawa"
    } else {
        city = "lublin"
    }
    return (
        <p>{city}</p>
    )
}

export default CityName;