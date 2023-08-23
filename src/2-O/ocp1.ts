class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getAnimalName() {}
}

const animals: Array<Animal> = [new Animal('lion'), new Animal('mouse')];

/*
  The function AnimalSound does not conform to the open-closed principle because it cannot be closed against new kinds of animals.
  If we add a new animal - we have to modify the AnimalSound function.
*/

function AnimalSound(animals: Array<Animal>) {
  for (let i = 0; i <= animals.length; i++) {
    if (animals[i].name == 'lion') console.log('roar');
    if (animals[i].name == 'mouse') console.log('squeak');
  }
}

AnimalSound(animals);

class AnimalSolution {
  makeSound() {}
}

class Lion extends Animal {
  makeSound() {
    return 'roar';
  }
}

class Squirrel extends Animal {
  makeSound() {
    return 'squeak';
  }
}

class Snake extends Animal {
  makeSound() {
    return 'hiss';
  }
}

function AnimalSoundSolution(animals: Array<AnimalSolution>) {
  for (let i = 0; i <= animals.length; i++) {
    console.log(animals[i].makeSound());
  }
}

const animalsSolution: Array<AnimalSolution> = [
  new Lion('lion'),
  new Squirrel('squirrel'),
];

AnimalSoundSolution(animalsSolution);
