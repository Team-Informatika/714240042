import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML, setInner} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js"

renderHTML('cardbenar', 'content.html');

getJSON("https://t.if.co.id/json/bagas.json","null","null",responseFunction);
function responseFunction(response) {
  setInner('nama', response.data.card.details.name);
  setInner('occupation', response.data.card.details.occupation)
  const avatarSrc = response.data.card.avatar.src;
  const avatarHTML = `<img src="${avatarSrc}" alt="Avatar">`;
  setInner('avatar', avatarHTML);
  console.log('HTTP Status:', response.status);
  console.log('Response Data:', response.data);

  const item = document.getElementById('item-list')
  response.data.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.className = "item";
    const isiValue = document.createElement("span");
    isiValue.className = "value";
    isiValue.textContent = item.card.details.about.value;
    const isiLabel = document.createElement("span");
    isiLabel.className = "label";
    isiLabel.textContent = item.card.details.about.label;
    console.log(itemContainer);
    console.log(isiValue);
    console.log(isiLabel;)
  });
  // let cardname;
  // cardname = response.data;
  // const isicard = document.getElementById("card");
  // cardname.forEach((card) => {
  //   // Membuat elemen div untuk setiap item
  //   const teamContainer = document.createElement("div");
  //   teamContainer.classList.add("team-list");

  //   // Membuat elemen deskripsi
  //   const pnama = document.createElement("p");

  //   const link = document.createElement("a");
  //   link.textContent = team.nama;
  //   link.href = team.link;
  //   console.log(pnama);
  //   console.log(teamContainer);
  //   pnama.appendChild(link);
  //   // Menambahkan icon, judul, dan deskripsi ke dalam layananItem
  //   teamContainer.appendChild(pnama);

  //   // Menambahkan layananItem ke container
  //   isiteam.appendChild(teamContainer);


  // });
}
