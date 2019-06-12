import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import Content from '../src/ts/layouts/content';

const App: FunctionComponent = () => {
	const [ page, setPage ] = useState('main');

	return <Content />;
};

export default App;
