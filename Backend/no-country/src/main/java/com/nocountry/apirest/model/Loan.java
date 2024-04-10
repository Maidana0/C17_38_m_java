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
@Table(name = "loan")
public class Loan implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prestamo_id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private User user;

    @Column(name = "tipo_operacion")
    private String typeOperation;

    @Column(name = "monto")
    private Double amount;

    @Column(name = "tasa_interes")
    private Double interestRate;

    @Column(name = "fecha_inicio")
    private Date startDate;

    @Column(name = "fecha_vencimiento")
    private Date dueDate;

    @Column(name = "estado")
    private byte status;
}
