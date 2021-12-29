import {useState, useEffect, useCallback} from 'react'
import "./TripList.css"

export const TripList = () => {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/trips')

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url)
    const json = await response.json()
    setTrips(json)
  }, [url])

  useEffect(() => {
    fetchTrips()
  }, [fetchTrips])

  console.log(trips)

  return (
    <div className="trip-list"> 
      <h2>Trip List</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h2>{trip.title}</h2>
            <p>{trip.price}</p>
          </li>
        ) 
        )}
      </ul>
      <div className="location">
        <button onClick = {() => setUrl('http://localhost:3000/trips?loc=italy')}>Italian Destination</button>
        <button onClick = {() => setUrl('http://localhost:3000/trips?loc=france')}>French Destination</button>
        <button onClick = {() => setUrl('http://localhost:3000/trips?loc=portugal')}>Portuguese Destination</button>
        <button onClick = {() => setUrl('http://localhost:3000/trips')}>All Destinations</button>
      </div> 
    </div>
  )
}





