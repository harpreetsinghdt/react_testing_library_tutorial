import { render, fireEvent, userEvent } from '@testing-library/react';
import { vi } from 'vitest';

function Search({ value, onChange, children }) {
	return (
		<div>
			<label htmlFor='search'>{children}</label>
			<input id='search' type='text' value={value} onChange={onChange} />
		</div>
	);
}

// describe('Search', () => {
// 	it('calls the onChange callback handler', () => {
// 		// Jest
// 		const onChange = jest.fn();
// 		// Vitest
// 		// const onChange = vi.fn();

// 		render(
// 			<Search value='' onChange={onChange}>
// 				Search:
// 			</Search>
// 		);

// 		fireEvent.change(screen.getByRole('textbox'), {
// 			target: { value: 'JavaScript' },
// 		});

// 		expect(onChange).toHaveBeenCalledTimes(1);
// 	});
// });

describe('Search', () => {
	it('calls the onChange callback handler', async () => {
		// Jest
		// const onChange = jest.fn();
		// Vitest
		const onChange = vi.fn();

		render(
			<Search value='' onChange={onChange}>
				Search:
			</Search>
		);

		await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

		expect(onChange).toHaveBeenCalledTimes(10);
	});
});
