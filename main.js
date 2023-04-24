//variables
const Container = document.getElementById("quot-container");
const quotContainer = document.querySelector(".quot");
const twitter = document.querySelector(".twitter");
const btn = document.querySelector(".new");
const loader = document.getElementById("loading");
let data = [];
// getting quots

async function getData() {
  let response = await fetch("https://type.fit/api/quotes");
  data = await response.json();
  creatQuots();
}

//creating elements
function creatQuots() {
  let random = Math.floor(Math.random() * data.length);
  //quot Text
  let quotEl = document.createElement("h1");
  quotEl.innerText = data[random].text;
  quotContainer.appendChild(quotEl);

  //quot author
  let authorEl = document.createElement("p");
  if (authorEl.innerText === null) {
    authorEl.innerText = "Unknown";
  }
  authorEl.innerText = `" ${data[random].author}"`;
  quotContainer.appendChild(authorEl);
}

/* twitter.href =
  href = `https://twitter.com/intent/twitt?text=${data[random].text}`; */
//events
function timeToRefresh() {
  setTimeout(() => {
    loader.style.display = "none";
    Container.style.display = "block";
  }, 1000);
}
function timeBetweens() {
  loader.style.display = "block";
  Container.style.display = "none";
}

window.addEventListener("load", () => {
  timeToRefresh();
  getData();
});

btn.addEventListener("click", () => {
  timeBetweens();
  quotContainer.innerHTML = ``;
  timeToRefresh();
  getData();
  console.log(data);
});

console.log(data);
