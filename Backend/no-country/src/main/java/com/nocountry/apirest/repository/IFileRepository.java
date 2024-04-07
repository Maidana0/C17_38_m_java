package com.nocountry.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nocountry.apirest.model.File;

@Repository
public interface IFileRepository extends JpaRepository<File, Integer>{
	@Modifying
	@Query(value = "delete from archivos where archivo_public_id=:id",nativeQuery = true)
	public void deleteByFileId (String id);
}
