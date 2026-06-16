function openPopup(id) { document.getElementById(id).style.display = 'flex'; }
function closePopup() { document.querySelectorAll('.popup').forEach(p => p.style.display = 'none'); }

// Lógica de Slideshow
const slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}
setInterval(nextSlide, 4000);