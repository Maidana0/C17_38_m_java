package com.nocountry.apirest.service;

import java.util.List;

import com.nocountry.apirest.model.User;

public interface IUserService {
	public List<User> getUsers();

    public void saveUser(User u);

    public void editUser(int id, User user);

    public void deleteUser(int id);

    public User findUser(int id);
}
