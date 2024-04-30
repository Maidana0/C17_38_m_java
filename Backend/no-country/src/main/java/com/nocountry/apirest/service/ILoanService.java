package com.nocountry.apirest.service;

import java.util.List;

import com.nocountry.apirest.exception.InvalidLoanException;
import com.nocountry.apirest.model.Loan;

public interface ILoanService {
	
	public Loan saveLoan(Loan loan) throws InvalidLoanException;
	public List<Loan> getLoan();
	public Loan findLoan(int id) throws InvalidLoanException;

}
