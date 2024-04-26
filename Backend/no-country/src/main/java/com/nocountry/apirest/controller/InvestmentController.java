package com.nocountry.apirest.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.apirest.DTO.InvestmentDTO;
import com.nocountry.apirest.exception.InvalidInvestmentException;
import com.nocountry.apirest.model.Investment;
import com.nocountry.apirest.model.User;
import com.nocountry.apirest.service.IInvestmentService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@CrossOrigin(origins= {"http://localhost:3000"})
@RestController
@RequestMapping("/investment")
@AllArgsConstructor
public class InvestmentController {
	private IInvestmentService investService;
	
	@GetMapping(value="")
	public List<InvestmentDTO>getInvestment(){
		List<Investment> investements= investService.getInvestment();
		List<InvestmentDTO> investementsDTO=new ArrayList<>();
		for(Investment investment:investements) {
			InvestmentDTO investmentDTO=new InvestmentDTO();
			investmentDTO.setAvailable_amount(investment.getAvailable_amount());
			investmentDTO.setInvested_amount(investment.getInvested_amount());
			investmentDTO.setRemaining_amount(investment.getRemaining_amount());
			investmentDTO.setProfitability(investment.getProfitability());
			investmentDTO.setInvestment_type(investment.getInvestment_type());
			investmentDTO.setUser_id(investment.getUser().getId());
			investmentDTO.setCompany_name(investment.getCompany_name());
			investmentDTO.setMinimum_withdrawal_period(investment.getMinimum_withdrawal_period());
			investementsDTO.add(investmentDTO);
		}

		
		return investementsDTO;
	}
	
	@PostMapping("Create")
	public ResponseEntity<?> create(@Valid @RequestBody InvestmentDTO investmentDTO, BindingResult result) throws InvalidInvestmentException {
		Investment newInvestment=null;
		Map<String, Object> response = new HashMap<>();

		if (result.hasErrors()) {
			List<String> errors = result.getFieldErrors().stream()
					.map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
					.collect(Collectors.toList());

			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}

		try {
			Investment investment=new Investment();
			investment.setAvailable_amount(investmentDTO.getAvailable_amount());
			investment.setInvested_amount(investmentDTO.getInvested_amount());
			investment.setRemaining_amount(investmentDTO.getRemaining_amount());
			investment.setProfitability(investmentDTO.getProfitability());
			investment.setInvestment_type(investmentDTO.getInvestment_type());
			investment.setCompany_name(investmentDTO.getCompany_name());
			investment.setMinimum_withdrawal_period(investmentDTO.getMinimum_withdrawal_period());
			User user=new User();
			user.setId(investmentDTO.getUser_id());
			investment.setUser(user);
			newInvestment = investService.saveInvestment(investment);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar el insert en la base de datos");
			response.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
			if (e.getCause() instanceof ConstraintViolationException) {
				return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CONFLICT);
			}

			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "La operacion se realizo con éxito");
		response.put("inversion id", newInvestment.getId());
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
}
