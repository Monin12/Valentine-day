// Открывание конверта
function openEnvelope() {
    document.getElementById('envelope').classList.add('open');
    document.getElementById('letter').classList.add('show');
}

// Убегающая кнопка "Нет" - ГАРАНТИЯ 100%
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Получаем размеры окна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Получаем размеры кнопки
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // ЖЁСТКИЕ ГРАНИЦЫ (отступы от краёв в пикселях)
    const MIN_X = 20;      // от левого края
    const MIN_Y = 80;      // от верхнего края (чтобы не наезжала на конверт)
    const MAX_X = windowWidth - btnWidth - 30;  // от правого края
    const MAX_Y = windowHeight - btnHeight - 30; // от нижнего края
    
    // Генерируем случайные координаты ВНУТРИ границ
    let randomX = MIN_X + (Math.random() * (MAX_X - MIN_X));
    let randomY = MIN_Y + (Math.random() * (MAX_Y - MIN_Y));
    
    // ДОПОЛНИТЕЛЬНАЯ ПРОВЕРКА (на всякий случай)
    if (randomX < MIN_X) randomX = MIN_X;
    if (randomX > MAX_X) randomX = MAX_X;
    if (randomY < MIN_Y) randomY = MIN_Y;
    if (randomY > MAX_Y) randomY = MAX_Y;
    
    // Применяем позицию
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '9999';
    
    // Отладка (можно удалить позже)
    console.log('Кнопка убежала на:', randomX, randomY);
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