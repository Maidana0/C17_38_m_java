package com.nocountry.apirest.exception;

public class LoanNotFoundException extends RuntimeException{
	public LoanNotFoundException(String message) {
        super(message);
    }

}
