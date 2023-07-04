import { useEffect, useState } from 'react';
import { Stack, Card } from 'react-bootstrap';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        var request = new XMLHttpRequest();
        request.open("GET", "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/izmir?unitGroup=metric&key=***********&contentType=json");
        request.onload = function () {
            if (request.status == 200) {
                // Success
                var data = JSON.parse(request.responseText);
                // Get the current temperature and condition
                var temp = data.currentConditions.temp;
                var condition = data.currentConditions.conditions;
                // Display them on the console
                //console.log("The current temperature in Izmir is " + temp + " degrees Celsius.");
                //console.log("The current weather condition in Izmir is " + condition + ".");
                setWeather({ temp, condition })
            }
        };
        request.send();

    }, []);

    return (

        <Stack direction='vertical'>
            {weather &&
                <>
                    <Card>
                        <Card.Body className='pb-2 pt-2' style={{backgroundColor:"skyblue"}} >
                            <Stack direction='horizontal'>
                                <h4 className='ps-3'>{weather.temp}&deg;</h4>
                                <i className="bi bi-cloud-sun ps-3" style={{color:'yellow', fontSize:"20px"}}></i>
                            </Stack>
                            <div>{weather.condition}</div>
                        </Card.Body>
                    </Card>
                </>
            }
        </Stack>
    );
};

export default WeatherWidget;