require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const githubData = {
  "login": "mannsk1302",
  "id": 138506116,
  "node_id": "U_kgDOCEFvhA",
  "avatar_url": "https://avatars.githubusercontent.com/u/138506116?v=4",
  "gravatar_id": " ",
  "url": "https://api.github.com/users/mannsk1302",
  "html_url": "https://github.com/mannsk1302",
  "followers_url": "https://api.github.com/users/mannsk1302/followers",
  "following_url": "https://api.github.com/users/mannsk1302/following{/other_user}",
  "gists_url": "https://api.github.com/users/mannsk1302/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mannsk1302/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mannsk1302/subscriptions",
  "organizations_url": "https://api.github.com/users/mannsk1302/orgs",
  "repos_url": "https://api.github.com/users/mannsk1302/repos",
  "events_url": "https://api.github.com/users/mannsk1302/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mannsk1302/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mann Gwal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-07-03T14:54:19Z",
  "updated_at": "2025-10-24T09:29:27Z"
};

app.get('/github', (req, res) => {
    res.json(githubData);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});