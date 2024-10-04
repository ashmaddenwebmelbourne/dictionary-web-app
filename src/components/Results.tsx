import SearchWord from './SearchWord';
import Definition from './Definition';
import Source from './Source';
import NotFound from './NotFound';

type ResultsProps = {
	definition: {
		license: object;
		meanings: object[];
		phonetics: object[];
		sourceUrls: string[];
		word: string;
	} | null;
};

const Results = ({ definition }: ResultsProps) => {
	return (
		<>
			<SearchWord />
			<Definition />
			<Source />
			<NotFound />
			{/* Delete this -- just for testing */}
			<p className='mt-16'>Word: {definition?.word}</p>
			<strong>Defitions</strong>
			{definition?.meanings.map((meaning) => {
				return (
					<>
						<p>{meaning.partOfSpeech}</p>
					</>
				);
			})}
		</>
	);
};

export default Results;
