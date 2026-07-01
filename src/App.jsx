import { useState } from 'react'
import './App.css'
import { comfortTips, hourlyForecast, weatherSnapshot } from './data/weatherData'
import { cumulativeTotals, rainAlerts, rainHourly } from './data/rainData'

function RainHourlyBar({ chance }) {
  const height = Math.max(40, Math.min(140, chance * 2))
  return (
    <div className="rain-bar" style={{ height }}>
      <span>{chance}%</span>
    </div>
  )
}

function App() {
  const [activePage, setActivePage] = useState('overview')

  const renderOverview = () => (
    <main className="weather-card">
      <section className="main-weather">
        <div>
          <p className="label">Temperature</p>
          <p className="temp-value">{weatherSnapshot.temp}°</p>
          <p className="temp-range">
            {weatherSnapshot.high}° / {weatherSnapshot.low}°
          </p>
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
  )

  const renderRainPage = () => (
    <main className="weather-card rain-page">
      <section className="rain-hourly">
        <div className="section-header">
          <h2>Hourly precipitation chance</h2>
          <span>Based on the static forecast model.</span>
        </div>
        <div className="rain-chart">
          {rainHourly.map((slot) => (
            <article key={slot.time} className="rain-slot">
              <div className="rain-time">{slot.time}</div>
              <RainHourlyBar chance={slot.chance} />
            </article>
          ))}
        </div>
      </section>

      <section className="rain-cumulative">
        <h2>Cumulative totals</h2>
        <div className="cumulative-grid">
          {cumulativeTotals.map((total) => (
            <article key={total.label}>
              <p className="label">{total.label}</p>
              <p className="total-value">{total.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rain-alerts">
        <h2>Alerts</h2>
        <div className="alerts-grid">
          {rainAlerts.map((alert) => (
            <article key={alert.title}>
              <p className="alert-severity">{alert.severity}</p>
              <h3>{alert.title}</h3>
              <p>{alert.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )

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

      <div className="view-switcher">
        <button
          className={activePage === 'overview' ? 'active' : ''}
          onClick={() => setActivePage('overview')}
        >
          General overview
        </button>
        <button
          className={activePage === 'rain' ? 'active' : ''}
          onClick={() => setActivePage('rain')}
        >
          Rain forecast details
        </button>
      </div>

      {activePage === 'overview' ? renderOverview() : renderRainPage()}
    </div>
  )
}

export default App
