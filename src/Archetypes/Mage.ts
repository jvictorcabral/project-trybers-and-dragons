import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static counter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.counter;
  }
}

export default Mage;