package backend.webapp.DTOs;

public class Response<T> { 
    private boolean success;
    private String message;
    private String token; // Thêm trường token vào Response
    private T data;         

    public Response(boolean success, String message, String token, T data) {
        this.success = success;
        this.message = message;
        this.token = token;
        this.data = data;
    }

    // Các hàm static helper giúp tạo nhanh response (Tiện cực kỳ!)
    public static <T> Response<T> ok(String message, String token, T data) {
        return new Response<>(true, message, token, data);
    }

    public static <T> Response<T> fail(String message) {
        return new Response<>(false, message, null, null);
    }

    // Getters & Setters
    public boolean isSuccess() { return success; }
    public void setSuccess(boolean success) { this.success = success; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public T getData() { return data; }
    public void setData(T data) { this.data = data; }
}