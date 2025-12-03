"use client"

const featuredSongs = [
  {
    id: 1,
    title: "Davido Five Tour 2025",
    description: "",
    video: "/david.mp4",
    artist: "FlexyB",
    link: ""
  },
  {
    id: 2,
    title: "Trace in the city - Uyo 2025",
    description: "",
    video: "/beach.mp4",
    artist: "FlexyB",
    link: ""
  },
  {
    id: 3,
    title: "The Beach House - Ibeno",
    description: "",
    video: "/ibeno.mp4",
    artist: "FlexyB",
    link: ""
  },
  {
    id: 4,
    title: "Pushing-P",
    description: "Featured on the remix of the hit single showcasing the next generation of Afrobeat",
    image: "/pushingp.png",
    artist: "MilliGBP feat FlexyB",
    link: "https://ffm.to/milligbp-pushing-p"
  }, 
]

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Featured In</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Performances and collaborations featuring FlexyB
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredSongs.map((song) => (
            <article
              key={song.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                {song.video ? (
                  // Video player for items with video property
                  <video
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={song.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  // Image for items without video property
                  <img
                    src={song.image || "/placeholder.svg"}
                    alt={song.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{song.artist}</p>
                <h3 className="text-xl font-bold text-foreground mb-2 text-balance group-hover:text-primary transition-colors">
                  {song.title}
                </h3>
                {/* <p className="text-foreground/70 mb-4 line-clamp-2">{song.description}</p> */}
                <a 
                  href={song.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  Listen Now →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}