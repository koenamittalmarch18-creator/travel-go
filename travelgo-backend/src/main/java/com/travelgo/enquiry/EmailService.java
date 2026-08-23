package com.travelgo.enquiry;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;
    @Value("${MAIL_USERNAME}")
    private String enquiryReceiverEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEnquiryEmail(EnquiryRequest request) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(enquiryReceiverEmail);
        message.setSubject("New TravelGo Enquiry");

        message.setText(
                "New enquiry received\n\n" +
                "Package ID: " + request.getPackageId() + "\n" +
                "Name: " + request.getFullName() + "\n" +
                "Email: " + request.getEmail() + "\n" +
                "Phone: " + request.getPhoneNumber() + "\n" +
                "Travelers: " + request.getTravelers() + "\n" +
                "Travel Date: " + request.getTravelDate() + "\n\n" +
                "Message:\n" + request.getMessage()
        );

        mailSender.send(message);
    }
}