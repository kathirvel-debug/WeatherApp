function Cards({data,time}) {
    

    return (
        <div className="block">
        <h2>{time}</h2>
        <h2>Temperature:{data.temperatureApparentMax}</h2>
        <h2>windSpeed:{data.windSpeedMax}</h2>
        <h2>cloudCover:{data.cloudCoverMax}</h2>
        <h2>humidity:{data.humidityMax}</h2>
    </div>
      
    )
}
export default Cards