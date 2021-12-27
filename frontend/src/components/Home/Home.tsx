import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService';
import { UsersInterface } from '../../interfaces/User';

const Home: React.FC = () => {
	//const { data: users } = useQuery<UsersInterface>('users', () => UserService.fetchUsers);

	return (
		<div className="content-home">
			<h1>Home:</h1>
		</div>
	);
};

export default Home;
