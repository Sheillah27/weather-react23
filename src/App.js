import "./Weather.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather defaultCity="Nairobi" />
      <footer>
        <p>
          This app was codded by Sheillah and is open sourced on
          <a href=""> Github </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
