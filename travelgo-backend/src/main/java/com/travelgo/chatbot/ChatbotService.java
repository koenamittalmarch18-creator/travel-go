package com.travelgo.chatbot;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.stereotype.Service;

@Service
public class ChatbotService {

    private final Client geminiClient;

    public ChatbotService() {
        String apiKey = System.getenv("GEMINI_API_KEY");

        if (apiKey == null || apiKey.isBlank()) {
            throw new IllegalStateException(
                    "GEMINI_API_KEY is not configured."
            );
        }

        this.geminiClient = Client.builder()
                .apiKey(apiKey)
                .build();
    }

    public String generateResponse(String message) {

        try {
            GenerateContentResponse response =
                    geminiClient.models.generateContent(
                            "gemini-2.5-flash",
                            message,
                            null
                    );

            return response.text();

        } catch (Exception exception) {

            System.err.println("===== GEMINI ERROR =====");
            System.err.println("Type: "
                    + exception.getClass().getName());
            System.err.println("Message: "
                    + exception.getMessage());

            Throwable cause = exception.getCause();

            while (cause != null) {
                System.err.println(
                        "CAUSE: "
                                + cause.getClass().getName()
                                + " - "
                                + cause.getMessage()
                );

                cause = cause.getCause();
            }

            System.err.println("========================");

            throw exception;
        }
    }
}