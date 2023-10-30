import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './queryByApp';
import FindApp from './findByApp';

describe('App', () => {
	it('renders App component', () => {
		render(<App />);

		expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
	});
});

describe('Find App', () => {
	it('renders Find App component', async () => {
		render(<FindApp />);

		expect(screen.queryByText(/Signed in as/)).toBeNull();

		screen.debug();

		expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

		screen.debug();
	});
});
