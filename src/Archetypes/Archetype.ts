abstract class Archetype {
  constructor(
    readonly name: string,
    readonly special = 0,
    readonly cost = 0,
  ) {}
}

export default Archetype;