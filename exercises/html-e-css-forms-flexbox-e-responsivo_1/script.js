let estadosBrasileiros = [
    {name: 'Acre', abbr: 'AC'},
    {name: 'Alagoas', abbr: 'AL'},
    {name: 'Amapá', abbr: 'AP'},
    {name: 'Amazonas', abbr: 'AM'},
    {name: 'Bahia', abbr: 'BA'},
    {name: 'Ceará', abbr: 'CE'},
    {name: 'Distrito Federal', abbr: 'DF'},
    {name: 'Espírito Santo', abbr: 'ES'},
    {name: 'Goiás', abbr: 'GO'},
    {name: 'Maranhão', abbr: 'MA'},
    {name: 'Mato Grosso', abbr: 'MT'},
    {name: 'Mato Grosso do Sul', abbr: 'MS'},
    {name: 'Minas Gerais', abbr: 'MG'},
    {name: 'Pará', abbr: 'PA'},
    {name: 'Paraíba', abbr: 'PB'},
    {name: 'Paraná', abbr: 'PR'},
    {name: 'Pernambuco', abbr: 'PE'},
    {name: 'Piauí', abbr: 'PI'},
    {name: 'Rio de Janeiro', abbr: 'RJ'},
    {name: 'Rio Grande do Norte', abbr: 'RN'},
    {name: 'Rio Grande do Sul', abbr: 'RS'},
    {name: 'Rondônia', abbr: 'RO'},
    {name: 'Roraima', abbr: 'RR'},
    {name: 'Santa Catarina', abbr: 'SC'},
    {name: 'São Paulo', abbr: 'SP'},
    {name: 'Sergipe', abbr: 'SE'},
    {name: 'Tocantins', abbr: 'TO'},
];

for (let i = 0; i < estadosBrasileiros.length; i += 1) {
    const options = document.createElement('option');
    const select = document.getElementById('estado');
    options.text = estadosBrasileiros[i].name;
    options.value = estadosBrasileiros[i].abbr;
    select.add(options);
}

function validateData(data) {
    if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
        const day = data.substr(0, 2);
        const month = data.substr(3, 2);
        const year = data.substr(6, 4);

        if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && year > 0) {
            return true;
        }
    }
    return false;
}

function checkData() {
    const inputData = document.querySelector('.input-data');
    let data = inputData.value;
    const userData = validateData(data);
    if (!userData && data.length) {
      inputData.value = '';
      alert('data invalida');
      return false;
    }
    return userData;
}

function renderCurriculum(event) {
    event.preventDefault();
    const formElements = document.querySelectorAll('input');
    for (let index = 0; index < formElements.length; index += 1) {
      if (formElements[index].type === 'radio' && !formElements[index].checked) {
        continue;
      }
      const userInput = formElements[index].value;
      const dataUser = document.querySelector('.form-data');
      if (checkEmail() && checkData()) {
        const div = document.createElement('div');
        div.className = 'div-curriculum';
        div.innerHTML = userInput;
        dataUser.appendChild(div);
      }
    }
}
function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}

const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', renderCurriculum);
clearButton.addEventListener('click', clearFields);