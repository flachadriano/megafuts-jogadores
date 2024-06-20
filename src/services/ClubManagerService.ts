import StoreTag from "../constants/StoreTag";
import ClubManager from "../models/ClubManager";

export class ClubManagerService {
    save(clubManager: ClubManager) {
        localStorage.setItem(StoreTag.CLUB_MANAGER, JSON.stringify(clubManager));
    }

    load(): ClubManager {
        const json = localStorage.getItem(StoreTag.CLUB_MANAGER);
        return json ? JSON.parse(json) : new ClubManager();
    }
}
