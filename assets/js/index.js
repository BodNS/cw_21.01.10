/*const user = "Ivan Ivanov";
const user = ["Ivan Ivanov", "Sidor Sidorov", "Petr Petrov"];

const user = {
  name: "Ivan",
  surname: "Ivanov",
  otchestvo: "Ivanovich",
  print: function () {
    return `${this.name}+${this.surname}+${this.otchestvo}`;
  },
};

function User(name, surname, otchestvo) {
  this.name = name;
  this.surname = surname;
  this.otchestvo = otchestvo;
}
const user1 = new User("Ivan", "Ivanov");

class User {
  constructor(name, surname, otchestvo) {
    this.name = name;
    this.surname = surname;
    this.otchestvo = otchestvo;
  }
  print() {
    console.log(this.name + this.surname + this.otchestvo);
  }
}
const user2 = new User("Ivan", "Ivanov");
*/
class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
  print() {
    return `${this.name}  мыло ${this.email}`;
  }
}

class Stud extends User {
  constructor(name, password, email, arrOcenki) {
    super(name, password, email);
    this.arrOcenki = arrOcenki;
  }
  printOcenki() {
    return this.arrOcenki;
  }
  srednBal() {
    return this.arrOcenki.reduce((a, b) => a + b, 0) / this.arrOcenki.length;
  }
}

class Teacher extends User {
  constructor(name, password, email, zarplata, chasi) {
    super(name, password, email);
    this.zarplata = zarplata;
    this.chasi = chasi || 800;
  }
  premiya() {
    return this.chasi > 800 ? (this.zarplata *= 1.2) : this.zarplata;
  }
}
