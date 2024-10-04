type SearchProps = {
	handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Search = ({ handleSearch }: SearchProps) => {
	return (
		<form>
			<input onKeyDown={handleSearch} className='border border-grey-900' type='text' placeholder='Enter a word' />
		</form>
	);
};

export default Search;
