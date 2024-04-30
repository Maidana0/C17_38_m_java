package com.nocountry.apirest.DTO;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InstallmentDTO {
	
	private double amount;
	private LocalDate paymentDate;
	private LocalDate dueDate;
	private Integer installmentNumber;
}
