import { useEffect } from "react";
export default function useOutsideClick(ref, callback, isActive) { // Thêm isActive
    useEffect(() => {
        if (!isActive) return; // Nếu không active thì không add listener luôn
        function handleClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [ref, callback, isActive]); // Chạy lại hiệu ứng khi isActive thay đổi
}