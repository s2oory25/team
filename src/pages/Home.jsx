import { useState } from "react";

function Home() {
  const videos = [
    `${import.meta.env.BASE_URL}videos/main-video-01.mp4`,
    `${import.meta.env.BASE_URL}videos/main-video-02.mp4`,
    `${import.meta.env.BASE_URL}videos/main-video-03.mp4`,
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <main className="home">
      <video
        className="main-video"
        key={currentVideo}
        src={videos[currentVideo]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />
    </main>
  );
}

export default Home;