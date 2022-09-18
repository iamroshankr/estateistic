import React from 'react';
import { Box } from '@mui/material';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const App = () => {

	return (
		<Box>
			<Header />
			<Home />
			<Footer />
		</Box>
	);

};

export default App;
