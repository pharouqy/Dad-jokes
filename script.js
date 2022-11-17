const btn = document.getElementsByTagName("button");
const joke = document.getElementsByTagName("h1");

btn[0].addEventListener("click", jokes);

async function jokes() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: { Accept: "application/json" },
  });
  const data = await response.json();
  joke[0].innerText = await data.joke;
}
