AOS.init({
  duration: 1000,
  once: true
});

const text = "Český MMA zápasník, bývalý profesionální kulturista, fitness trenér, podnikatel a influencer.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect();
