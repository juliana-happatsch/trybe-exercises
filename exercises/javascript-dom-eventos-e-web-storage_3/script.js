function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function dezemberDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let list = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let listItem = document.createElement('li');
        listItem.innerText = dezDaysList[i];
        list.appendChild(listItem);

        listItem.classList.add('day');

        switch(dezDaysList[i]) {
            case 24:
            case 31:
                listItem.classList.add('holiday');
                break;

            case 4:
            case 11:
            case 18:
                listItem.classList.add('friday');
                break;

            case 25:
                listItem.classList.add('holiday', 'friday');
                break;
        }
    }
}

function createButtonHoliday(string) {
    let buttonContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');

    buttonContainer.appendChild(button);
    button.id = 'btn-holiday';
    button.innerText = string;
}

function holidayColor() {
    let button = document.getElementById('btn-holiday');
    let holidays = document.getElementsByClassName('holiday');

    button.addEventListener('click', function() {
        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.backgroundColor === 'lightgreen') {
                holidays[i].style.backgroundColor = 'rgb(238,238,238)';
            } else {
                holidays[i].style.backgroundColor = 'lightgreen';
            }
        }
    });
}

function createButtonFriday(string) {
    let buttonContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');

    buttonContainer.appendChild(button);
    button.id = 'btn-friday';
    button.innerText = string;
}

function fridayText() {
    let button = document.getElementById('btn-friday');
    let friday = document.getElementsByClassName('friday');
    let fridayDays = [4, 11, 18, 25];
    let text = 'Simbora';

    button.addEventListener('click', function() {
        for (let i = 0; i < friday.length; i += 1) {
            if (friday[i].innerText !== text) {
                friday[i].innerText = text;
            } else {
                friday[i].innerText = fridayDays[i];
            }
        }
    });
}

function zoomIn() {
    let days = document.getElementById('days');
    days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '25px';
    });
}

function zoomOut() {
    let days = document.getElementById('days');
    days.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
    });
}

function newTask(string) {
    let taskContainer = document.querySelector('.my-tasks');
    let task = document.createElement('span');

    taskContainer.appendChild(task);
    task.innerText = string;
}

function taskColor(color) {
    let taskContainer = document.querySelector('.my-tasks');
    let taskDiv = document.createElement('div');

    taskContainer.appendChild(taskDiv);
    taskDiv.classList.add('task');
    taskDiv.style.backgroundColor = color;
}

function taskSelect() {
    let selected = document.getElementsByClassName('task selected');
    let taskDiv = document.querySelector('.task');

    taskDiv.addEventListener('click', function(event) {
        if (selected.length === 0) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    });
}

dezemberDays();
createButtonHoliday('Feriados');
holidayColor();
createButtonFriday('Sexta-feira');
fridayText();
zoomIn();
zoomOut();
newTask('cozinhar');
taskColor('lightgreen');
taskSelect();