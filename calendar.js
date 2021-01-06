"use strict";

// календарь
let year = document.getElementById('year');
let month = document.getElementById('month');

document.addEventListener('DOMContentLoaded', () => {
  month.value = '';
  year.value = '';
});

let txtMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

Date.prototype.daysInMonth = function () {
  return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

function checkMonth() {
  month.value = month.value.replace(/[\D\.]/g, '');
}

function checkYear() {
  year.style = "";
  year.value = year.value.replace(/[\D\.]/g, '');
}

function generate() {
  let calendar = document.getElementById('calendar');
  let yearValue = + year.value;

  if (yearValue < 100) {
    year.style = "border-color: red;";
    return
  }

  let tr = document.createElement('tr');
  let td = document.createElement('td');
  let newTd;
  let newTr;
  calendar.innerHTML = `<tr>
                             <th>ПН</th>
                             <th>ВТ</th>
                             <th>СР</th>
                             <th>ЧТ</th>
                             <th>ПТ</th>
                             <th>СБ</th>
                             <th>ВС</th>
                          </tr>`;

  let monthValue = month.value ? + month.value - 1 : 0;
  let newDate = new Date(yearValue, monthValue, 1);
  let selectDate = document.getElementById('selectDate');
  selectDate.innerHTML = `${txtMonth[newDate.getMonth()]}, ${newDate.getFullYear()} г.`;

  let firstDay = newDate.getDay() > 0 ?
    newDate.getDay()
    : 7;

  let numDay = 1;
  let daysInMonth = newDate.daysInMonth();
  let currentDays = 1;
  while (currentDays <= daysInMonth) {
    newTr = tr.cloneNode(true);
    for (let i = 0; i < 7; i ++) {
      newTd = td.cloneNode(true);
      if (numDay >= firstDay && currentDays <= daysInMonth) {
        if (i === 5 || i === 6) newTd.classList.add('weakDay');
        newTd.innerHTML = currentDays;
        currentDays ++
      } else {
        newTd.innerHTML = '';
        numDay ++;
      }
      newTr.appendChild(newTd);
    }
    calendar.appendChild(newTr);
  }
}




