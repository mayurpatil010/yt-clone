const filters = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Sports",
  "Movies",
  "Live",
  "Learning",
  "Fashion",
  "Beauty",
  "Comedy",
  "Entertainment",
  "Tech",
  "Travel",
  "Food",
  "Health",
  "Science",
  "Documentary",
  "Kids",
  "Animals",
  "Art",
  "Lifestyle",
  "Vlogs",
  "Reviews",
  "Tutorials",
  "How-to",
  "Podcasts",
  "ASMR",
  "Fitness",
  "Motivation",
  "Dance",
  "Photography",
];

export const Filters = () => {
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
