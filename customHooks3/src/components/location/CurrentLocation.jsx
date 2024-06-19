import useCurrentLocation from "./useCurrentLocation"


function CurrentLocation() {
    const {location, loading, error} = useCurrentLocation();
  return (
    <div>
      <h1>Geolocation</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
        </div>
      )}
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default CurrentLocation
