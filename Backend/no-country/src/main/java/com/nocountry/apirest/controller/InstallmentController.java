package com.nocountry.apirest.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.apirest.DTO.InstallmentDTO;
import com.nocountry.apirest.model.Installment;
import com.nocountry.apirest.service.IInstallmentService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/installment")
@AllArgsConstructor
public class InstallmentController {
	
	private IInstallmentService installmentService;
	
	@GetMapping("/{installmentId}")
	public ResponseEntity<InstallmentDTO> getInstallmentDetails(@PathVariable Integer id) {
		
		Installment installment = installmentService.getInstallmentById(id);
		
		if(installment == null) {
			return ResponseEntity.notFound().build();
		}
		
		InstallmentDTO installmentDTO = convertToDTO(installment);
		return ResponseEntity.ok(installmentDTO);
	}
	
	//Convert to DTO
	private InstallmentDTO convertToDTO(Installment installment) {
		
		InstallmentDTO installmentDTO = new InstallmentDTO();
		
		installmentDTO.setAmount(installment.getAmount());
		installmentDTO.setPaymentDate(installment.getPaymentDate());
		installmentDTO.setDueDate(installment.getDueDate());
		installmentDTO.setInstallmentNumber(installment.getInstallmentNumber());
		
		return installmentDTO;
	}

}
