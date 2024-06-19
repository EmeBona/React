import { useEffect, useState } from "react";

function useCurrentLocation() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setError(error.message);
          setLocation({
            latitude: null,
            longitude: null,
            error: error.message,
          });
        }
      );
      setLoading(false);
    } else {
      setError({ error: "Geolocation is not supported by this browser" });
      setLocation({
        latitude: null,
        longitude: null,
        error: "Geolocation is not supported by this browser",
      });
    }
  }, []);

  return {
    location: location,
    loading: loading,
    error: error
  };
}

export default useCurrentLocation;
