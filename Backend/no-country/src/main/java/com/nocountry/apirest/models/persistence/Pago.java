package com.nocountry.apirest.models.persistence;

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
public class Pago implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pagos_id")
    private int pagoId;

    @ManyToOne
    @JoinColumn(name = "movimientos_id")
    private Movimiento movimiento;

    @Column(name = "monto_pagado")
    private Double montoPagado;

    @Column(name = "fecha_pago")
    private Date fechaPago;

    @Column(name = "metodo_pago")
    private String metodoPago;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "estado")
    private byte estado;
}
