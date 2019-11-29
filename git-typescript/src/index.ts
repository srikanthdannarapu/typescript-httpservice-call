import { User } from './User';
import { GithubApiService } from "./GithubApiService";
import { Repo } from './Repo';

let svc = new GithubApiService();
svc.getUserInfo('sdannarapu', (user: User) => {
    console.log(user);
});

svc.getRepos('sdannarapu', (repos: Repo[]) => {
    console.log(repos);
});