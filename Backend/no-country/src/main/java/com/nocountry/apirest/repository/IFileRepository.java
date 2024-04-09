package com.nocountry.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nocountry.apirest.model.File;

@Repository
public interface IFileRepository extends JpaRepository<File, Integer>{

	@Query(value = "SELECT*FROM archivos WHERE archivo_public_id= :id",nativeQuery = true)
	public File finByPublicId (String id);
}
