package backend.webapp.DTOs.responses;

public class LoginRes {
    private String token;
    private UserProfileRes user;

    public LoginRes(String token, UserProfileRes user) {
        this.token = token;
        this.user = user;
    }

    // Getters & Setters
    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public UserProfileRes getUser() { return user; }
    public void setUser(UserProfileRes user) { this.user = user; }
}