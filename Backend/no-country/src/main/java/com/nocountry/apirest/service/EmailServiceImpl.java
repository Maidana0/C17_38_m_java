package com.nocountry.apirest.service;

import com.nocountry.apirest.exception.EmailSendingException;
import com.nocountry.apirest.utils.EmailUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class EmailServiceImpl implements EmailService {

    public static final String CREDIT_APPLICATION_IN_PROCESS = "Aplicacion de crédito recibida";
    @Value("${spring.mail.username}")
    private String mailSender;

    @Value("${spring.mail.verify.host}")
    private String host;
    private final JavaMailSender emailSender;

    @Override
    public void sendSimpleMailMessage(String name, String apellido, String to) {
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setSubject(CREDIT_APPLICATION_IN_PROCESS);
            message.setFrom(mailSender);
            message.setTo(to);
            message.setText(EmailUtils.getEmailMessage(name, apellido, host));
            emailSender.send(message);
        }catch(Exception e){
            System.out.println(e.getMessage());
            throw new EmailSendingException("Error al enviar el correo electrónico");
        }

    }

}
