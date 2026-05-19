import * as LucideIcons from 'lucide-react';
// Import icons từ assets
const assetsIcons = import.meta.glob('../assets/icons/*.svg', { eager: true });

const IconRenderer = ({ iconName }) => {
    // 1. Tìm trong assets trước
    const AssetIcon = assetsIcons[`../assets/icons/${iconName}.svg`];
    if (AssetIcon) return <AssetIcon.ReactComponent />;

    // 2. Nếu không có, tìm trong Lucide (tạm thời)
    const LucideIcon = LucideIcons[iconName];
    if (LucideIcon) return <LucideIcon />;

    // 3. Cuối cùng mới ra icon mặc định
    return <LucideIcons.HelpCircle />;
};