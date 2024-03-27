import { action, makeObservable, observable } from "mobx";

class Athlete {
  name: string;
  age: number;
  teamHistory: string[];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.teamHistory = [];

    makeObservable(this, {
      name: observable,
      age: observable,
      teamHistory: true,
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
