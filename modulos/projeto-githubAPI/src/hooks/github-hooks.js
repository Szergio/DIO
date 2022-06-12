import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred, getUserSponsoring} = useContext(
    GithubContext
  );

  return { githubState, getUser, getUserRepos, getUserStarred, getUserSponsoring};
};

export default useGithub;
