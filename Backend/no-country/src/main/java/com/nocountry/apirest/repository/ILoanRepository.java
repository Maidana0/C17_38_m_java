package com.nocountry.apirest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nocountry.apirest.model.Loan;

@Repository
public interface ILoanRepository extends JpaRepository<Loan, Integer> {
	
	//Find By User
	@Query ("SELECT l FROM Loan l WHERE l.user.name = :name")
	public List<Loan> findByUser(@Param ("name") String name);
	
}
