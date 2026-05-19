package backend.webapp.services;

import backend.webapp.models.Account;
import backend.webapp.models.Role;
import backend.webapp.repositories.AccountRepo;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class AccountService {
    private final AccountRepo accountRepo;
    
    // Giả sử bạn có RoleService hoặc tương đương để lấy Role mặc định từ DB
    private final RoleService roleService; 
    
    public AccountService(AccountRepo accountRepo, RoleService roleService) {
        this.accountRepo = accountRepo;
        this.roleService = roleService;
    }

    private final BCryptPasswordEncoder pwEncoder = new BCryptPasswordEncoder();

    // =========================
    // LOGIC ĐĂNG KÝ
    // =========================
    public Account register(String email, String password) {
        if (accountRepo.existsByEmail(email)) {
            return null;
        }

        Account account = new Account();
        account.setEmail(email);
        account.setUsername(account.getEmail().split("@")[0]); 
        account.setPassword(pwEncoder.encode(password)); 
        account.setStatus("ACTIVATED");

        // KHẮC PHỤC: Tạo Set<Role> và nạp Role mặc định (ví dụ: "USER") vào danh sách
        Role userRole = roleService.getDefaultRole();
        account.setRole(userRole);

        accountRepo.save(account);
        return account;
    }

    // =========================
    // LOGIC ĐĂNG NHẬP
    // =========================
    public Account login(String email, String password) {
        Account account = accountRepo.findByEmail(email);
        if (account != null && pwEncoder.matches(password, account.getPassword())) {
            return account;
        }
        return null;
    }

    public java.util.List<Account> getAllAccounts() {
        return accountRepo.findAll();
    }

    // Lấy thông tin tài khoản bằng ID (Phục vụ cho API /auth/me thông qua ID lấy từ JWT)
    public Account getAccountById(Long id) {
        return accountRepo.findById(id).orElse(null);
    }

    public Account getProfile(String email) {
        return accountRepo.findByEmail(email);
    }
}