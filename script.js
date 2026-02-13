// Открывание конверта
function openEnvelope() {
    document.getElementById('envelope').classList.add('open');
    document.getElementById('letter').classList.add('show');
}

// Убегающая кнопка "Нет" - АБСОЛЮТНО НАДЁЖНАЯ ВЕРСИЯ
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Получаем размеры окна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Получаем размеры кнопки
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // ЖЁСТКИЕ НЕПРОБИВАЕМЫЕ ГРАНИЦЫ
    // Кнопка НИКОГДА не выйдет за эти пределы
    const BORDER = 20; // базовый отступ
    
    // Левый край: минимум 20px
    const MIN_X = 20;
    
    // Правый край: ширина окна - ширина кнопки - 20px
    const MAX_X = windowWidth - btnWidth - 20;
    
    // Верхний край: 150px (ниже конверта)
    const MIN_Y = 150;
    
    // Нижний край: высота окна - высота кнопки - 20px
    const MAX_Y = windowHeight - btnHeight - 20;
    
    // Если экран слишком маленький - ставим безопасные значения
    const safeMinX = Math.min(MIN_X, MAX_X - 100);
    const safeMaxX = Math.max(MAX_X, MIN_X + 100);
    const safeMinY = Math.min(MIN_Y, MAX_Y - 100);
    const safeMaxY = Math.max(MAX_Y, MIN_Y + 100);
    
    // Генерируем координаты ТОЛЬКО в безопасной зоне
    let randomX = safeMinX + (Math.random() * (safeMaxX - safeMinX));
    let randomY = safeMinY + (Math.random() * (safeMaxY - safeMinY));
    
    // ФИНАЛЬНАЯ ОБРЕЗКА - ГАРАНТИЯ 100%
    randomX = Math.max(safeMinX, Math.min(randomX, safeMaxX));
    randomY = Math.max(safeMinY, Math.min(randomY, safeMaxY));
    
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