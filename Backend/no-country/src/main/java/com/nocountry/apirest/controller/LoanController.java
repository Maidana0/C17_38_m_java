package com.nocountry.apirest.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.apirest.DTO.LoanDTO;
import com.nocountry.apirest.exception.InvalidLoanException;
import com.nocountry.apirest.model.File;
import com.nocountry.apirest.model.Loan;
import com.nocountry.apirest.model.User;
import com.nocountry.apirest.service.ILoanService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@CrossOrigin(origins= {"http://localhost:3000"})
@RestController
@RequestMapping("/loan")
@AllArgsConstructor
public class LoanController {
	
    private ILoanService loanService;
    
    @PostMapping("Save")
    public ResponseEntity<?> save(@Valid @RequestBody LoanDTO loanDTO, BindingResult result) throws InvalidLoanException{
    	
    	Loan newLoan = null;
    	Map<String, Object> response = new HashMap<>();
    	
    	if(result.hasErrors()) {
    		List<String> errors = result.getFieldErrors().stream()
    				.map(err-> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
    				.collect(Collectors.toList());
    		
    		response.put("errors", errors);
    		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
    	}
    	
    	try {
    		Loan loan = new Loan();
    		
    		loan.setBank(loanDTO.getBank());
    		loan.setCBU(loanDTO.getCBU());
    		loan.setAmount(loanDTO.getAmount());
    		loan.setInterestRate(loanDTO.getInterestRate());
    		loan.setStatus(true);
    		loan.setNumberOfInstallments(loanDTO.getNumberOfInstallments());
    		
    		User user = new User();
    		user.setId(loanDTO.getUserId());
    		loan.setUser(user);
    		
    		File file = new File();
    		file.setId(loanDTO.getFileId());
    		loan.setFile(file);
    		
    		newLoan = loanService.saveLoan(loan);
    		
    	}catch (DataAccessException e){
    		response.put("message", "Error al realizar el insert en la base de datos");
    		response.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
    		if (e.getCause()instanceof ConstraintViolationException) {
    			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CONFLICT);
    		}
    		
    		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    	}
    	
    	response.put("message","La operacion se realizo con exito");
    	response.put("Prestamo id", newLoan.getId());
    	return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }
    
	@GetMapping("/get")
	public List<Loan> getLoans() {
		return loanService.getLoan();
	}
	
	@PostMapping("/findLoan")
	public void findLoan(@RequestParam Integer id) {
		loanService.findLoan(id);	
	}			
	

}
