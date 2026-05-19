package backend.webapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import backend.webapp.models.Game;
import jakarta.transaction.Transactional;

@Repository
public interface GameRepo extends JpaRepository<Game, Long> {
    // Tìm kiếm account bằng email để phục vụ đăng nhập
    Game findByName(String name);
    List<Game> findByCategoriesContaining(String category);
    List<Game> findByStatusContaining(String status);


    @Modifying
    @Transactional
    @Query("UPDATE Game g SET g.status = :newStatus WHERE g.id = :id")
    void updateStatus(@Param("id") Long id, @Param("newStatus") String newStatus);

    @Query(value = "SELECT * FROM games ORDER BY id LIMIT 5 ASC", nativeQuery = true)  
    List<Game> findTop5Games();
}