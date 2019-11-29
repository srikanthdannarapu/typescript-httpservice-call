"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo('sdannarapu', function (user) {
    console.log(user);
});
svc.getRepos('sdannarapu', function (repos) {
    console.log(repos);
});
