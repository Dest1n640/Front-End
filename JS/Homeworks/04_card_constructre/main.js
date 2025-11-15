document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.constructor form');
  const cardOrganization = document.querySelector('.card-organization');
  const cardName = document.querySelector('.card-name');
  const cardWork = document.querySelector('.card-work');
  const cardAnother = document.querySelector('.card-another');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Получаем значения текстовых полей
    const organization = form.elements['organization'].value;
    const fullName = form.elements['fullName'].value;
    const work = form.elements['work'].value;
    const phone = form.elements['Number'] ? form.elements['Number'].value : '';
    const email = form.elements['mail'] ? form.elements['mail'].value : '';
    const address = form.elements['address'] ? form.elements['address'].value : '';

    // Получаем значения переключателей для ФИО
    const nameColor = form.querySelector('input[name="name-color"]:checked')?.value || 'black';
    const nameFont = form.querySelector('input[name="name-font"]:checked')?.value || '24px';
    const nameAlign = form.querySelector('input[name="name-align"]:checked')?.value || 'center';

    // Получаем значения переключателей для должности
    const workColor = form.querySelector('input[name="work-color"]:checked')?.value || 'black';
    const workFont = form.querySelector('input[name="work-font"]:checked')?.value || '16px';
    const workAlign = form.querySelector('input[name="work-align"]:checked')?.value || 'center';

    // Отображать email и адрес
    const showEmail = form.elements['show']?.checked;
    const showAddress = form.elements['show2']?.checked;

    // Выводим значения на карточку
    cardOrganization.textContent = organization;
    cardName.textContent = fullName;
    cardWork.textContent = work;

    // Стили для ФИО
    cardName.style.color = nameColor;
    cardName.style.fontSize = nameFont;
    cardName.style.textAlign = nameAlign;

    // Стили для должности
    cardWork.style.color = workColor;
    cardWork.style.fontSize = workFont;
    cardWork.style.textAlign = workAlign;

    // Собираем остальные данные (телефон, email, адрес)
    let anotherContent = '';
    if (phone) {
      anotherContent += phone;
    }
    if (showEmail && email) {
      if (anotherContent) anotherContent += '<br>';
      anotherContent += email;
    }
    if (showAddress && address) {
      if (anotherContent) anotherContent += '<br>';
      anotherContent += address;
    }
    cardAnother.innerHTML = anotherContent;
  });
});
