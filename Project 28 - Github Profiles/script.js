const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("hannapalianytsia");

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});

/*

function getUser(username) {
  axios(API_URL + username)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

*/
