package com.nocountry.apirest.controller;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nocountry.apirest.model.File;
import com.nocountry.apirest.service.FileServiceImp;
import com.nocountry.apirest.services.FileUpload;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/upload")
public class FileUploadController {
	
	@Autowired
	private FileUpload fileUpload;
	
	@Autowired
	private FileServiceImp fileService;

	@PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> upload(@RequestParam("image") MultipartFile multipartFile, Model model) {
        try {
        	Map upload=fileUpload.uploadFile(multipartFile);
            String url = (String) upload.get("url");
            String publicId=(String) upload.get("public_id");
            if (url == null) {
                return new ResponseEntity<>("Error al subir el archivo!", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            File file = new File();
            file.setName(multipartFile.getOriginalFilename());
            file.setUrl(url);
            file.setFileId(publicId);
            fileService.saveUser(file);
            return new ResponseEntity<>("Archivo subido y almacenado con éxito!", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Error al subir el archivo!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	
	@DeleteMapping("/upload")
	public ResponseEntity<String> delete(@RequestParam String id) {
	    try {
	    	//borra el archivo de cloudinary
	        Map result = fileUpload.deleteFile(id);
	        if (result.isEmpty() || result.get("result").equals("not found")) {
	            return new ResponseEntity<>("Archivo no encontrado!", HttpStatus.NOT_FOUND);
	        }
	        //borra el archivo en la base de datos
	        fileService.delete(id);
	        return new ResponseEntity<>("Archivo eliminado con éxito!", HttpStatus.OK);
	    } catch (IOException e) {
	        return new ResponseEntity<>("Error al eliminar el archivo!", HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	

}
