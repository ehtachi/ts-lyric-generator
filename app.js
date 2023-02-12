let id = document.querySelector("#lyric");
let song = document.querySelector("#song");
let album = document.querySelector("#album");
let btn = document.querySelector("#btn");

const options = {
    method: "GET",
    contenttype: "application/json"
}

async function ts(){
    let resp = await fetch("https://taylorswiftapi.onrender.com/get", options);
    let data = await resp.json();
    id.textContent = data.quote;
    song.textContent = data.song;
    album.textContent = data.album;
}

btn.addEventListener("click", ts);