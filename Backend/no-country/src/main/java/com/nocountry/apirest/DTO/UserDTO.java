package com.nocountry.apirest.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class UserDTO {

	@Getter
	@Setter
	@AllArgsConstructor
	@NoArgsConstructor
	static class loginDTO{
		String email;
		String password;
	}
}
