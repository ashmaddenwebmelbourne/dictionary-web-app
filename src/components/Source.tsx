import newWindowIcon from "../assets/images/icon-new-window.svg";

type SourceProps = {
  sources: string[];
};

const Source = ({ sources }: SourceProps) => (
  <div className="flex flex-wrap items-center gap-5 border-t border-grey-400 pt-6 dark:border-grey-600">
    <p className="text-sm text-grey-500 underline">
      Source{sources.length > 1 ? "s" : ""}:
    </p>
    <ul>
      {sources.map((source, index) => (
        <li className="flex items-center gap-2" key={index}>
          <a
            className="text-sm text-grey-700 underline dark:text-white"
            href={source}
            target="_blank"
            rel="noopener noreferrer"
          >
            {source}
          </a>
          <img src={newWindowIcon} alt="Open link in new window" />
        </li>
      ))}
    </ul>
  </div>
);

export default Source;
