import { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import './App.css';

function App() {
	const [searchWord, setSearchWord] = useState<string | null>(null);
	const [definition, setDefinition] = useState(null);

	// display parts of the return object
	// change font selection
	// theme switcher

	const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			setSearchWord(e.currentTarget.value);
		}
	};

	useEffect(() => {
		async function getDefinition() {
			try {
				const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
				const word = await res.json();
				if (!res.ok) {
					throw new Error('The search word was not found in the dictionary');
				}
				setDefinition(word[0]);
			} catch (error) {
				console.warn(error);
			}
		}
		if (searchWord !== null) {
			getDefinition();
		}
	}, [searchWord]);

	console.log(definition);

	return (
		<>
			<Header />
			<Search handleSearch={handleSearch} />
			<Results definition={definition} />
		</>
	);
}

export default App;
