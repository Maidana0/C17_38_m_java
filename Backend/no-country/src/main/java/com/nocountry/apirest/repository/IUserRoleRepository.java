package com.nocountry.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.apirest.model.UserRole;

@Repository
public interface IUserRoleRepository extends JpaRepository<UserRole, Integer>{

}
