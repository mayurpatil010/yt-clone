const Filters = ({ filters }) => {
  return (
    <div className="sticky top-0 flex gap-4 overflow-x-auto no-scrollbar p-4 bg-white">
      {filters.map((filter) => (
        <button
          key={filter}
          className="bg-gray-200 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-300 flex-shrink-0 whitespace-nowrap"
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
