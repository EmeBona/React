import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((resp) => resp.json());

function useGithubUser(username) {
  const { data, error, isLoading, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
    refetch: mutate
  };
}

export default useGithubUser;
