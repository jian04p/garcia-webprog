import Button from '../../components/Button';
import articles from '../../assets/article-content.js';

const metrics = [
  {
    value: '05',
    label: 'Featured perfumes',
    note: 'A starter lineup of designer bottles that are easy to compare.',
  },
  {
    value: '03',
    label: 'Browsing angles',
    note: 'Each writeup looks at notes, mood, and best occasion.',
  },
  {
    value: 'PH',
    label: 'Local voice',
    note: 'FragPH keeps the tone casual, clear, and mabango-first.',
  },
  {
    value: '24/7',
    label: 'Style inspo',
    note: 'The site makes perfume browsing feel simple, polished, and fun.',
  },
];

const services = [
  {
    title: 'Perfume spotlights',
    description:
      'Each featured bottle gets its own article with scent notes, mood, and a short explanation that is easy for beginners to understand.',
  },
  {
    title: 'Wearable recommendations',
    description:
      'FragPH focuses on where a fragrance fits best, from daytime campus wear to night outs and date-ready picks.',
  },
  {
    title: 'Simple fragrance language',
    description:
      'The goal is to explain perfume in a way that feels stylish without sounding too technical or intimidating.',
  },
];

const principles = [
  'A good perfume writeup should help readers imagine the scent before they buy or sample.',
  'The best beginner blogs make fragrance feel approachable, not overly complicated.',
  'Visual polish matters, but the bottle, mood, and story should stay the focus.',
];

const HomePage = () => {
  const featuredPerfume = articles[0];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[34px] border border-[#3b3025] bg-[#15171a]/92 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
              Home / Perfume Blog
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-none tracking-[-0.05em] text-[#f3ecdf] sm:text-5xl lg:text-6xl">
              FragPH is a perfume blog for people who want to stay mabango.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#c4b6a6] sm:text-lg">
              FragPH highlights designer fragrances in a clean and easy-to-browse layout. The site
              focuses on scent family, mood, and occasion so readers can quickly understand what a
              perfume feels like before diving into the full article.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button to="/about" variant="primary">
              About FragPH
            </Button>
            <Button to="/articles">Browse Articles</Button>
          </div>

          <div className="rounded-[28px] border border-[#3b3025] bg-white/[0.03] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b59663]">
              Featured pick
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#c4b6a6]">
              {featuredPerfume.title} leads the homepage because it matches the polished vibe of
              FragPH: premium-looking bottle, easy designer appeal, and a scent profile that feels
              modern right away.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={featuredPerfume.image}
            alt={featuredPerfume.imageAlt}
            className="w-full rounded-[30px] border border-[#3b3025] bg-white object-contain p-6"
          />
        </div>
      </section>

      <section className="rounded-[34px] border border-[#3b3025] bg-[#121417]/88 p-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
              FragPH Snapshot
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f3ecdf]">
              A clean perfume blog can still feel rich in content
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#c4b6a6]">
            FragPH keeps the structure clean while making the content perfume-focused and easy to browse.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-[28px] border border-[#3b3025] bg-white/[0.03] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
            >
              <p className="text-3xl font-semibold tracking-[-0.05em] text-[#f3ecdf]">{metric.value}</p>
              <h3 className="mt-3 text-lg font-semibold text-[#f3ecdf]">{metric.label}</h3>
              <p className="mt-2 text-sm leading-6 text-[#c4b6a6]">{metric.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[34px] border border-[#3b3025] bg-[#15171a]/88 p-6 lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
            What FragPH Covers
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f3ecdf]">
            Three ways the blog keeps fragrance browsing simple
          </h2>

          <div className="mt-6 grid gap-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[28px] border border-[#3b3025] bg-white/[0.03] p-5"
              >
                <h3 className="text-xl font-semibold text-[#f3ecdf]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#c4b6a6]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-[34px] border border-[#3b3025] bg-[linear-gradient(180deg,#181311_0%,#101213_100%)] p-6 text-[#f3ecdf] lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
            FragPH Mood
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f3ecdf]">
            Perfume content should feel stylish, helpful, and easy to scan.
          </h2>
          <div className="mt-6 space-y-4">
            {principles.map((principle) => (
              <div key={principle} className="rounded-[24px] border border-[#3b3025] bg-white/[0.04] p-4">
                <p className="text-sm leading-6 text-[#d8cab7]">{principle}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default HomePage;





