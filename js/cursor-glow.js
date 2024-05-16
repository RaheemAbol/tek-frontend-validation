document.addEventListener("DOMContentLoaded", function () {
  const glow = document.createElement("div");
  glow.style.position = "fixed";
  glow.style.width = "1px";
  glow.style.height = "1px";
  glow.style.borderRadius = "50%";
  glow.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  glow.style.boxShadow = "0 0 50px 30px rgba(255, 255, 255, 0.5)";
  glow.style.pointerEvents = "none";
  glow.style.zIndex = "-9999";

  document.body.appendChild(glow);

  document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    glow.style.left = `${mouseX - 5}px`;
    glow.style.top = `${mouseY - 5}px`;
  });

  function animateGlow() {
    glow.animate(
      [
        { boxShadow: "0 0 50px 30px rgba(255, 255, 255, 0.5)" },
        { boxShadow: "0 0 30px 20px rgba(255, 255, 255, 0.9)" },
        { boxShadow: "0 0 50px 30px rgba(255, 255, 255, 0.5)" },
      ],
      {
        duration: 2000,
        iterations: Infinity,
      }
    );
  }

  animateGlow();
});
