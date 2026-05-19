package backend.webapp.models;

import java.util.Set;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name; // ROLE_USER, ROLE_ADMIN (Nên có tiền tố ROLE_ nếu dùng Spring Security)

    @OneToMany(mappedBy = "role", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Account> accounts;


    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Set<Account> getAccounts() { return accounts; }
    public void setAccounts(Set<Account> accounts) { this.accounts = accounts; }
}