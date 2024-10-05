type SourceProps = {
  sources: string[];
};

const Source = ({ sources }: SourceProps) => (
  <div>
    <p>Source{sources.length > 1 ? "s" : ""}:</p>
    <ul>
      {sources.map((source, index) => (
        <li key={index}>
          <a href={source} target="_blank" rel="noopener noreferrer">
            {source}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Source;
