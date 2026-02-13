// Открывание конверта
function openEnvelope() {
    document.getElementById('envelope').classList.add('open');
    document.getElementById('letter').classList.add('show');
}

// Убегающая кнопка "Нет" - БЕГАЕТ ТОЛЬКО СВЕРХУ
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Получаем размеры окна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Получаем размеры кнопки
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // ВЕРХНЯЯ ЗОНА - ТОЛЬКО СВЕРХУ КОНВЕРТА!
    // Конверт находится на 50% высоты экрана
    // Верхняя зона: от 20px до 40% высоты экрана
    
    const TOP_MIN_Y = 20;                    // Минимум 20px от верха
    const TOP_MAX_Y = windowHeight * 0.4;    // Максимум 40% высоты экрана
    
    // По горизонтали - от левого до правого края (с отступами)
    const MIN_X = 20;
    const MAX_X = windowWidth - btnWidth - 20;
    
    // Генерируем координаты ТОЛЬКО в верхней зоне
    let randomX = MIN_X + (Math.random() * (MAX_X - MIN_X));
    let randomY = TOP_MIN_Y + (Math.random() * (TOP_MAX_Y - TOP_MIN_Y - btnHeight));
    
    // ФИНАЛЬНАЯ ПРОВЕРКА
    randomX = Math.max(20, Math.min(randomX, windowWidth - btnWidth - 20));
    randomY = Math.max(20, Math.min(randomY, windowHeight * 0.4 - btnHeight));
    
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