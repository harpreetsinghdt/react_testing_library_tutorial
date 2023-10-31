import * as React from 'react';
import App from './App';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';

describe('App Component', () => {
	it('Render app component', async () => {
		render(<App />);

		// wait for the user to resolve
		await screen.findByText(/Signed in as/);

		expect(screen.queryByText(/Searches for javascript/)).toBeNull();

		// screen.debug();

		fireEvent.change(screen.getByRole('textbox'), {
			target: { value: 'javascript' },
		});

		waitFor(() => {
			expect(screen.getByText(/Searches for javascript/)).toBeInTheDocument();
		});

		// screen.debug();
	});
});
