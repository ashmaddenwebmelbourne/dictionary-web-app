type Phonetic = {
  text: string;
  audio: string;
};

type SearchWordProps = {
  word: string | undefined;
  phonetics: Phonetic[];
};

const SearchWord = ({ word, phonetics }: SearchWordProps) => {
  const phoneticText = phonetics.find((p) => p.text)?.text || "";
  const audioSrc = phonetics.find((p) => p.audio)?.audio || "";

  return (
    word && (
      <div className="flex items-center justify-between">
        <div className="flex">
          <h1>{word}</h1>
          <p>{phoneticText}</p>
        </div>
        {audioSrc && (
          <div>
            <audio controls src={audioSrc} />
          </div>
        )}
      </div>
    )
  );
};

export default SearchWord;
