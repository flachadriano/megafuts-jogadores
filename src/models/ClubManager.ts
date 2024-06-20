import { Club } from "./Club";

export default class ClubManager {
    clubs: Club[] = [];

    addClub(hash: string, name: string) {
        if (!this.clubs.find(c => c.hash == hash)) {
            this.clubs.push(new Club(hash, name));
        }
        return this;
    }
}
