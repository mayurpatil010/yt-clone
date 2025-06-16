const Video = ({ channelName, title, url, views }) => {
  return (
    <div className="w-full flex flex-col gap-2 overflow-hidden">
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

export default Video;
