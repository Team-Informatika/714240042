import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js"

renderHTML('qr', 'content/content.html');

getJSON("https://t.if.co.id/json/bagas.json","null","null",responseFunction);
function responseFunction(response) {
  console.log('HTTP Status:', response.status);
  console.log('Response Data:', response.data);
}
