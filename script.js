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

    let activity = "notification__activity";
    if (iterator.activityCategory == "sent you a private message") {
      activity = "notification__activity notification__activity--message";
    }

    div.innerHTML = `
      <div class="notification__avatar" style="content: url(${iterator.avatar});"></div>
      <div class="notification__container">
        <p class="notification__head">
          <span class="notification__name">
            <a href="#">${iterator.name}</a>
          </span>
          <span class="notification__activity-category">
            ${iterator.activityCategory}
          </span>
          <span class="${activity}">
            <a href="#">${iterator.activity}</a>
          </span>
        </p>
        <p class="notification__time">${iterator.time}</p>
      </div>
    `;

    document.getElementById("notification").appendChild(div);
  }
}