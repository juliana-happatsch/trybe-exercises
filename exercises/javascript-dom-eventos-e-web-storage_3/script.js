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

function createButton(string) {
    let buttonContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    buttonContainer.appendChild(button);
    button.innerText = string;
}

dezemberDays()
createButton('Feriados');