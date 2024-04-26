package com.nocountry.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nocountry.apirest.model.File;

@Repository
public interface IFileRepository extends JpaRepository<File, Integer>{

	@Query(value = "SELECT*FROM archivos WHERE archivo_public_id= :id",nativeQuery = true)
	public File finByPublicId (String id);
	
	@Query(value="SELECT*FROM archivos WHERE prestamo_id=:prestamo_id or usuario_id=:usuario_id", nativeQuery = true)
	public File findByUsuarioIdOrPrestamoId(String usuario_id,String prestamo_id);
}
