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
		System.out.println("Received user data:");
        System.out.println("Name: " + user.getName());
        System.out.println("Surname: " + user.getSurname());
        System.out.println("DNI: " + user.getDni());
        System.out.println("Email: " + user.getEmail());
        System.out.println("Cellphone: " + user.getCellphone());

        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<User>> violations = validator.validate(user);

        if (!violations.isEmpty()) {
            StringBuilder errorMessage = new StringBuilder("Invalid user data provided:");
            for (ConstraintViolation<User> violation : violations) {
                errorMessage.append(" Field '").append(violation.getPropertyPath()).append("': ").append(violation.getMessage());
            }
            throw new InvalidUserDataException(errorMessage.toString());
        }

        userRepo.save(user);
		
	}

	@Override
	public void editUser(int id, User user) {
		//I look for the user in the database
        User userr = userRepo.findById(id).orElseThrow(() -> new UserNotFoundException("User not found with id:" + id));

        //set your date
        userr.setId(user.getId());
        userr.setName(user.getName());
        userr.setSurname(user.getSurname());
        userr.setDni(user.getDni());
        userr.setEmail(user.getEmail());
        userr.setCellphone(user.getCellphone());

        //I save the edited data
        userRepo.save(userr);
		
	}

	@Override
	public void deleteUser(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public User findUser(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
