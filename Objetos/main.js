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

class Perro {
  constructor(name) {
    this.name = name;
  }
}

const perro1 = new Perro("Angel");

console.log(perro1);

class BankAccount {
    constructor(name, initialAmount) {
        this.userName = name
        this.balance = initialAmount
    }

    // Get,  Set
    getUserName(){
      return this.userName
    }

    getBalance(){
      return `Your total amount is $ ${this.balance}.`
    }

    //Operations
    increaseBalance(amount){
        this.balance += amount
        console.log(this.balance)
    }

    makeTransfer(amount, userAccount){
        const validation = this.helperBalance(amount)
        if (validation) {
          this.balance -= amount
            const userName = userAccount.getUserName()
            userAccount.increaseBalance(amount)
            return `You now have $ ${this.balance}. Due to a deposit to ${userName}.`
        } else {
            return `You haven't enough resources.`
        }
    }

    buy(concept, price){
      const validation = this.helperBalance(price)
      if (validation) {
        this.balance -= price
        return `You now have $ ${this.balance}. Due to a purchase of ${concept}.`
      } else {
        return `You have not enough money to continue with the operation.`
      }
    }

    //Helper
    helperBalance(amount){
        if (this.balance < amount) {
            return false
        } else {
            return true
        }
    }
}

const GunterBanckAccount = new BankAccount('Gunter', 5000)

const MiloBanckAccount = new BankAccount('Milo', 5000)

console.log(GunterBanckAccount.getBalance());
console.log(MiloBanckAccount.getBalance());

console.log(GunterBanckAccount.buy('Gastos en general', 1000));

// GunterBanckAccount.makeTransfer(3000, MiloBanckAccount)
console.log(GunterBanckAccount.makeTransfer(1000, MiloBanckAccount));

console.log('GunterBanckAccount', GunterBanckAccount);

console.log(GunterBanckAccount.getBalance());
console.log(MiloBanckAccount.getBalance());

console.log(
  "Ejercicio 1:::",
  `1.- Elige un pingüino de la lista de pingüinos ficticios de 
wikipedia https://en.wikipedia.org/wiki/List_of_fictional_penguins
Crea un objeto llamado myPenguin con propiedades que representen
la información listada en cada columna en esa página
de wikipedia (por ejemplo: character, origin)`
);

const myPenguin = {
  character: "Captain Cook",
  origin: "Mr. Popper's Penguins",
  author: "Richard and Florence Atwater",
  presentation: function () {
    return `Hola soy un pinwino y mi nombre es ${this.character}`;
  },
};

console.log("Respuesta ejercicio1:: myPenguin inicial", myPenguin)

console.log(
  "Ejercicio 2:::",
  `2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
de bienvenida. La salida debe ser algo como:
“Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]”`
);

console.log(`Respuesta ejercicio 2:: ${myPenguin.presentation()}`);

console.log(
  "Ejercicio 3:::",
  `3.- Escribe otra línea de código que añada una nueva propiedad a tu
  pingüino llamada puedeVolar y asignalo a falso.
Nota: No modifiques el código original donde definiste a tu pingüino`
);

myPenguin.puedeVolar = false;
console.log(myPenguin.puedeVolar);

console.log('Respuesta ejercicio 3:: Nuevo myPenguin:', myPenguin)

console.log(
  "Ejercicio 11:::",
  `11.- Haz una clase llamada Persona que siga las siguientes condiciones:
Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
calcularIMC()
esMayorDeEdad()
El constructor pide nombre,edad,sexo,peso y altura
Generar el RFC a partir de el nombre, edad y sexo`
);

class Persona {
  constructor(name, lastName, maidenName, birthdate, age, gender, weight, height) {
    this.name = name
    this.lastName = lastName
    this.maidenName = maidenName
    this.birthdate = birthdate
    this.age = age
    this.sex = gender
    this.weight = weight
    this.height = height
    this.RFC = ""
  }
  
  // interactuar con los datos
  setName(newName) {
    console.log('newName:', newName)
    return this.name = newName
  }

  //obtener los datos
  getName() {
    console.log('Name', this.name)
    return this.name
  }

  generateRFC() {
    const lastNameFirst2 = this.lastName.slice(0,2)
    const maidenNameFirsLetter = this.maidenName[0]
    const nameFirstLetter = this.name[0]
    const birthdateArray = this.birthdate.split("/")
    const yearBirthdateTransform = birthdateArray[0].slice(2,4)
    const yearTransform = yearBirthdateTransform
    const birthdateTranform = yearTransform + birthdateArray[1] + birthdateArray[2]

    this.RFC += (lastNameFirst2 + maidenNameFirsLetter + nameFirstLetter + birthdateTranform).toUpperCase()

    // console.log('ID:', lastNameFirst2, maidenNameFirsLetter, nameFirstLetter, birthdateArray)
    return this.RFC
  }

  calcularIMC() {
    const result = this.weight / (this.height * this.height);
    return `Tu IMC es: ${result}`;
  }

  esMayorDeEdad() {
    const validationAge = this.age >= 18;
    const userName = this.name;
    if (validationAge) {
      return `Eres mayor de edad ${userName}`;
    } else {
      return `No eres mayor de edad ${userName}, eres chavito.`;
    }
  }
}

const Persona1 = new Persona("Angel", "Rodriguez", "Martinez", '1992/05/14', 28, "M", 70, 1.8);
const Persona2 = new Persona("Angel", "Rodriguez", "Martinez", '1992/05/14', 28, "M", 70, 1.8);
const Persona3 = new Persona("Angel", "Rodriguez", "Martinez", '1992/05/14', 28, "M", 70, 1.8);

console.log('Persona1.getName()::', Persona1.getName())

console.log('Persona1.setName()::', Persona1.setName('Angelo'))

console.log("¿Eres mayor de edad?", Persona1.esMayorDeEdad(), Persona1);

console.log('Calcular RFC:', Persona2.generateRFC(), Persona2)

console.log("Calcular IMC:", Persona3.calcularIMC(), Persona3);

console.log(
  "Ejercicio 12:::",
  `12.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
-Titular y cantidad, estado 
-ingresar(cantidad)
-retirar(cantidad)
Hacer las validaciones previas
Como regla de negocio no debe de tener más de $900 y menos de $10`
);

// class Cuenta {
//   constructor(titular, cantidad, estado) {
//     this.headline = titular;
//     this.quantity = cantidad;
//     this.state = estado;
//   }

//   ingresar() {
//     const validationAge = this.quantity
//   }

//   retirar() {

//   }
// }

// const Cuenta1 = new Cuenta('Angel', 50, true)
// const Cuenta2 = new Cuenta('Pepe', 30, false)

// console.log('Ingresar cuenta 1:', Cuenta1.ingresar())
// console.log('Retirar cuenta 1:', Cuenta1.retirar())

// console.log(Cuenta1);

// console.log('Ingresar cuenta 2:', Cuenta2.ingresar())
// console.log('Retirar cuenta 2:', Cuenta2.retirar())
// console.log(Cuenta2);
