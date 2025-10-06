// script.js (Simple hover effects, animated entry, beautiful details)
document.addEventListener("DOMContentLoaded", () => {
  // Animate cards on entry
  const cards = document.querySelectorAll(".service-card");
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(40px) scale(0.96)";
    setTimeout(() => {
      card.style.transition = "opacity 0.5s cubic-bezier(.5,.2,.3,1), transform 0.5s cubic-bezier(.5,.2,.3,1)";
      card.style.opacity = 1;
      card.style.transform = "translateY(0) scale(1)";
    }, 250 + i * 120);
  });

  // Optional: Ripple effect on click
  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = e.offsetX + "px";
      ripple.style.top = e.offsetY + "px";
      card.appendChild(ripple);
      setTimeout(() => ripple.remove(), 520);
    });
  });
});