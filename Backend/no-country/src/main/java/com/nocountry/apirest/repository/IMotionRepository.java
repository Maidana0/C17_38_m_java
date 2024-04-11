package com.nocountry.apirest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nocountry.apirest.model.Motion;

@Repository
public interface IMotionRepository extends JpaRepository<Motion, Integer> {
	
	//Find By User
	@Query ("SELECT m FROM Motion m WHERE m.user.name = :name")
	public List<Motion> findByUser(@Param ("name") String name);
	
}
