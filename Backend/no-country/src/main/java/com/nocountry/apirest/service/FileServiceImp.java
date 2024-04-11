package com.nocountry.apirest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.apirest.model.File;
import com.nocountry.apirest.repository.IFileRepository;

@Service
public class FileServiceImp implements IFileService{

	@Autowired
	private IFileRepository fileRepository;
	
	@Override
	public List<File> getFiles() {
		return fileRepository.findAll();
	}

	@Override
	public Optional<File> getFile(int id) {
		return fileRepository.findById(id);
	}

	@Override
	public void saveUser(File file) {
		fileRepository.save(file);
		
	}
	
	@Override
	public void editUser(File file) {
		File newFile=fileRepository.finByPublicId(file.getFileId());
		newFile.setName(file.getName());
		newFile.setUrl(file.getUrl());
		
		fileRepository.save(newFile);
	}

	@Override
	public void delete(String id) {
		///verifica si el archivo existe
		File file=fileRepository.finByPublicId(id);
		//elimina el archivo en la base de datos
		fileRepository.deleteById(file.getId());
		
	}
	
}
