
import { useEffect } from 'react'
import './App.css'
import GitHubUsers from './components/gitHubuser/GitHubUsers'
import useCurrentLocation from './components/location/useCurrentLocation'


function App() {

  const {location, getLocation} = useCurrentLocation()
  useEffect(()=>{
    getLocation()
  }, [])

  return (
    <>
  <GitHubUsers />
  {location && `${location.latitude} ${location.longitude}`}
    </>
  )
}

export default App
