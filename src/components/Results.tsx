import SearchWord from "./SearchWord";
import Definition from "./Definition";
import Source from "./Source";

type ResultsProps = {
  definition: {
    license: object;
    meanings: {
      antonyms: string[];
      definitions: {
        definition: string;
      }[];
      partOfSpeech: string;
      synonyms: string[];
    }[];
    phonetics: {
      text: string;
      audio: string;
    }[];
    sourceUrls: string[];
    word: string;
  };
  onWordUpdate: (word: string) => void;
};

const Results = ({ definition, onWordUpdate }: ResultsProps) => {
  return (
    <>
      <SearchWord word={definition?.word} phonetics={definition.phonetics} />
      <Definition meanings={definition.meanings} onWordUpdate={onWordUpdate} />
      <Source sources={definition.sourceUrls} />
    </>
  );
};

export default Results;
