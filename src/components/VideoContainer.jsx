import { useState, useEffect, memo } from "react";
import { Video } from "../components";

const MemoizedVideo = memo(Video);

export const VideoContainer = memo(() => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getYoutubeVideos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `${import.meta.env.VITE_YOUTUBE_API_URL}${
            import.meta.env.VITE_YOUTUBE_API_KEY
          }`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        console.log("data", data);

        setVideos(data.items);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };
    getYoutubeVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-lg">Loading videos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-10">
      {videos?.map((video) => (
        <MemoizedVideo
          id={video.id}
          key={video.id}
          channelName={video.snippet.channelTitle}
          title={video.snippet.title}
          url={video.snippet.thumbnails.high.url}
          views={video.statistics.viewCount}
        />
      ))}
    </div>
  );
});
