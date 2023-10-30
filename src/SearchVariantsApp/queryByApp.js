import * as React from 'react';

function App() {
	const [search, setSearch] = React.useState('React Js');
	function handleChange(e) {
		setSearch(e.target.value);
	}
	return (
		<div>
			<Search value={search} onChange={handleChange}>
				NewSearch:
			</Search>
			<p>aSearches for {search ? search : '...'}</p>
		</div>
	);
}

function Search({ value, onChange, children }) {
	return (
		<div>
			<label htmlFor='search'>{children}</label>
			<input
				id='search'
				type='text'
				value={value}
				onChange={onChange}
				placeholder='Enter text'
			/>
			<img src='' alt='Profile Img' />
			<a href='' data-testid='courseId' />
		</div>
	);
}

export default App;
