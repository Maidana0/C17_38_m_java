package com.nocountry.apirest.DTO;

import com.nocountry.apirest.model.Investment;
import com.nocountry.apirest.model.Loan;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserSummaryDTO {

    private int user_id;
    private String name;
    private String email;
    private List<Loan> loans;
    private List<Investment> investments;
}
