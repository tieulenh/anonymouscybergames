package backend.webapp.configs;

import backend.webapp.security.JwtAuthFilter;
import backend.webapp.security.JwtUtil;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
public class SecurityConfig {

    private final JwtUtil jwtUtil;

    public SecurityConfig(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        JwtAuthFilter jwtFilter = new JwtAuthFilter(jwtUtil);

        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> {})
            // .cors(cors -> cors.configurationSource(request -> {
            //     CorsConfiguration config = new CorsConfiguration();
            //     config.setAllowedOriginPatterns(Arrays.asList("*")); // Cho phép tất cả các nguồn (bao gồm Postman)
            //     config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
            //     config.setAllowedHeaders(Arrays.asList("*"));
            //     config.setAllowCredentials(false); 
            //     return config;
            // }))
            .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth

                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/manage/**").permitAll()
                .requestMatchers("/api/**").permitAll()

                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}