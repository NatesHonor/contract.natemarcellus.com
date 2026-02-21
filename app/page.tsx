import Image from "next/image";
import HireModal from "./components/HireModal"

async function getRepos() {
  const res = await fetch("https://api.github.com/users/NatesHonor/repos", {
    next: { revalidate: 3600 }
  });

  return res.json();
}

const languageColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3776ab",
  Java: "#b07219",
  C: "#555555",
  "C++": "#00599c",
  CSharp: "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#777bb4",
  Ruby: "#cc342d",
  Swift: "#f05138"
};

const languageIcons: Record<string, string> = {
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  Python: "devicon-python-plain colored",
  Java: "devicon-java-plain colored",
  C: "devicon-c-plain colored",
  "C++": "devicon-cplusplus-plain colored",
  CSharp: "devicon-csharp-plain colored",
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  Shell: "devicon-bash-plain colored",
  Go: "devicon-go-plain colored",
  Rust: "devicon-rust-plain colored",
  PHP: "devicon-php-plain colored",
  Ruby: "devicon-ruby-plain colored",
  Swift: "devicon-swift-plain colored"
};

export default async function HomePage() {
  const repos = await getRepos();
  const sorted = repos
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .slice(0, 8);

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <style>{`
        .scroll-container {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32">
        <h1 className="text-5xl font-bold leading-tight">
          Software Engineering & Technical Support Backed by Upwork Security
        </h1>
        <p className="mt-6 text-lg max-w-2xl text-zinc-300">
          I build reliable automation systems, internal tools, and workflow solutions that reduce manual effort and improve operational efficiency.
          All work is handled through Upwork for protected payments, verified identity, and transparent contracts.
        </p>

        <div className="mt-10 flex gap-6">
          <HireModal />
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-700 rounded-md text-sm font-medium hover:bg-zinc-900 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-4xl font-bold">4+</p>
            <p className="text-sm text-zinc-400 mt-2">Years Technical Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100%</p>
            <p className="text-sm text-zinc-400 mt-2">Job Success</p>
          </div>
          <div>
            <p className="text-4xl font-bold">1000+</p>
            <p className="text-sm text-zinc-400 mt-2">Users Supported</p>
          </div>
        </div>
      </section>

<section className="border-t border-zinc-800 py-24">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-semibold">Verified Upwork Profile</h2>

    <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
        <div className="flex items-center gap-6">
          <Image
          src="https://www.upwork.com/profile-portraits/c1Gcpzxxv5HqumU8AcvSS73_QYrp0OjMYqE_QazT2x35QnK1ezcXJy4EyhR7mxnIaX"
          alt="Nathaniel"
          width={96}
          height={96}
          className="w-24 h-24 rounded-full object-cover border border-zinc-700"
/>
          <div>
            <h3 className="text-xl font-semibold">Nathaniel Marcellus</h3>
            <p className="text-sm text-zinc-400">
              Software Engineer & Technical Support Specialist
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-10 text-center">
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-xs text-zinc-400">Job Success</p>
          </div>

          <div>
            <p className="text-2xl font-bold">5.0 ★</p>
            <p className="text-xs text-zinc-400">Client Rating</p>
          </div>

          <div>
            <p className="text-2xl font-bold">Fully</p>
            <p className="text-xs text-zinc-400">Identity Verified</p>
          </div>
        </div>

        <a
          href="https://www.upwork.com/freelancers/natemarcellus"
          target="_blank"
          className="inline-block mt-8 text-blue-500 hover:underline text-sm"
        >
          View full profile, reviews & work history →
        </a>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Why Clients Choose to Contract Through Upwork</h3>

        <ul className="mt-6 space-y-4 text-sm text-zinc-400">
          <li>✔ Secure milestone-based payments</li>
          <li>✔ Verified identity & contract protection</li>
          <li>✔ Transparent reviews & work history</li>
          <li>✔ Dispute resolution support</li>
        </ul>

        <p className="mt-6 text-sm text-zinc-500 max-w-md">
          All projects are handled exclusively through Upwork to ensure protection,
          clarity, and accountability for both parties.
        </p>
      </div>

    </div>
  </div>
</section>

      <section className="border-t border-zinc-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">How I Work</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div>
              <h3 className="text-xl font-semibold">1. Discover</h3>
              <p className="mt-3 text-zinc-400 text-sm">
                Understand your workflow, identify bottlenecks, and define measurable goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Build</h3>
              <p className="mt-3 text-zinc-400 text-sm">
                Develop clean, maintainable automation or software tailored to your real-world use case.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Deploy & Support</h3>
              <p className="mt-3 text-zinc-400 text-sm">
                Deliver production-ready solutions with documentation and ongoing technical support if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          <div>
            <h2 className="text-3xl font-semibold">Case Study: Workflow Automation</h2>
            <div className="mt-6 space-y-4 text-sm text-zinc-300 max-w-3xl">
              <p><strong>Problem:</strong> Manual data handling processes were consuming 4+ hours daily and increasing error rates.</p>
              <p><strong>Solution:</strong> Built a lightweight Python-based automation system integrated directly into the client’s existing workflow.</p>
              <p><strong>Result:</strong> Reduced repetitive workload by over 70%, eliminated onboarding friction, and improved operational consistency.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Case Study: Structured QA Testing</h2>
            <div className="mt-6 space-y-4 text-sm text-zinc-300 max-w-3xl">
              <p><strong>Problem:</strong> A mobile news application experienced inconsistent onboarding flow and UI performance issues.</p>
              <p><strong>Solution:</strong> Conducted structured QA testing, documented reproducible issues, and delivered actionable reports.</p>
              <p><strong>Result:</strong> Improved onboarding clarity, resolved performance bottlenecks, and enhanced user experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <p className="mt-4 text-sm text-zinc-400">
            Live repositories automatically pulled from GitHub and sorted by popularity.
          </p>

          <div className="mt-10 overflow-hidden no-scrollbar">
            <div className="scroll-container">
              {sorted.concat(sorted).map((repo: any, i: number) => {
                const lang = repo.language;
                const color = languageColors[lang] || "#888";
                const icon = languageIcons[lang];

                return (
                  <a
                    key={repo.id + "-" + i}
                    href={repo.html_url}
                    target="_blank"
                    className="w-80 flex-shrink-0 rounded-lg p-6 transition border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black hover:from-zinc-800 hover:to-zinc-900"
                  >
                    <h3 className="text-xl font-semibold">{repo.name}</h3>
                    <p className="text-sm text-zinc-400 mt-2">
                      {repo.description || "No description provided."}
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <span
                        className="flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-md"
                        style={{ backgroundColor: color + "33", color: color }}
                      >
                        <i className={`${icon} text-lg`}></i>
                        {lang || "Unknown"}
                      </span>

                      <span className="text-xs text-zinc-500">
                        ★ {repo.stargazers_count}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-zinc-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Get In Touch</h2>

          <form className="mt-10 grid gap-6 max-w-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100"
            />
            <textarea
              placeholder="Project Details"
              rows={5}
              className="px-4 py-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}