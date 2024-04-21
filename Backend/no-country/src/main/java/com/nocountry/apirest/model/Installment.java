package com.nocountry.apirest.model;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table (name = "cuota")
public class Installment implements Serializable{
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cuota_id")
    private int id;
	
	@ManyToOne
	@JoinColumn(name = "prestamo_id")
	private Loan loan;
	
	@Column(name = "monto")
	private double amount;
	
	@Column(name = "fecha_pago")
	private LocalDate paymentDate;
	
	@Column(name = "fecha_vencimiento")
	private LocalDate dueDate;
	
	@Column(name = "numero_cuota")
	private Integer installmentNumber;
	
	@Column(name = "estado")
	private boolean status;
}
