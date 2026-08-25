package com.travelgo.payment;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = {"http://localhost:5173",
"https://travel-go-frontend.onrender.com"})
public class PaymentController {

    private final RazorpayService razorpayService;

    public PaymentController(RazorpayService razorpayService) {
        this.razorpayService = razorpayService;
    }

    @PostMapping("/create-order")
    public Map<String, Object> createOrder(@RequestParam int amount) {
        return razorpayService.createOrder(amount);
    }
}