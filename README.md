![search-Result](https://github.com/kathirvel-debug/WeatherApp/assets/68596240/c4c558bb-d177-4f6a-b494-7aa5dbc091ca)
The weather app allows users to check the temperature on a daily basis by searching for their present location or by entering the city. It then displays the temperature, wind speed, cloud cover, humidity, and data and time.whether a front-end application is used React backend is utilized Express, Node.js,

Installation Instructions
	Launch the server and install the back end.
	Segment CMD node sever.js
	Install frontend react-app
	Run frontend npm start using CMD

Dependencies:
React
Axios
Nodejs
Express
Cros

API integration:
Below is the API documentation for your Express server that serves as a proxy to the Tomorrow.io weather API. This documentation describes the endpoints, their functionality, and usage.
Base URL
http://localhost:8006
Get Weather Data by City Name
GET /weather?cityname=London
Parameters:
cityname (string): The name of the city for which weather forecast data is requested.

Get Weather Data by Longitude and Latitude
GET /location?long=77.0254895&lat=11.0052124
Parameters
•	long (number): The longitude coordinate.
•	lat (number): The latitude coordinate.


Response JSON
{
  "data": {
    // Weather forecast data
  }
}
Status Codes
•	200: Successful request.
•	500: Internal server error.

Code Explain





