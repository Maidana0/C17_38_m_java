package com.nocountry.apirest.DTO;

import com.nocountry.apirest.model.Investment;
import com.nocountry.apirest.model.Loan;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserSummaryDTO {

    private int user_id;
    private String name;
    private String email;
    private List<LoanDTO> loans;
    private List<InvestmentDTO> investments;
    
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class LoanDTO{
    	private String bank;
    	
    	private String CBU;
    	
    	private double amount;
    	
    	private double interestRate;
    	
    	private int numberOfInstallments;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class InvestmentDTO{
    	private double available_amount;
    	
    	private double invested_amount;
    	
    	private double remaining_amount;
    	
    	private double profitability;
    	
    	private String investment_type;
    	
    	private String company_name;
    	
    	private double minimum_withdrawal_period;
    }
}
