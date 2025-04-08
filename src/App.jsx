import './App.css';
import { useState } from 'react'
import { puppyList } from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log("featuredPup: ", featuredPup)

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p
            key={puppy.id}
            onClick={() => {
              setFeatPupId(puppy.id)
            }}
          >
            {puppy.name}
          </p>
        )
      })}

      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
