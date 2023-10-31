import * as React from 'react';

const title = 'Welcome to React Testing Library';

function App() {
	return (
		<>
			<div>{title}</div>
			<ul>
				<li>
					<a
						href='https://testing-library.com/docs/react-testing-library/intro'
						target='blank'>
						Documentation
					</a>
				</li>
				<li>
					<a
						href='https://www.robinwieruch.de/react-testing-library/'
						target='_blank'>
						Tutorial
					</a>
				</li>
			</ul>
		</>
	);
}

export default App;
