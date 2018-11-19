interface Person {
  name: string,
  age: number
}

interface Animal {
  name: string,
  type: 'cat' | 'dog'
}

type PersonOrAnimal = Person | Animal

const tonio: Person = {
  name: 'Tonio',
  age: 26
};

const toniosCat: Animal = {
  name: 'Nala',
  type: 'cat'
};


const printName = (toBePrint: PersonOrAnimal) => console.log(toBePrint.name)

const printTypeIfAnimalHumanOtherwise_incorrect = (toBePrinted: PersonOrAnimal) => {
  //  error TS2339: Property 'type' does not exist on type 'PersonOrAnimal'
  if(toBePrinted.type){
    console.log(toBePrinted.type)
  }
  else {
    console.log("human")
  }
}

const printTypeIfAnimalHumanOtherwise_incorrect_bis = (toBePrinted: PersonOrAnimal) => {
  //error TS2693: 'Animal' only refers to a type, but is being used as a value here.
  if(toBePrinted instanceof Animal){ //works with classes, but not with interfaces
    console.log(toBePrinted.type)
  }
  else {
    console.log("human")
  }
}

function determineIfIsAnimalOrHuman(toBeDetermined: PersonOrAnimal): toBeDetermined is Animal {
  if((toBeDetermined as Animal).type){
    return true
  }
  return false
}

function determineIfIsAnimalOrHuman_incorrect(toBeDetermined: PersonOrAnimal): toBeDetermined is Animal {
  if((toBeDetermined as Animal).type){
    return false
  }
  return true
}

const printTypeIfAnimalHumanOtherwise_correct = (toBePrinted: PersonOrAnimal) => {
  if(determineIfIsAnimalOrHuman(toBePrinted)){
    console.log(toBePrinted.type) //toBePrinted is an Animal
  }
  else {
    console.log("human")
  }
}


const printTypeIfAnimalHumanOtherwise_using_incorrect_predicate = (toBePrinted: PersonOrAnimal) => {
  if(determineIfIsAnimalOrHuman_incorrect(toBePrinted)){
    console.log(toBePrinted.type) //toBePrinted is an Animal
  }
  else {
    console.log("human")
  }
};

printTypeIfAnimalHumanOtherwise_using_incorrect_predicate(tonio)
//undefined !!