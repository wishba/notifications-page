fetch("data.json")
  .then(res => res.json())
  .then(object => appendData(object))
  .catch((err) => console.log(err))

function appendData(object) {
  for (const iterator of object) {
    console.log(iterator);
    let div = document.createElement("div")
    div.innerHTML = `
      <div class="notification notification--unread">
        <div class="notification__avatar" style="content: url(${iterator.avatar});"></div>
        <div class="notification__container">
          <p class="notification__head">
            <span class="notification__name">
              <a href="#">${iterator.name}</a>
            </span>
            <span class="notification__do">${iterator.activityCategory}</span>
            <span class="notification__post">
              <a href="#">${iterator.activity}</a>
            </span>
          </p>
          <p class="notification__time">${iterator.time}</p>
        </div>
      </div>
    `;
    document.getElementById("notification").appendChild(div);
  }
}