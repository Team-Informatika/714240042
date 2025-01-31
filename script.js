import {getJSON} from "https://t.if.co.id/714240042/WhatsApp%20Image%202024-10-31%20at%2006.53.28_69d176c5.jpg"
import {renderHTML} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js"

renderHTML("qr", "content/content.html");

getJSON("https://t.if.co.id/json/bagas.json", null, null, rensponseFunction)
function rensponseFunction(response) {
  console.log(response)
}

const target = {
  clicked: 0,
  currentFollowers: 10,
  btn: document.querySelector("a.btn"),
  fw: document.querySelector("span.followers")
};

const follow = () => {
  target.clicked += 1;
  target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';

  if (target.clicked % 2 === 0) {
    target.currentFollowers -= 1;
    target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
  }
  else {
    target.currentFollowers += 1;
  }

  target.fw.textContent = target.currentFollowers;
  target.btn.classList.toggle("following");
}