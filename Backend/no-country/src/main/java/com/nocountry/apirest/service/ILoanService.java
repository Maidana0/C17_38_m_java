package com.nocountry.apirest.service;

import java.util.List;

import com.nocountry.apirest.model.Loan;

public interface ILoanService {
	
	public void saveLoan(Integer userId, String typeOperation, Double amount, Double interestRate);
	public List<Loan> getLoans();
	public void editLoan(Integer id, byte status);

}
