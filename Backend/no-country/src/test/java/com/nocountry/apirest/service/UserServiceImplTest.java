package com.nocountry.apirest.service;

import com.nocountry.apirest.exception.InvalidUserDataException;
import com.nocountry.apirest.exception.UserNotFoundException;
import com.nocountry.apirest.model.User;
import com.nocountry.apirest.repository.IUserRepository;
import com.nocountry.apirest.repository.IUserRoleRepository;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.Optional;
import java.util.Set;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

    @Mock
    private IUserRepository userRepository;

    @Mock
    private IUserRoleRepository userRoleRepo;

    @InjectMocks
    private UserServiceImpl underTest;

    @BeforeEach
    void setUp(){
        underTest = new UserServiceImpl(userRepository, userRoleRepo);
    }

    @DisplayName("Check if it's able to list all the users")
    @Test
    void CanGetAllUsers() {

        underTest.getUsers();
        verify(userRepository).findAll();
    }

    @DisplayName("Test if user is being save correctly")
    @Test
    void saveUser() {
        //Given
        User user = new User();
        user.setName("Ana");
        user.setSurname("Diaz");
        user.setDni("1233541");
        user.setEmail("mail@mail.com");
        user.setCellphone("32547895");
        user.setState(true);
        //When
        underTest.saveUser(user);
        //Then
        ArgumentCaptor<User> userArgumentCaptor =
                ArgumentCaptor.forClass(User.class);

        verify(userRepository
        ).save(userArgumentCaptor.capture());

        User capturedStudent = userArgumentCaptor.getValue();
        assertThat(capturedStudent).isEqualTo(user);
    }
    @DisplayName("When trying to save new user with invalid User data should throw exception")
    @Test
    public void WithInvalidUserData_ShouldThrowException() {
        // Given
        User user = new User();
        user.setName("");
        user.setSurname("");
        user.setDni("12345678A");
        user.setEmail("test@example.com");
        user.setCellphone("123456789");
        user.setState(true);

        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        Set<ConstraintViolation<User>> violations = validator.validate(user);

        // When
        assertThatThrownBy(() -> underTest.saveUser(user))
                .isInstanceOf(InvalidUserDataException.class)
                .hasMessageContaining("Datos del usuario no válidos:");

        // Then
        verify(userRepository, never()).save(user);
    }

    @DisplayName("Test if the user attributes can be edit")
    @Test
    void editUser() {
        // Given
        int userId = 1;

        User modifyUser = new User();
        modifyUser.setId(userId);
        modifyUser.setName("Diana");
        modifyUser.setSurname("Perez");
        modifyUser.setDni("1233541");
        modifyUser.setPassword("akdajsdlas");
        modifyUser.setEmail("mail@mail.com");
        modifyUser.setCellphone("32547895");
        modifyUser.setState(true);

        User existingUser = new User();
        existingUser.setId(userId);
        existingUser.setName("Ana");
        existingUser.setSurname("Diaz");
        existingUser.setDni("1233541");
        existingUser.setPassword("akdajsdlas");
        existingUser.setEmail("mail@mail.com");
        existingUser.setCellphone("32547895");
        existingUser.setState(true);

        when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));

        // When
        underTest.editUser(userId, modifyUser);

        // Then
        verify(userRepository).findById(userId);

        assertThat(existingUser.getName()).isEqualTo(modifyUser.getName());
        assertThat(existingUser.getSurname()).isEqualTo(modifyUser.getSurname());
    }

    @DisplayName("Test if a user can be delete using logic delete")
    @Test
    void deleteUser() {

        //Given
        int userId = 1;
        User existingUser = new User();
        existingUser.setId(userId);
        existingUser.setName("Ana");
        existingUser.setSurname("Diaz");
        existingUser.setDni("1233541");
        existingUser.setPassword("akdajsdlas");
        existingUser.setEmail("mail@mail.com");
        existingUser.setCellphone("32547895");

        when(userRepository.existsById(userId)).thenReturn(true);
        when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));

        //When
        underTest.deleteUser(userId);

        //Then
        verify(userRepository).existsById(userId);
        verify(userRepository).findById(userId);
        assertThat(existingUser.isDeleted()).isTrue();
        verify(userRepository).save(existingUser);

    }

    @DisplayName("Test if a user can be found by id")
    @Test
    void findUser() {
        // Given
        int userId = 1;
        User expectedUser = new User();
        expectedUser.setId(userId);
        expectedUser.setName("Ana");
        expectedUser.setSurname("Martinez");
        expectedUser.setPassword("adssasda");
        expectedUser.setDni("12345678A");
        expectedUser.setEmail("test@example.com");
        expectedUser.setCellphone("123456789");

        when(userRepository.findById(userId)).thenReturn(Optional.of(expectedUser));
        // When
        User foundUser = underTest.findUser(userId);
        // Then
        verify(userRepository).findById(userId); // Verify that findById method was called with the provided userId
        assertThat(foundUser).isEqualTo(expectedUser); // Assert that the foundUser is equal to the expectedUser
    }

    @DisplayName("When trying to delete an user but the id doesn't exist it should throw an exception")
    @Test
    public void WhenUserIdNotFoundShouldThrowException() {
        // Given
        int userId = 1;
        when(userRepository.existsById(userId)).thenReturn(false);
        assertThatThrownBy(() -> underTest.deleteUser(userId))
                .isInstanceOf(UserNotFoundException.class)
                .hasMessageContaining("Usuario no encontrado con el id:" + userId );

        // Then
        verify(userRepository, never()).deleteById(userId);
    }
}