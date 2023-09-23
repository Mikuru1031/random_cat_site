const output = document.querySelector("#output");
const url = "https://api.thecatapi.com/v1/images/search";

fetch(url)
.then(async (res) => {
    const data = await res.json();
    const image = data[0].url;
    output.setAttribute("src", image);
})