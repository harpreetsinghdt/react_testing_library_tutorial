import * as React from 'react';
import App from './App';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('App Component', () => {
	it('Render app component', async () => {
		render(<App />);

		// wait for the user to resolve
		await screen.findByText(/Signed in as/);

		expect(screen.queryByText(/Searches for javascript/)).toBeNull();

		userEvent.type(screen.getByRole('textbox'), 'javascript');

		expect(screen.getByText(/Searches for javascript/)).toBeInTheDocument();
	});
});
