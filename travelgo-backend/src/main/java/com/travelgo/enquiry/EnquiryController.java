package com.travelgo.enquiry;
import com.travelgo.security.EncryptionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.travelgo.security.SecurityUtils;

@RestController
@RequestMapping("/api/enquiries")
@CrossOrigin(origins = {"http://localhost:5173",
		"https://travel-go-frontend.onrender.com"})
public class EnquiryController {

	private final EmailService emailService;
	private final EncryptionService encryptionService;
	public EnquiryController(EmailService emailService, EncryptionService encryptionService) {
	    this.emailService = emailService;
	    this.encryptionService = encryptionService;
	}
	
    @PostMapping
    public ResponseEntity<String> submitEnquiry(
            @RequestBody EnquiryRequest request) {

        System.out.println("New enquiry received:");
        System.out.println("Package ID: " + request.getPackageId());
        System.out.println("Name: " + SecurityUtils.maskName(request.getFullName()));
        System.out.println("Email: " + SecurityUtils.maskEmail(request.getEmail()));
        System.out.println("Phone: " + SecurityUtils.maskPhone(request.getPhoneNumber()));System.out.println("Travelers: " + request.getTravelers());
        System.out.println("Travel Date: " + request.getTravelDate());
        System.out.println("Message: " + request.getMessage());

        emailService.sendEnquiryEmail(request);
        return ResponseEntity.ok("Enquiry submitted successfully");
      
        
    }
    
    @GetMapping("/test-encryption")
    public String testEncryption() {
        String original = "TravelGo Test";

		String encrypted = encryptionService.encrypt(original);
        String decrypted = encryptionService.decrypt(encrypted);

        return "Encrypted: " + encrypted + "\nDecrypted: " + decrypted;
    }
}