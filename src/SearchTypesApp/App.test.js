import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App component', () => {
	it('renders the app component', () => {
		render(<App />);

		expect(screen.getByTestId('courseId')).toBeInTheDocument();
	});
});
