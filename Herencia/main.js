class Pet {
  constructor(name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
  }

  eat(food = this.favoriteFood) {
    return `Aca comiendo un emparedado de ${food}`;
  }
}

const Gunter = new Pet("Gunter", "Salchichas");

class Dog extends Pet {
  constructor(name, favoriteFood, color) {
    super(name, favoriteFood);
    this.color = color;
  }

  ladrar() {
    return "Estoy ladrando";
  }
}

const Milo = new Dog("Milo", "Banana", "Black");

console.log('Milo::', Milo.eat())

const feedPet = (pet, food = "Albondigas") => {
  console.log("Función feedPet::", pet.eat(food));
};

feedPet(Gunter, "Croquetas");
console.log('Dogs::', Gunter, Milo)
