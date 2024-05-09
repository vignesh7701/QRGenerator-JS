const form = document.querySelector('#form');
const output = document.querySelector('#qrcode');
const spinner = document.querySelector('#spinner');


document.addEventListener(
  "submit",
    function (e) {
      e.preventDefault();
    const url = document.querySelector("#url").value;
    const size = document.querySelector("#size").value;
    const color = document.querySelector("#color").value;
    const background = document.querySelector("#background").value;

    if (url === "") {
      alert("URL is required");
      return;
    } else {
      spinner.style.display = "flex";
    }
  },
  true
);