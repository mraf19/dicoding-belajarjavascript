function func(score){
  let result
  if(score >=90){
    result = 'Selamat! Anda mendapatkan nilai A.'
  } else if (score >=80 && score <90){
    result = 'Anda mendapatkan nilai B.'
  } else if (score >=70 && score <80){
    result = 'Anda mendapatkan nilai C.'
  } else if (score >=60 && score <70){
    result = 'Anda mendapatkan nilai D.'
  } else if (score <60){
    result = 'Anda mendapatkan nilai E.'
  } 
  return result
}

const restaurant = {
  name: 'Bakso Mang Dicoding',
  city: 'Bandung',
  'favorite drink': 'Es Teh',
  'favorite food': 'Bakso',
  isVegan: false
}

const { name } = restaurant;
const favoriteDrink = restaurant['favorite drink'];

const evenNumber = [...Array(100).keys()].filter(number => number !== 0 && number % 2 === 0)
console.log(evenNumber)

const currency = new Map([
  ['USD', 14000],
  ['JPY', 131],
  ['SGD', 11000],
  ['MYR', 3500],
])
const priceInJPY = 5000

const priceInIDR = priceInJPY * currency.get('JPY')

function minimal (a,b){
  if (a = b){
    return a
  } else if (a < b){
    return a
  } else {
    return b
  }
}

function findIndex(array, value){
  for (let i = 0; i < array.length; i++){
    if (array[i] === value){
      return i
    }
  }
  return -1
}

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);


class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age, isMammal) {
    super(name, age, isMammal)
    this.isMammal = true
  }

  eat(){
    return `${this.name} sedang makan!`
  }
}

class Eagle extends Animal {
  constructor(name, age, isMammal) {
    super(name, age, isMammal)
    this.isMammal = false
  }

  fly(){
    return `${this.name} sedang terbang!`
  }
}

const myRabbit = new Rabbit('Labi', 2)
const myEagle = new Eagle('Elo', 4)

const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

const greatAuthors = books.filter(book => book.sales >= 1000000).map(book => `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`)