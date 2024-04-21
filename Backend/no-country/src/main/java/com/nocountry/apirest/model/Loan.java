package com.nocountry.apirest.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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
@Table(name = "prestamo")
public class Loan implements Serializable{

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prestamo_id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private User user;

    @Column(name = "banco")
    private String bank;
    
    @Column(name = "CBU")
    private String CBU;

    @Column(name = "monto")
    private Double amount;

    @Column(name = "tasa_interes")
    private Double interestRate;

    @Column(name = "fecha_inicio")
    private LocalDate startDate;

    @Column(name = "fecha_vencimiento")
    private LocalDate dueDate;

    @Column(name = "estado")
    private boolean status;
    
    
    @Column(name = "numero_cuotas")
    private Integer numberOfInstallments;
    
    @Column(name = "monto_cuotas")
    private Double installmentAmount;
    
    @OneToMany
    private List<Installment> installments;
    
    @OneToOne(mappedBy = "loan", cascade = CascadeType.ALL)
    private File file;
}
