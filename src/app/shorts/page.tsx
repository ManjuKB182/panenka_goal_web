const shorts = [
  "QLzKYUXsMF0",
  "xcTGNvAuu0s",
  "RguTnEUEBGM",
  "cTDwPp5LBQo"
];

export default function Shorts() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-sky-600">Shorts</h1>
      <p className="text-xl font-semibold text-sky-700 mb-8 text-center">Quick bites of Indian football action – enjoy our latest Shorts!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {shorts.map((id) => (
          <div key={id} className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow-lg bg-white">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube Shorts player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="bg-white"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
} 