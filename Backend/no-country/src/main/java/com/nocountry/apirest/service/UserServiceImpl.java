package com.nocountry.apirest.service;

import java.util.List;
import java.util.Set;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nocountry.apirest.exception.AutenticacionException;
import com.nocountry.apirest.exception.InvalidUserDataException;
import com.nocountry.apirest.exception.UserNotFoundException;
import com.nocountry.apirest.model.Role;
import com.nocountry.apirest.model.User;
import com.nocountry.apirest.model.UserRole;
import com.nocountry.apirest.repository.IUserRepository;
import com.nocountry.apirest.repository.IUserRoleRepository;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements IUserService{
	
	private IUserRepository userRepo;
    private IUserRoleRepository userRoleRepo;
    private PasswordEncoder passwordEncoder;


	public List<User> getUsers() {
		return userRepo.findAll();
	}

	@Override
	public User saveUser(User user) {
        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<User>> violations = validator.validate(user);

        if (!violations.isEmpty()) {
            StringBuilder errorMessage = new StringBuilder("Datos del usuario no válidos:");
            for (ConstraintViolation<User> violation : violations) {
                errorMessage.append(" Campo '").append(violation.getPropertyPath()).append("': ").append(violation.getMessage());
            }
            throw new InvalidUserDataException(errorMessage.toString());
        }
        //Se guarda el usuario
        User userSave=userRepo.save(user);
        //Se le asigna el rol al usuario
        Role role=new Role();
        role.setId(1);
		UserRole newRole=new UserRole();
		newRole.setRole(role);
		newRole.setUser(userSave);
		//Se guarda el rol del usuario
		userRoleRepo.save(newRole);
		return userSave;
	}

	@Override
	public void editUser(int id, User u) {
		//I look for the user in the database
        User user = userRepo.findById(id).orElseThrow(() -> new UserNotFoundException("Usuario con el id:" + id + " no encontrado"));

        //set your date
        user.setId(u.getId());
        user.setName(u.getName());
        user.setSurname(u.getSurname());
        user.setDni(u.getDni());
        user.setEmail(u.getEmail());
        user.setCellphone(u.getCellphone());
        user.setState(u.isState());

        //I save the edited data
        userRepo.save(user);
		
	}

	@Override
	public void deleteUser(int id) {
	//// Check if the user exists before deleting it
        if(!userRepo.existsById(id)){
            throw new UserNotFoundException("Usuario no encontrado con el id:" + id );
        }

        User u = this.findUser(id);
        u.setDeleted(true);
        //remove the user
        userRepo.save(u);
		
	}

	@Override
	public User findUser(int id) throws UserNotFoundException {

        User user = userRepo.findById(id).orElseThrow(() -> new UserNotFoundException("Usuario no encontrado con el id:" + id ));


        return user;
    }

    // Método para autenticar un usuario por su correo electrónico y contraseña
	@Override
	public User autenticarUsuario(User user) {
	    if (user.getEmail() == null || user.getPassword() == null) {
	        throw new AutenticacionException("El correo electrónico y la contraseña son obligatorios.");
	    }

	    User usuarioEncontrado = userRepo.findByEmail(user.getEmail());
	    
	    if (usuarioEncontrado != null && passwordEncoder.matches(user.getPassword(), usuarioEncontrado.getPassword())) {
	        return usuarioEncontrado;
	    }

	    throw new AutenticacionException("Credenciales incorrectas");
	}

    @Override
    public boolean validateEmailAndDni(String email, String dni) {

        if(userRepo.existsByEmail(email)){

            return false;
        }
        if(userRepo.existsByDni(dni)){

            return false;
        }
        return true;

    }


}
