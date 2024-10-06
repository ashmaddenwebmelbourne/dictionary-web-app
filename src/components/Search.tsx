import searchIcon from "../assets/images/icon-search.svg";

type SearchProps = {
  onSearch: () => void;
  searchBarText: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEmptySearch: boolean;
};

const Search = ({
  onSearch,
  searchBarText,
  onInputChange,
  isEmptySearch,
}: SearchProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex h-12 items-center rounded-2xl bg-grey-300 px-6 tablet:h-16">
        <input
          className="w-full bg-grey-300 font-bold focus:outline-none"
          type="text"
          placeholder="Search for any word..."
          value={searchBarText}
          onChange={onInputChange}
        />
        <button type="submit">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
      {isEmptySearch && <p>Please enter a word</p>}
    </form>
  );
};

export default Search;
