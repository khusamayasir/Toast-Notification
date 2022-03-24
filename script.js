const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = "Hey, what's up";

    container.appendChild(notif);

    setTimeout(() =>  {
        notif.remove();
    }, 3000);
}