import { useEffect, useState } from "react";

function useGithubUser({ username }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchuserData() {
    if (username) {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.statuts != 200) {
          setError(new Error());
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

  useEffect(() => {
    fetchuserData();
  }, [username]);

  return {
    data: data,
    load: load,
    error: error,
  };
}
export default useGithubUser;
