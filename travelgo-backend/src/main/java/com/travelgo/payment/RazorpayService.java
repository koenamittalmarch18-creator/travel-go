package com.travelgo.payment;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class RazorpayService {

    private final RestClient restClient;

    @Value("${razorpay.key.id}")
    private String keyId;

    @Value("${razorpay.key.secret}")
    private String keySecret;

    public RazorpayService(RestClient.Builder restClientBuilder) {
        this.restClient = restClientBuilder
                .baseUrl("https://api.razorpay.com")
                .build();
    }

    public Map<String, Object> createOrder(int amount) {

        Map<String, Object> request = Map.of(
                "amount", amount,
                "currency", "INR",
                "receipt", "travelgo_receipt_001"
        );

        Map<String, Object> response = restClient.post()
                .uri("/v1/orders")
                .headers(headers -> headers.setBasicAuth(keyId, keySecret))
                .contentType(MediaType.APPLICATION_JSON)
                .body(request)
                .retrieve()
                .body(new ParameterizedTypeReference<Map<String, Object>>() {});
        
        response.put("keyId",keyId);
        return response;
    }
}