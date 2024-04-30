package com.nocountry.apirest.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.apirest.exception.InvalidInvestmentException;
import com.nocountry.apirest.model.Investment;
import com.nocountry.apirest.repository.IInvestmentRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class InvestmentServiceImpl implements IInvestmentService{
	
	private IInvestmentRepository investRepo;

	@Override
	public List<Investment> getInvestment() {
		return investRepo.findAll();
	}

	@Override
	public Investment saveInvestment(Investment investment) throws InvalidInvestmentException {
		Investment newInvestment=investRepo.save(investment);
		return newInvestment;
	}

	@Override
	public Investment findInvestment(int id) throws InvalidInvestmentException {
		Investment investment=investRepo.findById(id).orElseThrow(() -> new InvalidInvestmentException("No se encontro la inversion"+ id));
		return investment;
	}

}
