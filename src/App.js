import "./Weather.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather defaultCity="Nairobi" />
      <footer>
        <p>
          This app was codded by Sheillah and is open sourced on
          <a
            href="https://github.com/Sheillah27/weather-react23"
            target="-blank"
          >
            {" "}
            Github{" "}
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
