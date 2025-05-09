import Image from "next/image";

const videos = [
  "Y_YlbU6iaqs",
  "OmLhsnm2BI8",
  "_hQbHgUXA1w",
  "zNMpNGMWoeU",
  "1I-SrXyKPp8",
  "uh5QxplalIo"
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex items-center gap-4 mb-8">
        <Image src="/logo.png" alt="Panenka Logo" width={60} height={60} className="rounded-full" />
        <h1 className="text-3xl font-bold text-sky-600">Panenka Goal</h1>
      </div>
      <p className="text-xl font-semibold text-sky-700 mb-8 text-center">Dive into the best of Indian football: Highlights, stories, and moments from Karnataka's vibrant football scene!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videos.map((id) => (
          <div key={id} className="aspect-video w-full rounded-lg overflow-hidden shadow-lg bg-white">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
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
