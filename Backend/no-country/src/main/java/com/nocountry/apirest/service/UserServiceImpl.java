package com.nocountry.apirest.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.apirest.exception.InvalidUserDataException;
import com.nocountry.apirest.exception.UserNotFoundException;
import com.nocountry.apirest.model.User;
import com.nocountry.apirest.repository.IUserRepository;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;

@Service
public class UserServiceImpl implements IUserService{
	
	@Autowired
	private IUserRepository userRepo;

	@Override
	public List<User> getUsers() {
		return userRepo.findAll();
	}

	@Override
	public void saveUser(User user) {
		System.out.println("Datos del usuario:");
        System.out.println("Name: " + user.getName());
        System.out.println("Surname: " + user.getSurname());
        System.out.println("DNI: " + user.getDni());
        System.out.println("Email: " + user.getEmail());
        System.out.println("Cellphone: " + user.getCellphone());
        System.out.println("Password: " + user.getPassword());
        System.out.println("State: " + user.isState());
        System.out.println("Esta eliminado: " + user.isDeleted());

        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<User>> violations = validator.validate(user);

        if (!violations.isEmpty()) {
            StringBuilder errorMessage = new StringBuilder("Datos del usuario no válidos:");
            for (ConstraintViolation<User> violation : violations) {
                errorMessage.append(" Campo '").append(violation.getPropertyPath()).append("': ").append(violation.getMessage());
            }
            throw new InvalidUserDataException(errorMessage.toString());
        }

        userRepo.save(user);
		
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

}
