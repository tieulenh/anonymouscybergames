package backend.webapp.services;

import java.util.List;

import org.springframework.stereotype.Service;

import backend.webapp.DTOs.MenuDTO;
import backend.webapp.models.Menu;
import backend.webapp.repositories.MenuRepository;

@Service
public class MenuService {

    private final MenuRepository menuRepository;
    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }
    public List<MenuDTO> getDynamicMenu() {
        // Chỉ lấy các menu cấp cao nhất (parent_id is null)
        List<Menu> rootMenus = menuRepository.findAllRootMenus();
        
        // Chuyển đổi toàn bộ cây sang DTO
        return rootMenus.stream()
                .map(MenuDTO::fromEntity)
                .toList();
    }
    public MenuDTO getSideMenu() {
        List<Menu> activeMenus = menuRepository.findAllActiveMenus();
        return activeMenus.stream()
                .filter(menu -> "sideMenu".equals(menu.getTitle()))
                .findFirst()
                .map(MenuDTO::fromEntity)
                .orElse(null);
    }
    
}