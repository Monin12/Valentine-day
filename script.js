// Открывание конверта
function openEnvelope() {
    document.getElementById('envelope').classList.add('open');
    document.getElementById('letter').classList.add('show');
}

// Убегающая кнопка "Нет" - 100% ИСПРАВЛЕНО!
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Получаем размеры окна и кнопки
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // БЕЗОПАСНЫЕ ГРАНИЦЫ (кнопка всегда в пределах экрана)
    const maxX = windowWidth - btnWidth - 30;
    const maxY = windowHeight - btnHeight - 30;
    const minX = 10;
    const minY = 10;
    
    // Генерируем случайные координаты
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;
    
    // ЖЁСТКО ОГРАНИЧИВАЕМ (кнопка НИКОГДА не выйдет за край)
    randomX = Math.min(Math.max(randomX, minX), maxX);
    randomY = Math.min(Math.max(randomY, minY), maxY);
    
    // Применяем позицию
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '9999';
}

// Показ фото при нажатии "Да"
function showPhoto() {
    document.getElementById('photoFrame').classList.add('show');
    document.querySelector('.envelope-container').style.opacity = '0';
}

// Падающие сердечки
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '-20px';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.animation = 'fall ' + (Math.random() * 3 + 3) + 's linear';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1';
    
    document.querySelector('.hearts-bg').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Запускаем сердечки
setInterval(createHeart, 300);