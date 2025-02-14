function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);

    const x = Math.random() * window.innerWidth;
    heart.style.left = `${x}px`;
    heart.style.top = '100vh';
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

document.body.addEventListener('click', () => {
    window.location.href = 'https://aronhdez23122005.github.io/CARTAI/';
});