fetch("data.json")
  .then(res => res.json())
  .then(object => appendData(object))
  .catch((err) => console.log(err))

function appendData(object) {
  let unread = 0;

  for (const iterator of object) {
    console.log(iterator);
    let div = document.createElement("div")
    if (iterator.status === "unread") {
      div.className = "notification notification--unread";

      unread = unread + 1;
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
    if (iterator.activityCategory == "followed you") {
      notification = "notification__container notification__container--followed";
    }

    let avatar = `
      <div class="notification__avatar" style="content: url(${iterator.avatar});"></div>
    `;
    let name = `
      <span class="notification__name">
        <a href="#">${iterator.name}</a>
      </span>
    `;
    let activityCategory = `
      <span class="notification__activity-category">
        ${iterator.activityCategory}
      </span>
    `;
    let activity = `
      <span class="notification__activity">
        <a href="#">${iterator.activity}</a>
      </span>
    `;
    if (notification == "notification__container notification__container--message") {
      div.innerHTML = `
      ${avatar}
      <div class="${notification}">
        <p class="notification__head">
          ${name}
          ${activityCategory}
        </p>
        <p class="notification__time">${iterator.time}</p>
        <p class="notification__message">${iterator.activity}</p>  
      </div>
    `;
    } else if (notification == "notification__container notification__container--picture") {
      div.innerHTML = `
      ${avatar}
      <div class="${notification}">
        <p class="notification__head">
          ${name}
          ${activityCategory}
        </p>
      </div>
      <div class="notification__picture" style="background-image: url(assets/images/image-chess.webp);"></div>
    `;
    } else if (notification == "notification__container notification__container--followed") {
      div.innerHTML = `
      ${avatar}
      <div class="${notification}">
        <p class="notification__head">
          ${name}
          ${activityCategory}
        </p>
        <p class="notification__time">${iterator.time}</p>
      </div>
    `;
    } else {
      div.innerHTML = `
      ${avatar}
      <div class="${notification}">
        <p class="notification__head">
          ${name}
          ${activityCategory}
          ${activity}
        </p>
        <p class="notification__time">${iterator.time}</p>
      </div>
    `;
    }

    document.getElementById("notification").appendChild(div);
  }

  console.log(unread);
  document.getElementById("notificationCount").innerHTML = unread;
}

function markAllRead() {
  document.getElementById("notificationCount").style.display = "none";
}