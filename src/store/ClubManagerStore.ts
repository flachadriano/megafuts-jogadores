import { create } from 'zustand';
import { ClubManagerService } from '../services/ClubManagerService';
import ClubManager from '../models/ClubManager';
import { Player } from '../models/Player';

interface UseClubManager {
    clubManager: ClubManager;
    insertOrUpdateClub: (hash: string, name: string) => void;
    insertOrUpdatePlayers: (players: Player[]) => void;
}

export const useClubManager = create<UseClubManager>(set => ({
    clubManager: new ClubManagerService().load(),
    insertOrUpdateClub: (hash: string, name: string) => {
        set(state => {
            const updatedClubManager = state.clubManager.addClub(hash, name);
            new ClubManagerService().save(updatedClubManager);
            return { ...state, clubManager: updatedClubManager };
        });
    },
    insertOrUpdatePlayers: (players: Player[]) => {
        console.log(players);
    }
}));