package com.nocountry.apirest.services;

import java.io.IOException;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FileUploadImpl implements FileUpload {

	private final Cloudinary cloudinary;

	///metodo para crear subir el archivo a cloudinary
	@Override
	public Map uploadFile(MultipartFile multipartFile) throws IOException {
		return cloudinary.uploader().upload(multipartFile.getBytes(), ObjectUtils.asMap("resource_type", "auto"));

	}

	//metodo para borrar el archivo en cloudinary
	@Override
	public Map<String,Map> deleteFile(String id) throws IOException {
		return cloudinary.uploader().destroy(id, ObjectUtils.emptyMap());
	}

	//metodo para actualizar archivo de cloudinary
	@Override
	public Map updateFile(MultipartFile multipartFile, String id) throws IOException {
		return cloudinary.uploader().upload(multipartFile.getBytes(), ObjectUtils.asMap("resource_type", "auto","public_id",id));

	}

}
