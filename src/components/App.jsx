import './App.css';

import { useState } from 'react';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { ArtworkItem } from './ArtworkItem';
import { Footer } from './Footer';

export function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			setSearchResults([...json.data]);
			setSearchTerm(query);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			{searchTerm && <h2>"{searchTerm}"</h2>}
			{
				/* Conditional rendering of search results and displaying each artwork item */
				searchResults.length > 0 &&
					searchResults.map((item) => <ArtworkItem {...item} />)
			}
			<Footer />
		</div>
	);
}
