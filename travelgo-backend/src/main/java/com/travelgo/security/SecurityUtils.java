package com.travelgo.security;

public final class SecurityUtils {

    private SecurityUtils() {
    }

    public static String maskName(String name) {
        if (name == null || name.isBlank()) {
            return name;
        }

        String[] parts = name.trim().split("\\s+");
        StringBuilder masked = new StringBuilder();

        for (String part : parts) {
            if (part.length() <= 1) {
                masked.append(part);
            } else {
                masked.append(part.charAt(0))
                      .append("*".repeat(part.length() - 1));
            }
            masked.append(" ");
        }

        return masked.toString().trim();
    }

    public static String maskEmail(String email) {
        if (email == null || email.isBlank()) {
            return email;
        }

        int atIndex = email.indexOf("@");

        if (atIndex <= 0) {
            return "****";
        }

        String username = email.substring(0, atIndex);
        String domain = email.substring(atIndex);

        if (username.length() == 1) {
            return "*" + domain;
        }

        return username.charAt(0) + "****" + domain;
    }

    public static String maskPhone(String phone) {
        if (phone == null || phone.isBlank()) {
            return phone;
        }

        if (phone.length() <= 4) {
            return "****";
        }

        return "*".repeat(phone.length() - 4)
                + phone.substring(phone.length() - 4);
    }
}