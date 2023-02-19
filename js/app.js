let items = document.querySelectorAll('.countdown-item > h4'),
    countdownDiv = document.querySelector('.countdown')

// Назначаем дату отсчёта
let countdownDate = new Date(2024, 01, 19, 20, 10, 0).getTime()

function getCountdownTime() {
  // Прлучить текущее время
  let now = new Date().getTime()
  
  // Найти разницу времени
  let distance = countdownDate - now
  
  // 1 сек = 1000 мс
  // 1 м = 60 сек
  // 1 ч = 60 м
  // 1 день = 24 ч
  
  // Создаем переменные в милисекундах
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  
  // Подсчёт для дней, часов, минут и секунд
  let days = Math.floor(distance / oneDay)
  let hours = Math.floor((distance % oneDay) / oneHour)
  let minutes = Math.floor((distance % oneHour) / oneMinute)
  let seconds = Math.floor((distance % oneMinute) / 1000)
  
  // Создаем массив с переменными
  let values = [days, hours, minutes, seconds]
  
  // Добавляем значения в переменных на страницу
  items.forEach(function (item, index) {
    item.textContent = values[index]
  })
  
  if (distance < 0) {
    clearInterval(countdown)
    countdownDiv.innerHTML = "<h4 class='expired'>Время вышло</h4>"
  }
}

// Обновление счётчика каждую секунду
let countdown = setInterval(getCountdownTime, 1000)

// Инициализация текущего времени
getCountdownTime()