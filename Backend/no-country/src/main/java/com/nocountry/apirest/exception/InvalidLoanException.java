package com.nocountry.apirest.exception;

public class InvalidLoanException extends RuntimeException{
	public InvalidLoanException(String message) {
        super(message);
    }

}
