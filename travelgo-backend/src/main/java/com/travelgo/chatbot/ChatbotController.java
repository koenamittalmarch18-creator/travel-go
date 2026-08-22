package com.travelgo.chatbot;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
public class ChatbotController {

    private final ChatbotService chatbotService;

    public ChatbotController(ChatbotService chatbotService) {
        this.chatbotService = chatbotService;
    }

    @PostMapping
    public ResponseEntity<String> chat(
            @RequestBody ChatRequest request
    ) {
        String response = chatbotService.generateResponse(
                request.message()
        );

        return ResponseEntity.ok(response);
    }
}