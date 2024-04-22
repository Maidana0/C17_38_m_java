package com.nocountry.apirest.DTO;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InvestmentDTO {
	
	private double available_amount;
	
	private double invested_amount;
	
	private double remaining_amount;
	
	private double profitability;
	
	private String investment_type;
	
	private int user_id;
	
	private String company_name;
	
	private double minimum_withdrawal_period;
}
