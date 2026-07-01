import './App.css';
import { weatherSnapshot, hourlyForecast, comfortTips } from './data/weatherData';

function App() {
  return (
    <div className="app-shell">
      <header className="hero-panel">
        <p className="eyebrow">Weather Snapshot</p>
        <h1>
          {weatherSnapshot.city}
          <span>{weatherSnapshot.region}</span>
        </h1>
        <p className="hero-description">{weatherSnapshot.description}</p>
      </header>

      <main className="weather-card">
        <section className="main-weather">
          <div>
            <p className="label">Temperature</p>
            <p className="temp-value">{weatherSnapshot.temp}°</p>
            <p className="temp-range">{weatherSnapshot.high}° / {weatherSnapshot.low}°</p>
          </div>
          <div className="mini-stats">
            <div>
              <p className="label">Feels Like</p>
              <p>{weatherSnapshot.feelsLike}°</p>
            </div>
            <div>
              <p className="label">Humidity</p>
              <p>{weatherSnapshot.humidity}</p>
            </div>
            <div>
              <p className="label">Wind</p>
              <p>{weatherSnapshot.wind}</p>
            </div>
            <div>
              <p className="label">UV Index</p>
              <p>{weatherSnapshot.uv}</p>
            </div>
          </div>
        </section>

        <section className="details-grid">
          {weatherSnapshot.details.map((item) => (
            <article key={item.label}>
              <p className="label">{item.label}</p>
              <p>{item.value}</p>
            </article>
          ))}
        </section>

        <section className="forecast-block">
          <div className="section-header">
            <h2>Hourly Outlook</h2>
            <span>Static data refreshed every hour.</span>
          </div>
          <div className="forecast-row">
            {hourlyForecast.map((slot) => (
              <article key={slot.time} className="forecast-pill">
                <p className="time">{slot.time}</p>
                <p className="pill-temp">{slot.temp}°</p>
                <p className="condition">{slot.condition}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tips-panel">
          <h2>Comfort cues</h2>
          <ul>
            {comfortTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
