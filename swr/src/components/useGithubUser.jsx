import { useState } from "react";
import useSWR from "swr"

const fetcher = (url)=>fetch(url).then(resp =>resp.json())

function useGithubUser( username ) {
  const {data, error, load} = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

  return {
    data,
    load,
    error
  };
}
export default useGithubUser;
