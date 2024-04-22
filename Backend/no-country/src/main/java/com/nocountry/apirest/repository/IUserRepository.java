package com.nocountry.apirest.repository;

import com.nocountry.apirest.model.Investment;
import com.nocountry.apirest.model.Loan;
import jakarta.persistence.TypedQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nocountry.apirest.model.User;

import java.util.List;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByDni(String dni);

    //Obtener las inversiones de un cliente
    @Query("SELECT i FROM Investment i WHERE i.user.id = :userId")
    List<Investment> findInvestmentsByUserId(int userId);

    //Obtener los prestamos de un cliente
    @Query("SELECT l FROM Loan l WHERE l.user.id = :userId")
    List<Loan> findLoansByUserId(int userId);



}
