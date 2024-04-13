package com.nocountry.apirest.service;

import java.util.List;

import com.nocountry.apirest.model.Loan;

public interface ILoanService {
	
	public void saveLoan(Integer userId, String bank, String CBU, Double amount, Double interestRate);
	public List<Loan> getLoans();
	public void deactivateLoan(Integer id);

}
