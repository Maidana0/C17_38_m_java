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
@Table(name = "movimientos")
public class Movimiento implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "movimiento_id")
    private int movimientoId;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @Column(name = "tipo_operacion")
    private String tipoOperacion;

    @Column(name = "monto")
    private Double monto;

    @Column(name = "tasa_interes")
    private Double tasaInteres;

    @Column(name = "fecha_inicio")
    private Date fechaInicio;

    @Column(name = "fecha_vencimiento")
    private Date fechaVencimiento;

    @Column(name = "estado")
    private byte estado;

}