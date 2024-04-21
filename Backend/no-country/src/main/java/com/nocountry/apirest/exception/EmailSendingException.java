package com.nocountry.apirest.exception;

public class EmailSendingException extends RuntimeException{
	public EmailSendingException(String message) {
		super(message);
	}
}
