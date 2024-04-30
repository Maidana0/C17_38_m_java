package com.nocountry.apirest.model;

import java.io.Serializable;

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
@Table(name="inversion")
public class Investment implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="inversion_id")
	private int id;
	
	@Column(name="monto_disponible")
	private double available_amount;
	
	@Column(name="monto_invertido")
	private double invested_amount;
	
	@Column(name="monto_restante")
	private double remaining_amount;
	
	@Column(name="rentabilidad")
	private double profitability;
	
	@Column(name="tipo_inversion")
	private String investment_type;
	
	@ManyToOne
	@JoinColumn(name="usuario_id")
	private User user;
	
	@Column(name = "nombre_empresa")
	private String company_name;
	
	@Column(name="plazo_minimo_retirada")
	private double minimum_withdrawal_period;
	
	
}
