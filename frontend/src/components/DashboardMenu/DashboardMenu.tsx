import React, { useState } from 'react';
import logo from '../../static/logo.png';
import AuthService from '../../services/AuthService';
import { Link, useHistory } from 'react-router-dom';
import styles from './DashboardMenu.module.scss';

const iconColor = 'rgba(255,255,255,0.4)';

const DashboardMenu: React.FC<{ active: string }> = ({ active }) => {
	const [ menuOpened, setMenuOpened ] = useState<boolean>(false);
	const [ activeTab, setActiveTab ] = useState<string>(active);
	let history = useHistory();

	function logout() {
		AuthService.logout();
		//history.push('/login');
	}

	return (
		<React.Fragment>
			<div className="md:hidden">
				<a
					className="menuOpener"
					onClick={function() {
						setMenuOpened(!menuOpened);
					}}
				>
					<svg
						className="mr-3 h-6 w-6 text-indigo-300"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke={'#000'}
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</a>
				<div className={`${menuOpened ? 'show' : ''} transition fixed inset-0 flex z-40`}>
					<div className="fixed inset-0" aria-hidden="true">
						<div className="absolute inset-0 bg-gray-600 opacity-75" />
					</div>

					<div className="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
						<div className="absolute top-0 right-0 -mr-12 pt-2">
							<button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
								<span className="sr-only">Close sidebar</span>
								<svg
									className="h-6 w-6 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke={iconColor}
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
							<div className="flex-shrink-0 flex items-center px-4">
								<img className="h-8 w-auto" src={logo} alt="Logo" />
								<div className="logoText">CODING CHALLENGE</div>
							</div>
							<nav className="mt-5 px-2 space-y-1">
								<Link
									to="/home"
									className={`${activeTab === 'home'
										? 'bg-indigo-800'
										: 'hover:bg-indigo-600 hover:bg-opacity-75'} text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
								>
									<svg
										className="mr-3 h-6 w-6 text-indigo-300"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke={iconColor}
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
										/>
									</svg>
									Home
								</Link>
							</nav>
						</div>
						<div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
							<a href="#" className="flex-shrink-0 group block">
								<div className="flex items-center">
									<p data-letters="SA" />
									<div className="ml-1">
										<p className="text-sm font-medium text-white">Super Admin</p>
										<p
											className="text-left text-xs font-medium text-indigo-200 group-hover:text-white"
											onClick={function() {
												logout();
											}}
										>
											Logout
										</p>
									</div>
								</div>
							</a>
						</div>
					</div>
					<div className="flex-shrink-0 w-14" aria-hidden="true" />
				</div>
			</div>
			<div className="hidden bg-indigo-700 md:flex md:flex-shrink-0 DashboardMenu">
				<div className="flex flex-col w-64">
					<div className="flex flex-col h-0 flex-1">
						<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto main-menu">
							<div className="flex items-center flex-shrink-0 px-4">
								<img className="h-8 w-auto" src={logo} alt="Logo" />
								<div className="logoText">CODING CHALLENGE</div>
							</div>
							<nav className="mt-5 flex-1 px-2 space-y-1">
								<Link
									to="/home"
									className={`${activeTab === 'home'
										? 'bg-indigo-800'
										: 'hover:bg-indigo-600 hover:bg-opacity-75'} text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
								>
									<svg
										className="mr-3 h-6 w-6 text-indigo-300"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke={iconColor}
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
										/>
									</svg>
									Home
								</Link>
							</nav>
						</div>

						<div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
							<a href="#" className="flex-shrink-0 w-full group block">
								<div className="flex items-center">
									<p data-letters="SA" />
									<div className="ml-1">
										<p className="text-sm font-medium text-white">User</p>
										<p
											className="text-left text-xs font-medium text-indigo-200 group-hover:text-white"
											onClick={function() {
												logout();
											}}
										>
											Logout
										</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default DashboardMenu;
