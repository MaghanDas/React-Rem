// src/App.jsx — paste this and run it
import { useState, useEffect } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [joke, setJoke] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        setJoke(data)
        setLoading(false)
      })
  }, [])  // runs once on mount

  function handleChange(e) {
    setQuery(e.target.value)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Day 1–2 Playground</h1>

      {/* Controlled input */}
      <input
        value={query}
        onChange={handleChange}
        placeholder="Type anything..."
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <p>You typed: <strong>{query}</strong></p>
      <p>Characters: {query.length}</p>

      {/* useEffect + fetch */}
      <h2>Random Joke (fetched on mount)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : joke ? (
        <div>
          <p>{joke.setup}</p>
          <p><em>{joke.punchline}</em></p>
        </div>
      ) : null}
    </div>
  )
}

export default App