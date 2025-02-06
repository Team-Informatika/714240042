import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML, setInner} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js"
import { getHash, onHashChange } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/url.js"

onHashChange(muncul);

function muncul(){
  const hashpath = getHash().replace("#", ""); // Pastikan tidak ada #
  console.log(hashpath);

  if (hashpath === "cardbenar") {
    console.log("kedetek");

    // Pastikan elemen cardbenar ada sebelum renderHTML
    if (document.getElementById("cardbenar")) {
      renderHTML('cardbenar', 'content.html');
    } else {
      console.error("Element #cardbenar tidak ditemukan di DOM");
    }
  }
}

getJSON("https://t.if.co.id/json/bagas.json",null,null,responseFunction);
function responseFunction(response) {
  setInner('nama', response.data.card.details.name);
  setInner('occupation', response.data.card.details.occupation)
  const avatarSrc = response.data.card.avatar.src;
  const avatarHTML = `<img src="${avatarSrc}" alt="Avatar">`;
  setInner('avatar', avatarHTML);
  console.log('HTTP Status:', response.status);
  console.log('Response Data:', response.data);

  const container = document.getElementById('item-list')
  let dataitem = response.data.card.details.about;
  dataitem.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.className = "item";
    const isiValue = document.createElement("span");
    isiValue.className = "value";
    isiValue.textContent = item.value;
    const isiLabel = document.createElement("span");
    isiLabel.className = "label";
    isiLabel.textContent = item.label;
    console.log(itemContainer);
    console.log(isiValue);
    console.log(isiLabel);
    itemContainer.appendChild(isiValue);
    itemContainer.appendChild(isiLabel);
    container.appendChild(itemContainer);
  });
}
