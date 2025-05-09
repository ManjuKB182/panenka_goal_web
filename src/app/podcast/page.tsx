export default function Podcast() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-sky-600">Podcast</h1>
      <p className="text-xl font-semibold text-sky-700 mb-8">Tune in to our exclusive football podcasts – enjoy the playlist and explore more episodes!</p>
      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-white flex justify-center">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/videoseries?list=PLEHFPqueXIIrSwG3zFx7j3dbB7-l5_ep_"
          title="YouTube Podcast Playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="bg-white"
        ></iframe>
      </div>
    </div>
  );
} 