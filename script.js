import {getJSON} from "https://t.if.co.id/714240042/WhatsApp%20Image%202024-10-31%20at%2006.53.28_69d176c5.jpg"
import {renderHTML} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js"

renderHTML("qr", "/content/content.html");

getJSON("https://t.if.co.id/json/bagas.json","null","null",rensponseFunction);
function rensponseFunction(response) {
  console.log(response)
}

