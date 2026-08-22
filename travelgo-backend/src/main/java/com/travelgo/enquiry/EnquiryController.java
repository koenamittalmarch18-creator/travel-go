package com.travelgo.enquiry;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/enquiries")
@CrossOrigin(origins = "http://localhost:5173")
public class EnquiryController {

	private final EmailService emailService;

	public EnquiryController(EmailService emailService) {
	    this.emailService = emailService;
	}
	
    @PostMapping
    public ResponseEntity<String> submitEnquiry(
            @RequestBody EnquiryRequest request) {

        System.out.println("New enquiry received:");
        System.out.println("Package ID: " + request.getPackageId());
        System.out.println("Name: " + request.getFullName());
        System.out.println("Email: " + request.getEmail());
        System.out.println("Phone: " + request.getPhoneNumber());
        System.out.println("Travelers: " + request.getTravelers());
        System.out.println("Travel Date: " + request.getTravelDate());
        System.out.println("Message: " + request.getMessage());

        emailService.sendEnquiryEmail(request);
        return ResponseEntity.ok("Enquiry submitted successfully");
    }
}