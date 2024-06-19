import { useState } from "react";

function useGithubUser( username ) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoading] = useState(false);

  async function fetchuserData() {
    if (username) {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.status != 200) {
          const errorBody = await response.json()
          console.log(errorBody);
          setError(errorBody);
          return
        }
        const responseJson = await response.json();
        setData(responseJson);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log("There is no username");
    }
  }

  return {
    data: data,
    load: load,
    error: error,
    fetchuserData: fetchuserData
  };
}
export default useGithubUser;
