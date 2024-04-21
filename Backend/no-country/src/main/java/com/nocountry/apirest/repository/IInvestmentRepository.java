package com.nocountry.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.apirest.model.Investment;

@Repository
public interface IInvestmentRepository extends JpaRepository<Investment, Integer>{
	
}
