import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
import WeatherApp from "./WeatherApp"

function App() {
	return <WeatherApp />
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
