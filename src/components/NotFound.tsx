const NotFound = () => {
  return (
    <div className="mt-[4rem] flex flex-col items-center gap-6 tablet:mt-[8rem]">
      <p className="text-center text-[4rem]">😕</p>
      <h1 className="text-center text-base font-bold tablet:text-[1.25rem] dark:text-white">
        No Definitions Found
      </h1>
      <p className="text-center text-base leading-6 text-grey-500 tablet:text-lg">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default NotFound;
