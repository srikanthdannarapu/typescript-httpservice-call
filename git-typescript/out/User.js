"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.bio;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        //this.repos = userResponse.repos;
    }
    return User;
}());
exports.User = User;
