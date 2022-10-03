fetch("data.json")
  .then(res => res.json())
  .then(object => appendData(object))
  .catch((err) => console.log(err))

function appendData(object) {
  for (const iterator of object) {
    console.log(iterator);
    let div = document.createElement("div")
    if (iterator.status === "unread") {
      div.className = "notification notification--unread";
    }
    if (iterator.status === "read") {
      div.className = "notification";
    }

    let notification = "notification__container";
    if (iterator.activityCategory == "sent you a private message") {
      notification = "notification__container notification__container--message";
    }
    if (iterator.activityCategory == "commented on your picture") {
      notification = "notification__container notification__container--picture";
    }

    let divChild = `
      <p class="notification__head">
        <span class="notification__name">
          <a href="#">${iterator.name}</a>
        </span>
        <span class="notification__activity-category">
          ${iterator.activityCategory}
        </span>
        <span class="notification__activity">
          <a href="#">${iterator.activity}</a>
        </span>
      </p>
      <p class="notification__time">${iterator.time}</p>
    `;

    div.innerHTML = `
      <div class="notification__avatar" style="content: url(${iterator.avatar});"></div>
      <div class="${notification}">
        ${divChild}
      </div>
    `;

    document.getElementById("notification").appendChild(div);
  }
}