package backend.webapp.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import backend.webapp.DTOs.MenuDTO;
import backend.webapp.services.MenuService;

@RestController
@RequestMapping("/api/menus")

public class MenuController {

    private final MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping
    public ResponseEntity<List<MenuDTO>> getAllMenus() {
        List<MenuDTO> menus = menuService.getDynamicMenu();
        return ResponseEntity.ok(menus);
    }
    @GetMapping("/sideMenu")
    public ResponseEntity<MenuDTO> getSideMenu() {
        MenuDTO menu = menuService.getSideMenu();
        return ResponseEntity.ok(menu);
    }
}