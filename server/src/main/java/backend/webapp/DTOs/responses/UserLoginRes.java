package backend.webapp.DTOs.responses;

import backend.webapp.models.Account;
import backend.webapp.models.Profile;

public class UserLoginRes {
    private String username;
    private String avatarUrl;
    private String roles; // Trả về danh sách tên Role gọn gàng (VD: ["ADMIN", "USER"])

    // Constructor tự động trích xuất các thông tin cần thiết nhất cho phiên đăng nhập
    public UserLoginRes(Account account) {
        this.username = account.getUsername();
        this.roles = account.getRole() != null ? account.getRole().getName() : null;
        
        // Lấy avatarUrl từ Profile nếu có
        Profile profile = account.getProfile();
        if (profile != null) {
            this.avatarUrl = profile.getAvatarUrl();
        }
    }

    // Getters
    public String getUsername() { return username; }
    public String getAvatarUrl() { return avatarUrl; }
    public String getRoles() { return roles; }
}