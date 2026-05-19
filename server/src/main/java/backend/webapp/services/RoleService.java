package backend.webapp.services;

import org.springframework.stereotype.Service;
import backend.webapp.repositories.RoleRepo;
import backend.webapp.models.Role;

@Service
public class RoleService {
    
    // KHẮC PHỤC: Bỏ static, sử dụng final để đảm bảo tính bất biến và an toàn luồng (Thread-safe)
    private final RoleRepo roleRepo;
    
    public RoleService(RoleRepo roleRepo) {
        this.roleRepo = roleRepo;
    }

    public Role getDefaultRole() {
        return roleRepo.findByName("USER");
    }
}