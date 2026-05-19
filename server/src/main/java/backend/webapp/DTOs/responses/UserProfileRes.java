package backend.webapp.DTOs.responses;

import backend.webapp.models.Account;
import backend.webapp.models.Profile;

public class UserProfileRes {
    // Thuộc tính từ Account
    private String username;
    private String email;

    // Thuộc tính từ Profile
    private String avatarUrl;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;
    private String gender;

    // Constructor nhận vào Account để tự động mapping phẳng dữ liệu cá nhân
    public UserProfileRes(Account account) {
        this.username = account.getUsername();
        this.email = account.getEmail();
        
        Profile profile = account.getProfile();
        if (profile != null) {
            this.avatarUrl = profile.getAvatarUrl();
            this.firstName = profile.getFirstName();
            this.lastName = profile.getLastName();
            this.phoneNumber = profile.getPhoneNumber();
            this.address = profile.getAddress();
            this.gender = profile.getGender();
        }
    }

    // Getters
    public String getUsername() { return username; }
    public String getEmail() { return email; }
    public String getAvatarUrl() { return avatarUrl; }
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public String getPhoneNumber() { return phoneNumber; }
    public String getAddress() { return address; }
    public String getGender() { return gender; }
}