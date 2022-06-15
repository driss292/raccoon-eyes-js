const container = document.querySelector(".container");
const balls = document.querySelectorAll(".ball");

container.addEventListener("mousemove", (e) => {
  const x = `${(e.clientX * 100) / window.innerWidth}%`;
  const y = `${(e.clientY * 100) / window.innerHeight}%`;

  balls.forEach((ball) => {
    ball.style.left = x;
    ball.style.top = y;
    ball.style.transform = `translate(-${x},-${y})`;
  });
});
