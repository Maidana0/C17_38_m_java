package com.nocountry.apirest.services;

import java.io.IOException;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface FileUpload {
	public Map uploadFile(MultipartFile multipartFile) throws IOException;
	public Map deleteFile(String id) throws IOException;
}
