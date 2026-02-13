// Счётчик нажатий на кнопку "Нет"
let noClickCount = 0;
// Флаг грустного режима
let isSadMode = false;
// Интервалы для сердечек
let heartInterval;
let sadHeartInterval;

// Открывание конверта
function openEnvelope() {
    document.getElementById('envelope').classList.add('open');
    document.getElementById('letter').classList.add('show');
}

// Создание разбитого сердечка
function createBrokenHeart() {
    const brokenHeart = document.createElement('div');
    brokenHeart.innerHTML = '💔';
    brokenHeart.style.position = 'fixed';
    brokenHeart.style.left = Math.random() * 100 + '%';
    brokenHeart.style.top = '-20px';
    brokenHeart.style.fontSize = Math.random() * 30 + 20 + 'px';
    brokenHeart.style.opacity = Math.random() * 0.7 + 0.3;
    brokenHeart.style.animation = 'fall ' + (Math.random() * 3 + 2) + 's linear, breakHeart 1s ease-out';
    brokenHeart.style.pointerEvents = 'none';
    brokenHeart.style.zIndex = '2';
    brokenHeart.style.color = '#8b0000';
    
    document.querySelector('.hearts-bg').appendChild(brokenHeart);
    
    setTimeout(() => {
        brokenHeart.remove();
    }, 5000);
}

// Создание обычного сердечка
function createHeart() {
    if (isSadMode) {
        createBrokenHeart();
        return;
    }
    
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

// Убегающая кнопка "Нет"
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Увеличиваем счётчик нажатий
    noClickCount++;
    
    // При каждом нажатии добавляем разбитые сердечки
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createBrokenHeart();
        }, i * 100);
    }
    
    // Проверяем, не нажали ли кнопку 3 раза
    if (noClickCount >= 3) {
        showSadPhoto();
        return;
    }
    
    // Получаем размеры окна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Получаем размеры кнопки
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // ВЕРХНЯЯ ЗОНА - ТОЛЬКО СВЕРХУ!
    const TOP_MIN_Y = 20;
    const TOP_MAX_Y = windowHeight * 0.4;
    
    // По горизонтали - от левого до правого края
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

// Показ счастливого фото
function showPhoto() {
    document.getElementById('photoFrame').classList.add('show');
    document.querySelector('.envelope-container').style.opacity = '0';
}

// Показ грустного фото (при 3 нажатиях на "Нет")
function showSadPhoto() {
    isSadMode = true;
    
    // Прячем конверт и записку
    document.querySelector('.envelope-container').style.opacity = '0';
    document.getElementById('letter').classList.remove('show');
    
    // Показываем грустное фото
    document.getElementById('sadPhotoFrame').classList.add('show');
    
    // Делаем фон грустным
    document.body.classList.add('sad-mode');
    
    // Очищаем все обычные сердечки
    document.querySelector('.hearts-bg').innerHTML = '';
    
    // Запускаем только разбитые сердечки
    sadHeartInterval = setInterval(createBrokenHeart, 200);
}

// Сброс к конверту (кнопка "Попробовать снова")
function resetToEnvelope() {
    // Сбрасываем флаги и счётчик
    isSadMode = false;
    noClickCount = 0;
    
    // Прячем грустное фото
    document.getElementById('sadPhotoFrame').classList.remove('show');
    
    // Убираем грустный режим
    document.body.classList.remove('sad-mode');
    
    // Показываем конверт
    document.querySelector('.envelope-container').style.opacity = '1';
    
    // Закрываем конверт (убираем класс open)
    document.getElementById('envelope').classList.remove('open');
    
    // Прячем записку
    document.getElementById('letter').classList.remove('show');
    
    // Очищаем все сердечки
    document.querySelector('.hearts-bg').innerHTML = '';
    
    // Останавливаем интервалы с разбитыми сердцами
    if (sadHeartInterval) {
        clearInterval(sadHeartInterval);
    }
    
    // Запускаем обычные сердечки заново
    heartInterval = setInterval(createHeart, 300);
}

// Запускаем обычные сердечки
heartInterval = setInterval(createHeart, 300);