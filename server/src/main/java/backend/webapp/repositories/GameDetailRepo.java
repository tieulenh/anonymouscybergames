package backend.webapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import backend.webapp.models.GameDetail;


public interface GameDetailRepo extends JpaRepository<GameDetail, Long> {

    // lấy detail theo game id
    @Query(value = "SELECT * FROM game_details WHERE game_id = :id", nativeQuery = true)
    GameDetail findByGameId(@Param("id") Long id);
}