import { action, makeObservable, observable } from "mobx";

class Athlete {
  name: string;
  age: number;
  teamHistory: string[];
  salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.teamHistory = [];
    this.salary = salary;

    makeObservable(this, {
      name: observable,
      age: observable,
      teamHistory: true,
      salary: true,
      wishHappyBirthday: action,
      tradePlayer: action,
    });
  }

  wishHappyBirthday() {
    this.age++;
  }

  tradePlayer(team: string) {
    this.teamHistory.length > 0
      ? this.teamHistory.push(", " + team)
      : this.teamHistory.push(team);
  }
}

export default Athlete;
