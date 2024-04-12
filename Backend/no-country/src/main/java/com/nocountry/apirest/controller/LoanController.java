package com.nocountry.apirest.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.apirest.exception.LoanNotFoundException;
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
	                         @RequestParam String typeOperation,
	                         @RequestParam Double amount,
	                         @RequestParam Double interestRate) {
		try {
		    loanService.saveLoan(userId, typeOperation, amount, interestRate);
		}catch (LoanNotFoundException e) {
	        System.err.println("Error: " + e.getMessage());
		}
	}
    
	@GetMapping("/get")
	public List<Loan> getLoans() {
		return loanService.getLoans();
	}
	
	@PostMapping("/edit")
	public void editLoan(@RequestParam Integer id, 
						   @RequestParam byte status) {
		loanService.editLoan(id, status);
		
	}
	
	
			
		
			
	

}
