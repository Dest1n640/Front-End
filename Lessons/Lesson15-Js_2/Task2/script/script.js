let labelsInTable = document.querySelectorAll('#age-table label');
console.log(labelsInTable);

let firstCell = document.querySelector('#age-table td');
console.log(firstCell.textContent);

let secondForm = document.forms[1];
console.log(secondForm);

let searchForm = document.forms['search'];
console.log(searchForm);

let searchFormInput = searchForm.querySelector('input');
console.log(searchFormInput);

let info0 = document.querySelector('[name="info[0]"]');
console.log(info0);

let searchPersonForm = document.forms['search-person'];
let info0InSearchPerson = searchPersonForm.querySelector('[name="info[0]"]');
console.log(info0InSearchPerson);
