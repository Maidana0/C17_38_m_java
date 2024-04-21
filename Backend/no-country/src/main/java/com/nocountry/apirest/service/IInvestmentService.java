package com.nocountry.apirest.service;

import java.util.List;

import com.nocountry.apirest.exception.InvalidInvestmentException;
import com.nocountry.apirest.model.Investment;

public interface IInvestmentService {
	public List<Investment> getInvestment();
	public Investment saveInvestment (Investment investment) throws InvalidInvestmentException;
	public Investment findInvestment(int id) throws InvalidInvestmentException;
}
