package com.nocountry.apirest.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoanDTO {
	
	private String bank;
	
	private String CBU;
	
	private double amount;
	
	private double interestRate;
	
	private int numberOfInstallments;
	
	private int userId;

}
