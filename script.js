import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js"
import { getHash, onHashChange } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/url.js"

onHashChange(muncul);

function muncul() {
  console.log(getHash());
  const hashpath = getHash();
  if (hashpath === 'content') {
    console.log("kedetek");
    renderHTML('cardbenar', "content.html", renderDataKartu);
  }
}
function renderDataKartu() {
  getJSON("https://t.if.co.id/json/bagas.json", null, null, responseFunction);
}
// renderHTML('cardbenar', 'content.html')

function responseFunction(response) {
  // renderHTML('cardbenar', 'content.html');
  console.log('HTTP Status:', response.status);
  console.log('Response Data:', response.data);
  setInner('nama', response.data.card.details.name);
  setInner('occupation', response.data.card.details.occupation)
  const avatarSrc = response.data.card.avatar.src;
  const avatarHTML = `<img src="${avatarSrc}" alt="Avatar">`;
  setInner('avatar', avatarHTML);
  setInner('harga', response.data.card.details.rate_hour.price);
  setInner('rate', response.data.card.details.rate_hour.rate);
  setInner('isi', response.data.card.details.skills.deskripsi);
  const contact = response.data.card.details.contact;
  setInner('contact',`<a href="${contact}" target="_blank" class="contact-button">Contact Me</a>`);
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
  const container2 = document.getElementById('social')
  let social = response.data.card.details.social_links;
  social.forEach((href) => {
    const socialContainer = document.createElement("a");
    socialContainer.textContent = href.platform;
    socialContainer.href = href.url;
    socialContainer.target = "_blank";
    console.log(socialContainer);
    container2.appendChild(socialContainer);
  });
}
