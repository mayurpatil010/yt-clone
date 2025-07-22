import { useNavigate } from "react-router-dom";

export const Video = ({ id, channelName, title, url, views }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full flex flex-col gap-2 overflow-hidden cursor-pointer"
      onClick={() => navigate(`/watch?v=${id}`)}
    >
      <img
        className="w-full h-58 object-cover rounded-xl"
        src={url}
        alt="video thumbnail"
      />
      <p className="font-semibold">{title}</p>
      <div className="text-sm text-gray-500">
        <p>{channelName}</p>
        <p>{views} views</p>
      </div>
    </div>
  );
};
