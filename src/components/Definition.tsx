type Definition = {
  definition: string;
  example?: string;
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
      <div className="mb-8 flex items-start gap-6 tablet:mb-10">
        <p className="text-base text-grey-500 tablet:text-xl">{title}</p>
        <ul className="flex flex-col gap-1">
          {words.map((word, index) => (
            <li
              className="cursor-pointer text-base font-bold text-purple tablet:text-[1.25rem]"
              onClick={() => onWordUpdate(word)}
              key={index}
            >
              {word}
            </li>
          ))}
        </ul>
      </div>
    );

  console.log(meanings);

  return (
    <div className="mt-8 tablet:mt-[2.5rem]">
      {meanings.map((meaning, index) => (
        <div key={index}>
          <div className="flex items-center gap-8">
            <strong className="text-lg font-bold italic tablet:text-2xl dark:text-white">
              {meaning.partOfSpeech}
            </strong>
            <div className="h-[0.063rem] w-full bg-grey-400 dark:bg-grey-600"></div>
          </div>
          <p className="mb-4 mt-8 text-base text-grey-500 tablet:mb-6 tablet:mt-10 tablet:text-xl">
            Meaning
          </p>
          <ul className="mb-6 flex list-inside list-disc flex-col gap-3 tablet:mb-10 tablet:text-xl">
            {meaning.definitions.map((def, index) => (
              <li key={index} className="flex">
                <span className="mr-5 w-[0.313rem] text-purple">•</span>
                <div className="flex-1">
                  <p className="text-base leading-6 tablet:text-lg dark:text-white">
                    {def.definition}
                  </p>
                  {def.example && (
                    <p className="mt-2 text-base leading-6 text-grey-500 tablet:text-lg">
                      "{def.example}"
                    </p>
                  )}
                </div>
              </li>
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
