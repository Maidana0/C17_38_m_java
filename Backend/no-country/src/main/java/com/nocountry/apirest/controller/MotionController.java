package com.nocountry.apirest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nocountry.apirest.exception.MotionNotFoundException;
import com.nocountry.apirest.model.Motion;
import com.nocountry.apirest.service.IMotionService;

@Controller
@RequestMapping("/motion")
public class MotionController {
	
	@Autowired
    private IMotionService motionService;
	
	@PostMapping("/save") 
	public void saveMotion(@RequestParam Integer userId,
	                         @RequestParam String typeOperation,
	                         @RequestParam Double amount,
	                         @RequestParam Double interestRate) {
		try {
		    motionService.saveMotion(userId, typeOperation, amount, interestRate);
		}catch (MotionNotFoundException e) {
	        System.err.println("Error: " + e.getMessage());
		}
	}
    
	@GetMapping("/get")
	public List<Motion> getMotions() {
		return motionService.getMotions();
	}
	
	@PostMapping("/edit")
	public void editMotion(@RequestParam Integer id, 
						   @RequestParam byte status) {
		motionService.editMotion(id, status);
		
	}
	
	
			
		
			
	

}
