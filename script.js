// Открывание конверта
function openEnvelope() {
    document.getElementById('envelope').classList.add('open');
    document.getElementById('letter').classList.add('show');
}

// Убегающая кнопка "Нет" (исправленная)
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Получаем размеры окна и кнопки
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // Считаем безопасные границы (кнопка всегда видна)
    const maxX = windowWidth - btnWidth - 50;
    const maxY = windowHeight - btnHeight - 50;
    
    // Минимальные отступы от краёв
    const minX = 20;
    const minY = 20;
    
    // Генерируем случайные координаты в пределах границ
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;
    
    // Ограничиваем, чтобы кнопка не уходила за край
    randomX = Math.min(Math.max(randomX, minX), maxX);
    randomY = Math.min(Math.max(randomY, minY), maxY);
    
    // Применяем новую позицию
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '9999';
}

// Показ фото при нажатии "Да"
function showPhoto() {
    document.getElementById('photoFrame').classList.add('show');
    // Прячем конверт
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

// Запускаем сердечки (каждые 300 миллисекунд)
setInterval(createHeart, 300);

// Добавляем обработчик для кнопки "Нет" при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    if (noBtn) {
        noBtn.addEventListener('mouseover', moveNoButton);
    }
});