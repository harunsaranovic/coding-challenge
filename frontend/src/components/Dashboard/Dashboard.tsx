import React, { useState } from 'react';
import Header from '../Header/Header';
import styles from './Dashboard.module.scss';
import AuthService from '../../services/AuthService.js';
import { useHistory } from 'react-router';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';

interface PropTypes {
	comp: string;
}

const Dashboard: React.FC<PropTypes> = ({ comp }) => {
	let history = useHistory();
	//const [ token, setToken ] = useState(AuthService.getCurrentToken());

	//if (token === null) history.push('/login');

	return (
		<div className={styles.Dashboard}>
			<div className={'flex'}>
				<Header active={comp} />
				<div className="flex flex-col w-0 flex-1">
					{comp === 'admin' ? <Admin /> : ''}
					{comp === 'home' ? <Home /> : ''}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
