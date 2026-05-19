package backend.webapp.services;

import org.springframework.stereotype.Service;

import backend.webapp.models.GameDetail;

import backend.webapp.repositories.GameDetailRepo;
import backend.webapp.repositories.GameRepo;

@Service
public class GameDetailService {

    private final GameDetailRepo gameDetailRepo;
    private final GameRepo gameRepo;

    public GameDetailService(
        GameDetailRepo gameDetailRepo, 
        GameRepo gameRepo) 
    {
        this.gameDetailRepo = gameDetailRepo;
        this.gameRepo = gameRepo;
    }

    public GameDetail getGameDetailByGameId(Long gameId) {
        if(!"ENABLE".equals(gameRepo.findById(gameId).get().getStatus())){
            return null;
        }
        return gameDetailRepo.findByGameId(gameId);
    }   
} 