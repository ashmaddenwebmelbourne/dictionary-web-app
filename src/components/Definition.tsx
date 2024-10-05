type Definition = {
  definition: string;
};

type Meaning = {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
};

type DefinitionProps = {
  meanings: Meaning[];
  onWordUpdate: (word: string) => void;
};

const Definition = ({ meanings, onWordUpdate }: DefinitionProps) => {
  const renderWordList = (words: string[], title: string) =>
    words.length > 0 && (
      <div className="flex gap-4">
        <strong>{title}</strong>
        <div>
          {words.map((word, index) => (
            <p onClick={() => onWordUpdate(word)} key={index}>
              {word}
            </p>
          ))}
        </div>
      </div>
    );

  return (
    <div>
      {meanings.map((meaning, index) => (
        <div key={index}>
          <h2 className="font-bold">{meaning.partOfSpeech}</h2>
          <h3>Meaning</h3>
          <ul>
            {meaning.definitions.map((def, idx) => (
              <li key={idx}>{def.definition}</li>
            ))}
          </ul>
          {renderWordList(meaning.synonyms, "Synonyms")}
          {renderWordList(meaning.antonyms, "Antonyms")}
        </div>
      ))}
    </div>
  );
};

export default Definition;
