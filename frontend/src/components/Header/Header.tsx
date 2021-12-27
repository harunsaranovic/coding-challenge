import React, { useState } from 'react';
import logo from '../../static/logo.png';
import AuthService from '../../services/AuthService';
import { Link, useHistory } from 'react-router-dom';

const Header: React.FC<{ active: string }> = ({ active }) => {
	const [ menuOpened, setMenuOpened ] = useState<boolean>(false);
	const [ activeTab, setActiveTab ] = useState<string>(active);
	let history = useHistory();

	function logout() {
		AuthService.logout();
	}

	return (
		<React.Fragment>
			<div className="header">
				<div className="logo">
					<h3>Logo</h3>
				</div>
				<div className="header-links">
					<div>
						{localStorage.getItem('user') ? (
							<React.Fragment>
								<div className="header-link">
									<Link to="/home">Home</Link>
								</div>
								<div className="header-link">
									<Link to="/profile">Profile</Link>
								</div>
								<div className="header-link">
									<a
										onClick={function() {
											logout();
										}}
									>
										Logout
									</a>
								</div>
							</React.Fragment>
						) : (
							<React.Fragment>
								<div className="header-link">
									<Link to="/login">Login</Link>
								</div>
								<div className="header-link">
									<Link to="/register">Register</Link>
								</div>
							</React.Fragment>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Header;
