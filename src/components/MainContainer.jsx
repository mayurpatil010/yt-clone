import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import Filters from "./Filters";

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

const MainContainer = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-[calc(100vh-56px)] overflow-y-auto">
        <Filters filters={filters} />
        <div className="p-4">
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
