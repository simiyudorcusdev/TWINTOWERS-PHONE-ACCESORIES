 export default function Testimonials() {
  const testimonials = [
     {
      id: 1,
      name: "Alex M.",
      role: "Content Creator",
      quote:
        "TwinTowers helped me upgrade my setup with the best gear at amazing prices. My workflow has never been smoother!",
      img: "https://images.unsplash.com/photo-1614289371518-722f2615943d?auto=format&fit=crop&w=400&q=80", // Samantha's old image
    },
    {
      id: 2,
      name: "Samantha K.",
      role: "Gamer & Streamer",
      quote:
        "I love how fast their delivery is! The products are authentic, and the team is super responsive. TwinTowers is my go-to tech store.",
      img: "https://images.unsplash.com/photo-1628501939038-2fbce30e11d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWdlJTIwb2YlMjBhJTIwZ2FtZXIlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      id: 3,
      name: "James O.",
      role: "Tech Reviewer",
      quote:
        "As a reviewer, I’m picky about quality — but TwinTowers delivers top-notch devices every time. Highly recommended!",
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="py-24 bg-neutral-light" id="testimonials">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
          What Our <span className="text-primary">Customers</span> Say
        </h2>
        <p className="text-neutral-dark/70 max-w-2xl mx-auto mb-12">
          Trusted by creators, gamers, and tech lovers across Kenya and beyond.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-neutral-dark/80 italic mb-4">
                  “{t.quote}”
                </p>
                <h4 className="font-semibold text-neutral-dark">{t.name}</h4>
                <span className="text-sm text-neutral-dark/60">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
