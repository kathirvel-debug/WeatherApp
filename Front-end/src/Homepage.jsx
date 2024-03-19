import Cards from "./cards"
import { useEffect, useState } from "react"
import axios from 'axios';
function Homepage() {
    const [cityname, setname] = useState("")
    const [apiname, setApiname] = useState("")
    const [loading, setLoading] = useState()
    const [error, setError] = useState(false)
    const [msg, setmsg] = useState("")
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [weatherdata, setWeatherdata] = useState([])

    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    console.log("ok");
                    
                },
                (error) => {
                    console.log(error);
                    setError(true);
                    setmsg("Failed to get current location");
                }
            );
        } else {
            console.log("Error in location");
            setError(true);
            setmsg("Failed to get current location");
        }
    },[])
    const fectApi = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`http://localhost:8006/weather?cityname=${cityname}`)
            if (response && response.data.data) {
            console.log(response.data.data.timelines.daily)
            console.log(response.data.data.location.name)
            setApiname(response.data.data.location.name)
            setWeatherdata(response.data.data.timelines.daily)
            }
            else{
                console.log("error in api");
                setError(true);
            }

        }
        catch (err) {
            console.log("error")
            setmsg("Error...")
            setError(true)
        } finally {
            setLoading(false)
        }
    }
    const handelClick = () => {
        console.log(cityname);
        fectApi()
        setname("")
    }
   
    
    const fetchData = async (long,lat) => {
        try {
            const response = await axios.get(`http://localhost:8006/location?long=${long}&lat=${lat}`);
            if (response && response.data.data) {
            console.log(response.data.data.timelines.daily);
            console.log(response.data.data.location.name);
            setApiname(response.data.data.location.name);
            setWeatherdata(response.data.data.timelines.daily);
            console.log(response.data.data.type);
            }
            else{
                setError(true)
            }
        } catch (err) {
            console.log("error", err.response.data.type);
            console.log(err.response.data);
            console.log(err.response.data.message);
            setError(true);
            setmsg("Error...")
        } finally {
            setLoading(false);
           
        }
    }

    const handelLocation = () => {
        console.log(longitude,latitude);
        fetchData(longitude,latitude)
    }





    return (
        <div className="Weatherapp">
            <div classNameName="search">
                <input type="text" className="searchInput" onChange={(e) => setname(e.target.value)} value={cityname} placeholder="Enter The city...." />
                <button className="btn btn-normal" onClick={handelClick}>search</button>
                <button className="btn btn-normal" onClick={handelLocation}>Current Location</button>
            </div>
            <div className="cards">
                {
                    loading ? <h2>Loading...</h2> : error ? <h2>{msg}</h2> : weatherdata.map((x) => (
                        <Cards data={x.values} time={x.time} />
                    ))
                }


            </div>
            <h4>{apiname}</h4>
            <h3>long:{longitude}lat:{latitude}</h3>
        </div>
    )
}
export default Homepage