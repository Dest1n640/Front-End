// Получаем элементы DOM
const addTaskButton = document.querySelector('.add_task');
const card = document.querySelector('.card');
const cardTitle = document.querySelector('.card_name h3');
const taskInput = document.querySelector('.card_add_task');
const priorityCheckbox = document.querySelector('.card_checkbox_priority');
const saveButton = document.querySelector('.card_button_save');
const cancelButton = document.querySelector('.card_button_cancel');
const tasksContainer = document.getElementById('tasks-container');
const taskTemplate = document.querySelector('.task-template');

// Переменная для хранения редактируемой задачи
let currentEditingTask = null;

// Функция для показа карточки
function showCard(isEditing = false) {
  card.style.display = 'block';
  
  if (isEditing) {
    cardTitle.textContent = 'Редактирование задачи';
  } else {
    cardTitle.textContent = 'Карточка задачи';
    clearCard();
  }
  
  taskInput.focus();
}

// Функция для скрытия карточки
function hideCard() {
  card.style.display = 'none';
  clearCard();
  currentEditingTask = null;
}

// Функция для очистки карточки
function clearCard() {
  taskInput.value = '';
  priorityCheckbox.checked = false;
}

// Функция для создания новой задачи
function createTask(taskText, isImportant) {
  // Клонируем шаблон задачи
  const newTask = taskTemplate.cloneNode(true);
  newTask.classList.remove('task-template');
  newTask.style.display = 'flex';
  
  // Устанавливаем ID для идентификации
  newTask.dataset.id = Date.now();
  
  // Заполняем данные задачи
  const taskNameElement = newTask.querySelector('.task_name');
  taskNameElement.textContent = taskText;
  
  // Устанавливаем видимость иконки приоритета
  const importantIcon = newTask.querySelector('.is_important');
  if (isImportant) {
    importantIcon.classList.remove('hidden');
  } else {
    importantIcon.classList.add('hidden');
  }
  
  // Добавляем обработчики событий
  setupTaskEventListeners(newTask);
  
  // Добавляем задачу в контейнер
  tasksContainer.appendChild(newTask);
}

// Функция для установки обработчиков событий на задачу
function setupTaskEventListeners(taskElement) {
  // Чекбокс для отметки выполнения
  const checkbox = taskElement.querySelector('.task_result');
  checkbox.addEventListener('change', function() {
    const taskName = taskElement.querySelector('.task_name');
    if (this.checked) {
      taskName.classList.add('completed');
    } else {
      taskName.classList.remove('completed');
    }
  });
  
  // Кнопка редактирования
  const editButton = taskElement.querySelector('.change_task');
  editButton.addEventListener('click', function() {
    editTask(taskElement);
  });
  
  // Кнопка удаления
  const deleteButton = taskElement.querySelector('.delete_task');
  deleteButton.addEventListener('click', function() {
    deleteTask(taskElement);
  });
  
  // Клик по иконке приоритета (для переключения)
  const importantIcon = taskElement.querySelector('.is_important');
  importantIcon.addEventListener('click', function() {
    this.classList.toggle('hidden');
  });
}

// Функция для редактирования задачи
function editTask(taskElement) {
  currentEditingTask = taskElement;
  
  // Получаем данные задачи
  const taskName = taskElement.querySelector('.task_name').textContent;
  const isImportant = !taskElement.querySelector('.is_important').classList.contains('hidden');
  
  // Заполняем карточку
  taskInput.value = taskName;
  priorityCheckbox.checked = isImportant;
  
  // Показываем карточку в режиме редактирования
  showCard(true);
}

// Функция для удаления задачи
function deleteTask(taskElement) {
  taskElement.remove();
}

// Функция для сохранения задачи
function saveTask() {
  const taskText = taskInput.value.trim();
  
  // Валидация
  if (taskText === '') {
    alert('Пожалуйста, введите описание задачи!');
    return;
  }
  
  const isImportant = priorityCheckbox.checked;
  
  if (currentEditingTask) {
    // Обновляем существующую задачу
    const taskName = currentEditingTask.querySelector('.task_name');
    taskName.textContent = taskText;
    
    const importantIcon = currentEditingTask.querySelector('.is_important');
    if (isImportant) {
      importantIcon.classList.remove('hidden');
    } else {
      importantIcon.classList.add('hidden');
    }
    
    currentEditingTask = null;
  } else {
    // Создаем новую задачу
    createTask(taskText, isImportant);
  }
  
  // Скрываем карточку
  hideCard();
}

// Обработчик для кнопки "Добавить"
addTaskButton.addEventListener('click', function() {
  showCard(false);
});

// Обработчик для кнопки "Сохранить"
saveButton.addEventListener('click', function() {
  saveTask();
});

// Обработчик для кнопки "Отменить"
cancelButton.addEventListener('click', function() {
  hideCard();
});

// Обработчик для нажатия Enter в поле ввода
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    saveTask();
  }
});

// Обработчик для нажатия Escape (для скрытия карточки)
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && card.style.display === 'block') {
    hideCard();
  }
});
