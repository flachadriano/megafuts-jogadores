export class Club {
    hash: string;
    name: string;
    players: string[] = [];

    constructor(hash: string, name: string) {
        this.hash = hash;
        this.name = name;
    }

    addPlayer(hash: string) {
        this.players.push(hash);
    }
}
