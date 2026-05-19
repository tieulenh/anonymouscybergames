package backend.webapp.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import backend.webapp.DTOs.responses.UserLoginRes;
import backend.webapp.DTOs.responses.UserProfileRes;
import backend.webapp.models.Account;
import backend.webapp.security.JwtUtil;
import backend.webapp.services.AccountService;
import jakarta.servlet.http.HttpServletRequest;
import backend.webapp.DTOs.Response;
import backend.webapp.DTOs.requests.AuthRequest;

@RestController
@RequestMapping("/api")
public class AuthController {

    private final AccountService accountService;

    public AuthController(AccountService accountService) {
        this.accountService = accountService;
    }

    @Autowired
    private JwtUtil jwtUtil;

    // =========================
    // 1. API ĐĂNG NHẬP
    // =========================
    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest loginRequest) {
        System.out.println("Email: " + loginRequest.getEmail());
        System.out.println("Password: " + loginRequest.getPassword());

        Account account = accountService.login(loginRequest.getEmail(), loginRequest.getPassword());

        if (account != null) {
            if ("ACTIVATED".equals(account.getStatus())) {
                String token = jwtUtil.generateToken(account);
                UserLoginRes loginData = new UserLoginRes(account); // 👈 Dùng DTO đăng nhập mới
                return ResponseEntity.ok(
                    new Response<UserLoginRes> (
                        true,
                        "Đăng nhập thành công!",
                        token,
                        loginData
                    )
                );
            } else {
                return ResponseEntity.status(401).body(
                    new Response<>( 
                            false,
                            "Your account is " + account.getStatus().toLowerCase(),
                            null,
                            null
                        )
                );
            }

        } else {
            return ResponseEntity.status(401).body(new Response<>(false, "Sai tài khoản hoặc mật khẩu", null, null));
        }
    }

    // =========================
    // 2. API ĐĂNG KÝ
    // =========================
    @PostMapping("/auth/register")
    public ResponseEntity<?> register(@RequestBody AuthRequest registerRequest) {
        Account account = accountService.register(registerRequest.getEmail(), registerRequest.getPassword());
        if (account != null) {
            String token = jwtUtil.generateToken(account);
            UserLoginRes loginData = new UserLoginRes(account); 
            return ResponseEntity.ok(new Response<UserLoginRes>(true, "Đăng ký thành công!", token, loginData));
        }
        return ResponseEntity.badRequest().body(new Response<>(false, "Email already in use!", null, null));
    }

    // =========================
    // 3. API LẤY THÔNG TIN TÀI KHOẢN (Đã hoàn thiện)
    // =========================
    @GetMapping("/auth/me")
    public ResponseEntity<?> getProfile(HttpServletRequest request) {
        String header = request.getHeader("Authorization");

        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7);

            if (jwtUtil.isValid(token)) {
                // Trích xuất Account ID được cấu hình trong Payload của Token
                Long accountId = jwtUtil.extractAccountId(token);
                Account account = accountService.getAccountById(accountId);

                if (account != null) {
                    UserProfileRes userResponse = new UserProfileRes(account);
                    return ResponseEntity.ok(new Response<>(true, "Lấy thông tin thành công!", token, userResponse));
                }
            }
        }

        return ResponseEntity.status(401).body(new Response<>(false, "Chưa xác thực hoặc Token không hợp lệ", null, null));
    }
}
