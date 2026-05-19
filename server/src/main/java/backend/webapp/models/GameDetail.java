package backend.webapp.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "game_details")
public class GameDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "TEXT")
    private String systemRequirements;

    private String trailerUrl;


    // 1 game - 1 detail
    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "game_id", referencedColumnName = "id")
    private Game game;

    public GameDetail() {}

    public GameDetail(String description, String systemRequirements,
                      String trailerUrl, Game game) {
        this.description = description;
        this.systemRequirements = systemRequirements;
        this.trailerUrl = trailerUrl;
        this.game = game;
    }

    // getters & setters

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSystemRequirements() {
        return systemRequirements;
    }

    public void setSystemRequirements(String systemRequirements) {
        this.systemRequirements = systemRequirements;
    }

    public String getTrailerUrl() {
        return trailerUrl;
    }

    public void setTrailerUrl(String trailerUrl) {
        this.trailerUrl = trailerUrl;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }
}