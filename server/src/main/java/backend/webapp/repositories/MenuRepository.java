package backend.webapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import backend.webapp.models.Menu;


@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {
    
    // Lấy tất cả menu cấp cha (gốc) và để JPA tự động load các con (children)
    @Query("SELECT m FROM Menu m WHERE m.parent IS NULL AND m.active = true ORDER BY m.sortOrder ASC")
    List<Menu> findAllRootMenus();

    // Lấy menu dựa trên quyền của người dùng
    @Query("SELECT m FROM Menu m WHERE m.permissionCode IN :codes AND m.active = true")
    List<Menu> findByPermissionCodes(@Param("codes") List<String> codes);

    @Query("SELECT m FROM Menu m WHERE m.active = true ORDER BY m.sortOrder ASC")
    List<Menu> findAllActiveMenus();
}