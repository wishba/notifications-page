fetch("data.json")
  .then(res => res.json())
  .then(object => appendData(object))
  .catch((err) => console.log(err))

function appendData(object) {
  for (const iterator of object) {
    let div = document.createElement("div")
    div.innerHTML = `
      <p>${iterator.name}</p>
    `;
    document.getElementById("notification").appendChild(div);
  }
}