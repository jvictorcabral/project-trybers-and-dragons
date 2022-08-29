import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  fight(): number {
    for (let index = 0; index < 100; index += 1) {
      this.player.attack(this.player2);
      if (this.player2.lifePoints <= 0) return 1;

      this.player2.attack(this.player1);
      if (this.player.lifePoints <= 0) return -1;
    }
    return 0;
  }
}

export default PVP;