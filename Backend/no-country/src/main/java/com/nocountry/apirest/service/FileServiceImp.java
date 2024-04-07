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
		fileRepository.findAll();
		return null;
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
	public void delete(String id) {
		fileRepository.deleteByFileId(id);
		
	}

	@Override
	public boolean exists(int id) {
		fileRepository.existsById(id);
		return false;
	}

	
}
