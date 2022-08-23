import { EnergyType } from '../Energy';

abstract class Archetype {
  constructor(
    readonly name: string,
    readonly special = 0,
    readonly cost = 0,
  ) {}

  abstract get energyType(): EnergyType;
}

export default Archetype;