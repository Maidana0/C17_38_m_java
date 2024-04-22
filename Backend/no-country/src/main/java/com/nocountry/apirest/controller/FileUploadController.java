package com.nocountry.apirest.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nocountry.apirest.model.File;
import com.nocountry.apirest.model.Loan;
import com.nocountry.apirest.model.User;
import com.nocountry.apirest.service.FileServiceImp;
import com.nocountry.apirest.services.FileUpload;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins= {"http://localhost:3000"})
@RestController
@RequestMapping("/file")
@AllArgsConstructor
public class FileUploadController {
	
	
	private FileUpload fileUpload;

	private FileServiceImp fileService;

	@GetMapping(value="/files")
	public List<File>getFiles(){
		return fileService.getFiles();
	}
	
	@PostMapping(value = "", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> upload(@RequestParam("archivo") MultipartFile multipartFile,@RequestParam(required = false) Integer usuario_id,@RequestParam(required = false) Integer prestamo_id) {
        try {
        	Map<?, ?> upload=fileUpload.uploadFile(multipartFile);
            String url = (String) upload.get("url");
            String publicId=(String) upload.get("public_id");
            if (url == null) {
                return new ResponseEntity<>("Error al subir el archivo!", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            File file = new File();
            file.setName(multipartFile.getOriginalFilename());
            file.setUrl(url);
            file.setFileId(publicId);
            if (usuario_id != null) {
            	User user=new User();
            	user.setId(usuario_id);
            	file.setUser(user);
            }
            if(prestamo_id!=null) {
            	Loan loan=new Loan();
            	loan.setId(prestamo_id);
            	file.setLoan(loan);
            }
            fileService.saveUser(file);
            return new ResponseEntity<>("Archivo subido y almacenado con éxito!", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Error al subir el archivo!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	
	@DeleteMapping("")
	public ResponseEntity<String> delete(@RequestParam String id) {
	    try {
	    	//borra el archivo de cloudinary
	        Map<?, ?> result = fileUpload.deleteFile(id);
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
	
	@PutMapping(value = "",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<String> update(@RequestParam String public_id,@RequestParam("archivo")MultipartFile multipartFile){
		try {
			Map update=fileUpload.updateFile(multipartFile, public_id);
			String url=(String) update.get("url");
			if(url == null) {
				return new ResponseEntity<>("Error al actualizar el archivo!", HttpStatus.INTERNAL_SERVER_ERROR);
			}
			File file=new File();
			file.setFileId(public_id);
			file.setName(multipartFile.getOriginalFilename());
			file.setUrl(url);
			fileService.editUser(file);
			return new ResponseEntity<>("Archivo actualizado correctamente", HttpStatus.OK);
		} catch(IOException e) {
			return new ResponseEntity<>("Error al subir el archivo", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	

}
