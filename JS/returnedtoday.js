// Функция для обновления статуса (опционально)
function updateStatus(row, newStatus) {
    const statusCell = row.querySelector("td:last-child");
    statusCell.textContent = newStatus;
  }
  
  // Добавление обработчиков событий кнопкам "Возвращено" (опционально)
  document.querySelectorAll(".return-button").forEach(button => {
    button.addEventListener("click", () => {
      const row = button.parentNode.parentNode; // Получить родительскую строку
      updateStatus(row, "Возвращено"); // Обновить статус до "Возвращено"
    });
  });
  