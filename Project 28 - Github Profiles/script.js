const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});

getUser("hannapalianytsia");

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard("No profile with this username");
    }
  }
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
        <div>
          <img
            src=${user.avatar_url}
            alt=${user.name ? user.name : user.login}
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name ? user.name : user.login}</h2>
          <p>${user.bio ? user.bio : "No information about this user"}</p>

          <ul>
            <li>${user.followers}<strong>Followers </strong></li>
            <li>${user.following}<strong>Following </strong></li>
            <li>${user.public_repos}<strong>Repos </strong></li>
          </ul>

          <div id="repos">
            <a href="#" class="repo">Repo 1</a>
            <a href="#" class="repo">Repo 2</a>
            <a href="#" class="repo">Repo 3</a>
            <a href="#" class="repo">Repo 4</a>
          </div>
        </div>
      </div>
  `;

  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `<div class="card">
  <h2>${msg}</h2>
  <div>`;
  main.innerHTML = cardHTML;
}

/*

function getUser(username) {
  axios(API_URL + username)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

*/
