package com.nocountry.apirest.model;

import java.io.Serializable;
import java.util.Date;

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
@Table(name = "pagos")
public class Pay implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pagos_id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "movimientos_id")
    private Motion motion;

    @Column(name = "monto_pagado")
    private Double amountPaid;

    @Column(name = "fecha_pago")
    private Date PaymentDate;

    @Column(name = "metodo_pago")
    private String paymentMethod;

    @Column(name = "descripcion")
    private String description;

    @Column(name = "estado")
    private byte status;
}
