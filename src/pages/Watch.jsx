export function Watch() {
  const searchParams = new URLSearchParams(window.location.search);
  const videoId = searchParams.get("v");

  return (
    <div className="video-container">
      <iframe
        width="900"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
