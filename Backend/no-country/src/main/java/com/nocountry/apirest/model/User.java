package com.nocountry.apirest.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "usuario")
public class User implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usuario_id")
    private int id;
	
	@NotBlank(message = "El nombre no puede estar vacío")
	@Size(min = 2, max = 50, message = "El nombre debe tener entre 2 y 50 caracteres")
    @Column(name = "nombre")
    private String name;

	@NotBlank(message = "El apellido no puede estar vacío")
    @Size(min = 2, max = 50, message = "El apellido debe tener entre 2 y 50 caracteres")
    @Column(name = "apellido")
    private String surname;

	@NotBlank(message = "El dni no puede estar vacío")
    @Size(min = 7, max = 20, message = "El dni debe tener entre 7 y 20 caracteres")
    @Column(name = "dni")
    private String dni;

	@NotBlank(message = "El correo electrónico no puede estar vacío")
    @Email(message = "El formato del correo electrónico no es válido")
	@Size(min = 11, max = 50, message = "El correo electrónico debe tener entre 11 y 50 caracteres")
    @Column(name = "email")
    private String email;

	@Column(name = "password")
    private String password;
	
	@NotNull(message = "El número de celular no puede estar vacío")
    @Size(min = 8, max = 50, message = "El número de celular debe tener entre 8 y 30 caracteres")
    @Column(name="celular")
    private String cellphone;

	@Column(name = "estado")
    private boolean state;

    @Column(name = "eliminado")
    private boolean deleted=false;
    

}