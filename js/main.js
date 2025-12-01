let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// number
document.getElementById("callButton").addEventListener("click", function(e) {
                e.preventDefault();
                const phone = "18001801551";
                if (/Mobi|Android/i.test(navigator.userAgent)) {
                  // Mobile device
                  window.location.href = "tel:" + phone;
                } else {
                  // Not a mobile device
                  alert("Please use a mobile device to make this call.");
                }
              });