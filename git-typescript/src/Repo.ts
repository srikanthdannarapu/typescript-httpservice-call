export class Repo {
    name: string;
    desctiption: string;
    url: string;
    size: number;
    forkCount: number;

    constructor(repoReponse: any) {
        this.name = repoReponse.name;
        this.desctiption = repoReponse.desctiption;
        this.url = repoReponse.html_url;
        this.size = repoReponse.size;
        this.forkCount = repoReponse.forks;
    }
}