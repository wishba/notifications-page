let unread = document.getElementsByClassName('notification--unread')
let unreadCount = document.getElementById('totalUnread')
unreadCount.innerHTML = unread.length

function markAllRead() {
  let notification = document.getElementsByClassName('notification')
  for (const iterator of notification) {
    iterator.classList.remove("notification--unread")
  }
  unreadCount.style.display = "none"
}