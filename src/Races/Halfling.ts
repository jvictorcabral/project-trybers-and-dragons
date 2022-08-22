import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.counter;
  }
}

export default Halfling;