const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const morningLesson2 = (object, key, value) => object[key] = value;
morningLesson2(lesson2, 'turno', 'manhã');

const listKeys = object => Object.keys(object);
console.log(listKeys(lesson2));

const objSize = object => Object.keys(object).length;
console.log(objSize(lesson2));

const listValues = object => Object.values(object);
console.log(listValues(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)

const totalStudents = object => {
  let total = 0;
  const arrays = Object.keys(object);

  for (index in arrays) {
    total += object[arrays[index]].numeroEstudantes;
  }
  
  return total;
}
console.log(totalStudents(allLessons));

const getValueByNumber = (object, position) => Object.values(object)[position];
console.log(getValueByNumber(lesson1, 0));

const pair = (object, key, value) => {
  const pairs = Object.entries(object);

  for (index in pairs) {
    if (pairs[index][0] === key && pairs[index][1] === value) {
      return true;
    }
  }

  return false;
}
console.log(pair(lesson3, 'materia', 'Maria Clara'));

const mathStudents = object => {
  const arrays = Object.keys(allLessons);
  let total = 0;

  for (index in arrays) {
    if (object[arrays[index]].materia === 'Matemática') {
      total += object[arrays[index]].numeroEstudantes;
    }
  }

  return total;
}
console.log(mathStudents(allLessons))

const createReport = (object, name) => {
  const arrays = Object.keys(allLessons);
  const subjects = [];
  let studentsTotal = 0;

  for (index in arrays) {
    if (object[arrays[index]].professor === name) {
      subjects.push(object[arrays[index]].materia);
      studentsTotal += object[arrays[index]].numeroEstudantes;
    }
  }

  return `{
  professor: '${name}', 
  aulas: [ ${subjects} ],
  estudantes: ${studentsTotal}
}`;
}
console.log(createReport(allLessons, 'Maria Clara'));