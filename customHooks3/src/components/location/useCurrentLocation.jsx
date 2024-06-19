import { useState } from "react"

function useCurrentLocation() {
    const [location, setLocation] = useState(null)
    function getLocation(){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            (error) => {
                console.log(error);
            }
        )
    }


  return {
    location: location,
    getLocation: getLocation
  }
}

export default useCurrentLocation