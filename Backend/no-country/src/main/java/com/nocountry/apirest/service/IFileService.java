package com.nocountry.apirest.service;

import java.util.List;
import java.util.Optional;


import com.nocountry.apirest.model.File;

public interface IFileService {

	public List<File> getFiles();
	public Optional<File> getFile(int id);
	public void saveUser(File File);
	public void delete (String id);
	public boolean exists(int id);
}
