// city card scroll buttons
const cardScrollView = document.getElementById("city-scroll-cards");
const btnPrevious = document.getElementById("btn-previous");
const btnNext = document.getElementById("btn-next");

// btnNext.onclick = function () {
//   cardScrollView.scrollLeft += 150;
// };

// btnPrevious.onclick = function () {
//   cardScrollView.scrollLeft -= 150;
// };

btnNext.addEventListener("click", () => {
  cardScrollView.scrollBy({
    left: 200,
    behavior: "smooth",
  });
});

btnPrevious.addEventListener("click", () => {
  cardScrollView.scrollBy({
    left: -200,
    behavior: "smooth",
  });
});

cardScrollView.addEventListener("scroll", function () {
  if (cardScrollView.scrollLeft === 0) {
    btnPrevious.disabled = true;
  } else {
    btnPrevious.disabled = false;
  }
  if (
    cardScrollView.scrollLeft ===
    cardScrollView.scrollWidth - cardScrollView.offsetWidth
  ) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
});

// bottom navigation
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bottom-nav").style.bottom = "0";
  } else {
    document.getElementById("bottom-nav").style.bottom = "-65px";
  }
  prevScrollpos = currentScrollPos;
};
