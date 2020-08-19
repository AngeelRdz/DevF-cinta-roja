let array1 = [1, 2, 3, 4, 5];

console.log("1" === "1", array1);

let animals = [
  {
    name: "Gunter",
    age: 7,
    favoriteFood: "Sausages",
  },
  {
    name: "Robin",
    age: 4,
    favoriteFood: "Fishes",
  },
  {
    name: "Misha",
    age: 3,
    favoriteFood: "Banana",
  },
  {
    name: "Misha",
    age: 3,
    favoriteFood: "Banana",
  },
];

for (let index = 0; index < animals.length; index++) {
  const element = animals[index];
  if (element.age > 3) {
    const answerAge = element.age;
    console.log("Resultado:", answerAge);
  }
}

for (let i = 0; i < animals.length; i++) {
  if (animals[i].age > 3) {
    console.log("Resultado:", animals[i]);
  }
}

const fileteredAnimals = animals.filter((EachObject) => EachObject.age > 3);
console.log("fileteredAnimals", fileteredAnimals);

const mayorTres = animals.filter((animal) => animal.age > 3);
console.log("mayorTres", mayorTres);

const mappedAnimals = animals.map((animal) => {
  if (animal.age > 3) {
    return animal;
  } else {
    return "Hola";
  }
});

console.log("mappedAnimals", mappedAnimals);

// class BankAcccount {
//     constructor() {
//         this.balance = ''
//     }

//     addFunds(money) {
//         this.balance =+ money
//     }

// getFunds
// }

// class Perro {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const perro1 = new Perro('Angel');

// console.log(perro1);
