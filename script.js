
const openBtn = document.getElementById('openInvitation');
const landing = document.getElementById('landing');
const content = document.getElementById('content');
const bgMusic = document.getElementById('bgMusic');

openBtn.addEventListener('click', () => {
  landing.style.transition = "opacity 1s";
  landing.style.opacity = 0;
  setTimeout(() => {
    landing.style.display = "none";
    content.classList.remove('hidden');
    bgMusic.play();
  }, 2000);
});


// Deteksi scroll untuk animasi dari bawah
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));
// Target tanggal nikah
var countDownDate = new Date("Aug 3, 2025 08:09:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);
