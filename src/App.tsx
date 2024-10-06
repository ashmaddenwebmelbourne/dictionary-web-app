import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  const [searchWord, setSearchWord] = useState<string | null>("Keyboard");
  const [searchBarText, setSearchBarText] = useState("Keyboard");
  const [definition, setDefinition] = useState(null);
  const [isWordNotFound, setIsWordNotFound] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(false);

  const handleSearch = () => {
    if (searchBarText.trim()) {
      setSearchWord(searchBarText.toLowerCase());
      setIsEmptySearch(false);
    } else {
      setIsEmptySearch(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarText(e.target.value.toLowerCase());
  };

  const updateSearchWord = (word: string) => {
    setSearchBarText(word);
    setSearchWord(word);
    setIsWordNotFound(false);
  };

  useEffect(() => {
    const fetchDefinition = async () => {
      if (!searchWord) return;

      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`,
        );
        if (!response.ok) throw new Error("Word not found");
        const data = await response.json();
        setDefinition(data[0]);
        setIsWordNotFound(false);
      } catch (error) {
        console.warn(error);
        setIsWordNotFound(true);
      }
    };
    fetchDefinition();
  }, [searchWord]);

  return (
    <div className="mx-auto max-w-[46rem]">
      <Header />
      <main className="mt-6 tablet:mt-[3.25rem]">
        <Search
          onSearch={handleSearch}
          searchBarText={searchBarText}
          onInputChange={handleInputChange}
          isEmptySearch={isEmptySearch}
        />
        {definition && !isWordNotFound && !isEmptySearch && (
          <Results definition={definition} onWordUpdate={updateSearchWord} />
        )}
        {isWordNotFound && !isEmptySearch && <NotFound />}
      </main>
    </div>
  );
}

export default App;
