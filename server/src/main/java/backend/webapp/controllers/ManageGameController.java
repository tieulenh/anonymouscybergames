package backend.webapp.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.webapp.models.Game;
import backend.webapp.services.GameService;
import tools.jackson.databind.JsonNode;

@RestController
@RequestMapping("/api/manage/games")
public class ManageGameController {
    private GameService gameService;

    public ManageGameController(
        GameService gameService
        
    ) {
        this.gameService = gameService;
    }
    @GetMapping
    public List<Game> getGames() {
        return gameService.getAllGames();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGame(@PathVariable Long id) {
        gameService.deleteGame(id);
        return ResponseEntity.ok("Delete success");
    }
    @PatchMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(
            @PathVariable Long id,
            @RequestBody JsonNode body
    ) {
        gameService.updateStatus(id, body.get("status").asString());
        return ResponseEntity.ok("Status updated");
    }
}
