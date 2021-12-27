import React, { useState, useEffect } from 'react';
import { useQuery, QueryCache } from 'react-query';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService';
import { UserInterface, UsersInterface } from '../../interfaces/User';
import axios from 'axios';

const Admin: React.FC = () => {
	axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('apiKey')}`;
	const { data: users } = useQuery<UsersInterface>('users', UserService.fetchUsers);

	const [ selectedUser, setSelectedUser ] = useState<UserInterface>(undefined);

	useEffect(
		() => {
			if (users) {
				setSelectedUser(users);
			}
		},
		[ users ]
	);

	return (
		<div className="flex-1 overflow-auto focus:outline-none admin-list " tabIndex={0}>
			<main className="flex-1 relative pb-8 z-0 overflow-y-auto">admin</main>
		</div>
	);
};

export default Admin;
