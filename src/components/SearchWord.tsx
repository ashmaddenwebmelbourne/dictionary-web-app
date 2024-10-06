import playButton from "../assets/images/icon-play.svg";

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

  const playAudio = () => {
    const audioElement = document.getElementById(
      "pronunciationAudio",
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play();
    }
  };

  return (
    word && (
      <div className="mt-7 flex items-center justify-between tablet:mt-[2.688rem] desktop:mt-[2.813rem]">
        <div className="flex flex-col">
          <h1 className="text-[2rem] font-bold tablet:text-[4rem] dark:text-white">
            {word}
          </h1>
          <p className="text-lg text-purple tablet:text-2xl">{phoneticText}</p>
        </div>
        {audioSrc && (
          <div
            className="bg-[#E8D1FB flex h-12 w-12 cursor-pointer items-center justify-center rounded-full tablet:h-[4.688rem] tablet:w-[4.688rem]"
            onClick={playAudio}
          >
            <img src={playButton} alt="Play pronunciation" />
            <audio id="pronunciationAudio" src={audioSrc} />
          </div>
        )}
      </div>
    )
  );
};

export default SearchWord;
