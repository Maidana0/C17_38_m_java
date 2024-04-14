package com.nocountry.apirest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nocountry.apirest.model.Installment;

@Repository
public interface IInstallmentRepository extends JpaRepository<Installment, Integer> {
	
	//Find By User
		@Query ("SELECT i FROM Installment i WHERE i.loan.user.name = :name")
		public List<Installment> findByUser(@Param ("name") String name);

}
