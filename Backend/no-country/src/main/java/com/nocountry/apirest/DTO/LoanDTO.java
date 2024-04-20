package com.nocountry.apirest.DTO;

import com.nocountry.apirest.model.File;

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
	
	private Double amount;
	
	private Double interestRate;
	
	private Integer numberOfInstallments;
	
	private File file;
	
	private int userId;

}
