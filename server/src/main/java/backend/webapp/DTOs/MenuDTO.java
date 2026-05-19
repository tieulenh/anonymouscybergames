package backend.webapp.DTOs;

import java.util.List;

import backend.webapp.models.Menu;

public class MenuDTO {
    private Long id;
    private String title;
    private String path;
    private String icon;
    private List<MenuDTO> children;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getPath() {
        return path;
    }
    public void setPath(String path) {
        this.path = path;
    }
    public String getIcon() {
        return icon;
    }
    public void setIcon(String icon) {
        this.icon = icon;
    }
    public List<MenuDTO> getChildren() {
        return children;
    }
    public void setChildren(List<MenuDTO> children) {
        this.children = children;
    }
    // Hàm convert từ Entity sang DTO
    public static MenuDTO fromEntity(Menu entity) {
        MenuDTO dto = new MenuDTO();
        dto.setId(entity.getId());
        dto.setTitle(entity.getTitle());
        dto.setPath(entity.getPath());
        dto.setIcon(entity.getIcon());
        if (entity.getChildren() != null) {
            dto.setChildren(entity.getChildren().stream()
                .map(MenuDTO::fromEntity)
                .toList());
        }
        return dto;
    }
}