package com.nocountry.apirest.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.nocountry.apirest.DTO.UserSummaryDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.apirest.DTO.LoginDTO;
import com.nocountry.apirest.exception.AutenticacionException;
import com.nocountry.apirest.model.User;
import com.nocountry.apirest.service.IUserService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@CrossOrigin(origins= {"http://localhost:3000"})
@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {

    private IUserService userServi;
	
	private PasswordEncoder passwordEncoder;

    //Get users
    @GetMapping("/get")
    public List<User> getUsers() {

        return userServi.getUsers();
    }

    //Create user
    @PostMapping("/create")
    public ResponseEntity<String> createUser(@Valid @RequestBody User user, BindingResult bindingResult) {
        // If there are validation errors, they are returned as a response
        if (bindingResult.hasErrors()) {
            List<String> errorMessages = bindingResult.getAllErrors().stream()
                    .map(error -> {
                        if (error instanceof FieldError) {
                            FieldError fieldError = (FieldError) error;
                            return "Field '" + fieldError.getField() + "': " + error.getDefaultMessage();
                        } else {
                            return error.getDefaultMessage();
                        }
                    })
                    .collect(Collectors.toList());

            return new ResponseEntity<>("Validation errors: " + errorMessages, HttpStatus.BAD_REQUEST);
        }

        // Check if the email or DNI already exist
        if (!userServi.validateEmailAndDni(user.getEmail(), user.getDni())) {
            return new ResponseEntity<>("Email or DNI already exists", HttpStatus.BAD_REQUEST);
        }

        // If there are no validation errors, the user is saved in the database
        String passwordEncoded=passwordEncoder.encode(user.getPassword());
        user.setPassword(passwordEncoded);
        userServi.saveUser(user);
        return new ResponseEntity<>("User created successfully", HttpStatus.CREATED);
    }

    //Edit user
    @PutMapping("/edit/{id}")
    public ResponseEntity<String> editUser(@PathVariable int id, @Valid @RequestBody User user,
                                           BindingResult bindingResult) {
        // If there are validation errors, they are returned as a response
        if (bindingResult.hasErrors()) {
            List<String> errorMessages = bindingResult.getAllErrors().stream()
                    .map(error -> {
                        if (error instanceof FieldError) {
                            FieldError fieldError = (FieldError) error;
                            return "Field '" + fieldError.getField() + "': " + error.getDefaultMessage();
                        } else {
                            return error.getDefaultMessage();
                        }
                    })
                    .collect(Collectors.toList());

            return new ResponseEntity<>("Validation errors: " + errorMessages, HttpStatus.BAD_REQUEST);
        }

        // If there are no validation errors, proceed to edit the user
        User existingUser = userServi.findUser(id);
        if (existingUser == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }

        // Set the ID of the incoming user to match the existing user's ID
        user.setId(id);
        // Save the edited user
        userServi.saveUser(user);
        return new ResponseEntity<>("User edited successfully", HttpStatus.OK);
    }

    //Delete user
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id) {
        // Find the user by ID
        User existingUser = userServi.findUser(id);

        // Check if the user exists
        if (existingUser == null) {
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }

        // Delete the user
        userServi.deleteUser(id);

        // Return a success response
        return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUser(@PathVariable int id){

        //Find the user by ID
        User user = userServi.findUser(id);
        // Check if the user exists
        if(user == null){
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    // Endpoint para la autenticación (login) de un usuario
 // Endpoint para la autenticación (login) de un usuario
    @PostMapping("/login")
    public ResponseEntity<?> autenticarUsuario(@RequestBody LoginDTO login) {
        try {
            String email = login.getEmail();
            String password = login.getPassword();

            if (email == null || password == null || email.isEmpty() || password.isEmpty()) {
                return ResponseEntity.badRequest().body("El correo electrónico y la contraseña son obligatorios.");
            }

            // Autenticar al usuario utilizando el servicio UserService
            User user = new User();
            user.setEmail(email);
            user.setPassword(password);
            User devolverUsuario = userServi.autenticarUsuario(user);

            if (devolverUsuario != null) {
                return ResponseEntity.ok(devolverUsuario);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
            }
        } catch (AutenticacionException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
        }
    }

    //Datos del usuario con su inversion
    @GetMapping("/userloaninvestment/{userId}")
    public UserSummaryDTO getUserSummary(@PathVariable int userId) {

        return userServi.getUserWithLoansAndInvestments(userId);
    }

}
