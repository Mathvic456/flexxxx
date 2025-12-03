"use client"

export default function BiographySection() {
  return (
    <section id="biography" className="w-full py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
              <img src="/flex.png" alt="FlexyB Portrait" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-2xl" />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">About FlexyB</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Born on 11, 1999, FlexyB's passion for music was ignited by listening to music stars like Usher, Chris
                Brown, and 2face. His drive to become a recording and performing artist was sparked by legends like
                Davido. With a hip-hop base and an Afrobeat twist, FlexyB started writing his own rhymes in 2019. After
                years of honing his craft, he debuted with his brother MilliGBP in August 2025 with the track "Plan B,"
                which achieved over 100,000 streams across all DSPs as his very first music release. This remarkable
                debut earned him the honor of being the Opening Artist for the first-ever Davido Nigerian Tour—a feat
                that continues to inspire his career goal of becoming one of the frontline artists in the country.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">100K+ Streams</h3>
                  <p className="text-foreground/70">First release "Plan B" achieved platinum status</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Davido Tour Opener</h3>
                  <p className="text-foreground/70">Opening Artist for first-ever Davido Nigerian Tour</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Unique Sound</h3>
                  <p className="text-foreground/70">Hip-hop foundation with authentic Afrobeat twist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
