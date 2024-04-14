package com.nocountry.apirest.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.apirest.exception.LoanNotFoundException;
import com.nocountry.apirest.model.File;
import com.nocountry.apirest.model.Loan;
import com.nocountry.apirest.service.ILoanService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/loan")
@AllArgsConstructor
public class LoanController {
	
    private ILoanService loanService;
	
	@PostMapping("/save") 
	public void saveLoan(@RequestParam Integer userId,
	                     @RequestParam String bank,
	                     @RequestParam String CBU,
	                     @RequestParam Double amount,
	                     @RequestParam Double interestRate,
	                     @RequestParam File file,
	                     @RequestParam Integer numberInstallments,
	                     @RequestParam Double installmmentValue) {

		try {
		    loanService.saveLoan(userId, bank, CBU, amount, interestRate, file, numberInstallments, installmmentValue);
		}catch (LoanNotFoundException e) {
	        System.err.println("Error: " + e.getMessage());
		}
	}
    
	@GetMapping("/get")
	public List<Loan> getLoans() {
		return loanService.getLoans();
	}
	
	@PostMapping("/deactivateLoan")
	public void deactivateLoan(@RequestParam Integer id) {
		loanService.deactivateLoan(id);
		
	}			
	

}
