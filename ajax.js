document.addEventListener('DOMContentLoaded', function() {
    const profilePicture = document.querySelector('.profile-avatar');
    const profileName = document.querySelector('.profile-name');
    const profileUsername = document.querySelector('.profile-username');
    const profileReposNum = document.querySelector('#reposNum');
    const profileFollowersNum = document.querySelector('#followersNum');
    const profileFollowingNum = document.querySelector('#followingNum');
    const profileLink = document.querySelector('.profile-link');

    fetch('https://api.github.com/users/benhurk').then(function(cb) {
        return cb.json();
    }).then(function(json) {
        profilePicture.setAttribute("src", json.avatar_url);
        profileName.innerHTML = json.name;
        profileUsername.innerHTML = json.login;
        profileReposNum.innerHTML = json.public_repos;
        profileFollowersNum.innerHTML = json.followers;
        profileFollowingNum.innerHTML = json.following;
        profileLink.setAttribute("href", json.html_url);
    })
})