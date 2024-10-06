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
      <div
        className={`flex h-12 items-center rounded-2xl bg-grey-300 px-6 tablet:h-16 dark:bg-grey-800 ${
          isEmptySearch
            ? "border border-red"
            : "focus-within:outline focus-within:outline-2 focus-within:outline-purple"
        }`}
      >
        <input
          className="w-full bg-grey-300 font-bold focus:outline-none tablet:text-[1.25rem] dark:bg-grey-800 dark:text-white"
          type="text"
          placeholder="Search for any word..."
          value={searchBarText}
          onChange={onInputChange}
        />
        <button type="submit">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
      {isEmptySearch && (
        <p className="mt-2 text-red">Whoops, can't be empty…</p>
      )}
    </form>
  );
};

export default Search;
