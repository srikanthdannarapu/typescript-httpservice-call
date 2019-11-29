"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repoReponse) {
        this.name = repoReponse.name;
        this.desctiption = repoReponse.desctiption;
        this.url = repoReponse.html_url;
        this.size = repoReponse.size;
        this.forkCount = repoReponse.forks;
    }
    return Repo;
}());
exports.Repo = Repo;
