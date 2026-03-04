export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#1f2937,#020617_55%,#000000)] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-16 pt-10 md:px-10 md:pt-14">
        {/* Top navigation */}
        <header className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 shadow-[0_0_40px_rgba(56,189,248,0.45)]">
              <span className="text-sm font-semibold tracking-tight text-sky-300">
                AS
              </span>
            </div>
            <div className="hidden text-xs text-slate-400 md:block">
              <div className="font-medium text-slate-200">
                Abhishek Sagu
              </div>
              <div>Blockchain Engineer · Co-Founder, Axir Wallet</div>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-xs md:text-sm">
            <a href="#about" className="text-slate-300 hover:text-sky-300">
              About
            </a>
            <a href="#career" className="text-slate-300 hover:text-sky-300">
              Career
            </a>
            <a href="#projects" className="text-slate-300 hover:text-sky-300">
              Projects
            </a>
            <a href="#contact" className="text-slate-300 hover:text-sky-300">
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-sagu"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-sky-400/60 bg-sky-500/10 px-4 py-2 text-xs font-medium text-sky-200 shadow-[0_0_35px_rgba(56,189,248,0.45)] backdrop-blur md:inline-flex"
            >
              View LinkedIn profile
            </a>
          </nav>
        </header>

        {/* Hero: enterprise meets edgy */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200 shadow-[0_0_22px_rgba(56,189,248,0.55)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Open to frontier blockchain roles
            </p>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Designing defi-native
                <span className="block bg-linear-to-r from-sky-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                  experiences across chains.
                </span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                I&apos;m Abhishek, a fullstack blockchain engineer and Co-Founder
                at Axir Wallet. Since 2019 I&apos;ve shipped exchanges, multisig
                wallets, token farms, and on-chain tooling across Bitcoin,
                Ethereum, Digibyte, Stellar, and DeFi protocols.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#career"
                className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_45px_rgba(56,189,248,0.7)] transition hover:bg-sky-400"
              >
                View career story
              </a>
              <a
                href="https://github.com/shisukeUrahara"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-emerald-400/60 bg-emerald-500/5 px-5 py-2.5 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/10"
              >
                Explore GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-sagu"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-400 underline decoration-sky-500/60 decoration-dotted underline-offset-4 hover:text-sky-300"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                Currently exploring: governance tokens, Compound, yield farming.
              </span>
            </div>
          </div>

          {/* Highlight orbit / card stack */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[conic-gradient(from_160deg_at_10%_0%,rgba(56,189,248,0.32),transparent_45%,rgba(52,211,153,0.32),transparent_75%,rgba(59,130,246,0.5))] opacity-70 blur-3xl" />

            <div className="relative grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_0_60px_rgba(15,23,42,0.9)] backdrop-blur-lg sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Proof of work
                </h2>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-medium text-slate-400">
                  Blockchain · DeFi · Wallets
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <HighlightCard
                  label="Shipped dApps"
                  value="7+"
                  detail="Multisig wallets, exchanges, token farms, onramps."
                />
                <HighlightCard
                  label="ERC20 performance"
                  value="5x"
                  detail="Generic wallet APIs slashed dev time to 20%."
                />
                <HighlightCard
                  label="Recognition"
                  value="#1"
                  detail="Employee of the quarter at Oodles (2019)."
                />
                <HighlightCard
                  label="Stacks"
                  value="React · Solidity · Web3"
                  detail="Plus Node.js, SQL/NoSQL, full node ops."
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              About
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I was introduced to blockchain in 2019 and never really looked
              back. From launching Bitcoin, Ethereum, and Stellar nodes to
              shipping production-grade exchanges and DeFi farms, I enjoy
              working at the layer where protocol constraints meet product
              design. I have led POCs that turned into long-term client
              engagements and mentor teams on building resilient on-chain
              systems.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              My experience spans on-chain smart contracts, API design, and
              frontends in React—plus SQL/NoSQL design and performance tuning.
              I gravitate toward pragmatic architecture that feels delightful
              to end users and maintainable to engineers.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 text-xs text-slate-200 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Snapshot
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between gap-4">
                <span className="text-slate-400">Location</span>
                <span>Dubai · New Delhi · Remote</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-slate-400">Role</span>
                <span>Co-Founder, Axir Wallet</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-slate-400">Experience</span>
                <span>6+ years in blockchain</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-slate-400">Education</span>
                <span>BE, NSIT (ECE)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Career timeline */}
        <section id="career" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Career & Impact
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                A journey from early blockchain R&amp;D to co-founding a wallet
                product.
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <ol className="relative space-y-7 border-l border-slate-800/80 pl-6">
              <TimelineItem
                company="Axir Wallet · AXIR Group"
                role="Co-Founder · Blockchain Developer"
                period="Mar 2023 — Present"
                location="Dubai, United Arab Emirates"
                tags={["Wallet UX", "DeFi", "Smart contracts"]}
                highlights={[
                  "Designing and shipping Axir Wallet, a defi-native experience across multiple chains.",
                  "Leading architecture across smart contracts, APIs, and frontend for wallet and supporting tools.",
                ]}
              />
              <TimelineItem
                company="ENOCH"
                role="Blockchain Developer"
                period="Jul 2022 — Jan 2023"
                location="London, United Kingdom"
                tags={["Ethereum", "Node.js", "React"]}
                highlights={[
                  "Built blockchain features for London-based clients, focusing on DeFi and wallet flows.",
                ]}
              />
              <TimelineItem
                company="Antier Solutions"
                role="Fullstack Blockchain Developer"
                period="Feb 2021 — Jun 2022"
                location="Punjab, India"
                tags={["Solidity", "React", "Web3.js"]}
                highlights={[
                  "Prototyped and shipped production dApps for global clients.",
                  "Owned end-to-end flows from smart contracts and unit tests to React frontends.",
                ]}
              />
              <TimelineItem
                company="Self-employed"
                role="Fullstack Blockchain Developer"
                period="Oct 2020 — Feb 2021"
                location="Delhi, India"
                tags={["DeFi", "Prototyping"]}
                highlights={[
                  "Built independent blockchain POCs, extending on prior exchange and DeFi work.",
                ]}
              />
              <TimelineItem
                company="Oodles Technologies"
                role="Blockchain Developer"
                period="Jun 2019 — Sep 2020"
                location="Haryana, India"
                tags={["Bitcoin", "Ethereum", "Stellar", "Node ops"]}
                highlights={[
                  "Launched and operated Bitcoin, Ethereum, and Stellar nodes for wallet and exchange products.",
                  "Implemented Bitcoin wallet application via BTC core RPC and REST APIs.",
                  "Created generic ERC20 wallet APIs that cut development time to 20% and improved performance 5x.",
                  "Recognized as Employee #1 of the quarter (Oct–Dec 2019).",
                ]}
              />
            </ol>

            <aside className="space-y-4 rounded-2xl border border-sky-500/30 bg-slate-950/70 p-5 shadow-[0_0_55px_rgba(56,189,248,0.35)] backdrop-blur">
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                Proof of Work
              </h3>
              <div className="grid gap-3 text-xs">
                <StatPill label="Capstone dApps" value="+4" detail="Multisig wallet, ERC20 exchange, Eth-swap, token farm." />
                <StatPill label="Blockchains" value="4+" detail="Bitcoin, Ethereum, Digibyte, Stellar." />
                <StatPill label="Runtime expertise" value="Nodes & APIs" detail="Full node ops, RESTful API design, websockets." />
              </div>
            </aside>
          </div>
        </section>

        {/* Projects & future portfolio */}
        <section id="projects" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Projects & Future Work
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                A sample of shipped dApps and upcoming work. Case studies
                coming soon.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Multisig Wallet"
              description="On-chain multisig wallet with secure approvals and rich React frontend."
              stack={["Solidity", "React", "Web3.js"]}
            />
            <ProjectCard
              title="ERC20 Exchange"
              description="Decentralized ERC20 token exchange with generic APIs for multiple tokens."
              stack={["Solidity", "Truffle", "Node.js", "Web3.js"]}
            />
            <ProjectCard
              title="Eth-swap"
              description="Simple ETH-to-token swap experience backed by Solidity and React."
              stack={["Solidity", "Chai/Mocha", "React"]}
            />
            <ProjectCard
              title="Eth Token Farm"
              description="Staking mock DAI to earn DApp tokens, with full testing and UI."
              stack={["Solidity", "Web3.js", "React"]}
            />
            <ProjectCard
              title="Bitcoin Wallet APIs"
              description="RESTful Bitcoin wallet built on BTC core RPC with 25% perf gains."
              stack={["Bitcoin Core", "Node.js", "REST"]}
            />
            <ProjectCard
              title="Stellar Exchange"
              description="Stellar-based exchange with real-time dashboards powered by websockets."
              stack={["Stellar SDK", "Node.js", "WebSockets"]}
            />
          </div>

          <div className="mt-4 grid gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Future Portfolio
              </h3>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                I&apos;m actively iterating on Axir Wallet and new protocol
                experiments. Expect deep-dive writeups on DeFi flows, security
                architecture, and performance work.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-slate-300">
                Coming soon: Axir Wallet case study
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-slate-300">
                DeFi protocol experiments
              </span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-4 flex flex-col items-start justify-between gap-4 border-t border-slate-800/80 pt-6 text-sm text-slate-300 md:flex-row md:items-center"
        >
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
              Contact
            </h2>
            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              Best reached via email or LinkedIn. Always happy to discuss
              wallets, DeFi, or new protocol ideas.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <a
              href="mailto:abhisheksagu@gmail.com"
              className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-900 shadow-sm hover:bg-white"
            >
              abhisheksagu@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-sagu"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sky-400/60 bg-sky-500/10 px-4 py-2 font-medium text-sky-200 hover:bg-sky-500/15"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/shisukeUrahara"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600/80 px-4 py-2 text-slate-200 hover:border-slate-400"
            >
              GitHub · shisukeUrahara
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

type TimelineItemProps = {
  company: string;
  role: string;
  period: string;
  location: string;
  tags: string[];
  highlights: string[];
};

function TimelineItem({
  company,
  role,
  period,
  location,
  tags,
  highlights,
}: TimelineItemProps) {
  return (
    <li className="relative pl-5">
      <span className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full border border-sky-400 bg-slate-950 shadow-[0_0_18px_rgba(56,189,248,0.8)]" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-100">{company}</h3>
        <span className="text-[11px] text-slate-400">{period}</span>
      </div>
      <p className="mt-0.5 text-xs text-slate-400">
        {role} · {location}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-slate-300">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-900/70 px-2 py-0.5 text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
        {highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
};

function ProjectCard({ title, description, stack }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 text-xs text-slate-200 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-px rounded-2xl bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.28),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(52,211,153,0.18),transparent_55%)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative space-y-2">
        <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
        <p className="text-xs text-slate-300">{description}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

type HighlightCardProps = {
  label: string;
  value: string;
  detail: string;
};

function HighlightCard({ label, value, detail }: HighlightCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-xs text-slate-200 shadow-[0_0_35px_rgba(15,23,42,0.9)]">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] text-slate-400">{label}</span>
        <span className="text-xs font-semibold text-sky-300">{value}</span>
      </div>
      <p className="mt-1.5 text-[11px] text-slate-300">{detail}</p>
    </div>
  );
}

type StatPillProps = {
  label: string;
  value: string;
  detail: string;
};

function StatPill({ label, value, detail }: StatPillProps) {
  return (
    <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 px-4 py-3 text-xs text-sky-50">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] uppercase tracking-[0.16em] text-sky-200/80">
          {label}
        </span>
        <span className="text-sm font-semibold">{value}</span>
      </div>
      <p className="mt-1.5 text-[11px] text-sky-100/90">{detail}</p>
    </div>
  );
}
