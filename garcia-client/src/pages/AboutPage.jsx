import Button from '../components/Button';
import articles from '../assets/article-content.js';

const values = [
  {
    title: 'Discover by scent family',
    description:
      'FragPH helps people understand whether a perfume leans fresh, sweet, woody, aquatic, or warm before they even sample it.',
  },
  {
    title: 'Match by mood and occasion',
    description:
      'The blog keeps recommendations practical by connecting fragrances to dates, weekends, hot weather, night outs, and everyday wear.',
  },
  {
    title: 'Keep the language approachable',
    description:
      'Instead of making fragrance feel intimidating, FragPH explains perfumes in a way that is simple, stylish, and easy to remember.',
  },
];

const milestones = [
  {
    year: 'Step 01',
    title: 'Choose recognizable bottles',
    description:
      'The blog starts with five designer fragrances that are familiar, visually distinct, and easy for readers to compare.',
  },
  {
    year: 'Step 02',
    title: 'Write clear descriptions',
    description:
      'Each article explains the scent in plain language so readers can understand the vibe without needing deep perfume knowledge.',
  },
  {
    year: 'Step 03',
    title: 'Build the FragPH identity',
    description:
      'The final touch is a cleaner brand voice, a memorable name, and a polished layout that still fits the class activity structure.',
  },
];

const facts = [
  { label: 'Brand name', value: 'FragPH' },
  { label: 'Tagline', value: 'Stay mabango!' },
  { label: 'Content focus', value: 'Perfume blog and bottle features' },
  { label: 'Best for', value: 'Readers exploring designer scents' },
];

const AboutPage = () => {
  const aboutFeature = articles[2];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[34px] border border-[#3b3025] bg-[#15171a]/92 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div className="flex items-center justify-center">
          <img
            src={aboutFeature.image}
            alt={aboutFeature.imageAlt}
            className="w-full rounded-[30px] border border-[#3b3025] bg-white object-contain p-6"
          />
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
              About / FragPH Identity
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-none tracking-[-0.05em] text-[#f3ecdf] sm:text-5xl">
              FragPH helps people discover perfumes by scent family, mood, and occasion.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#c4b6a6] sm:text-lg">
              This site is designed as a perfume blog that keeps fragrance content beginner-friendly
              and visually polished. Instead of placeholder text, FragPH now explains what the site
              is about, who it helps, and why each featured bottle was selected.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button to="/" variant="primary">
              Back Home
            </Button>
            <Button to="/articles">Read the Articles</Button>
          </div>

          <div className="rounded-[28px] border border-[#3b3025] bg-white/[0.03] p-4">
            <p className="text-sm leading-6 text-[#c4b6a6]">
              The site name is short, memorable, and local, while the tagline keeps the tone light
              and fun: stay mabango.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[34px] border border-[#3b3025] bg-[#121417]/88 p-6 lg:p-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
            FragPH Values
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f3ecdf]">
            Three ideas behind the blog
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[28px] border border-[#3b3025] bg-white/[0.03] p-5"
            >
              <h3 className="text-xl font-semibold text-[#f3ecdf]">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#c4b6a6]">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[34px] border border-[#3b3025] bg-[linear-gradient(180deg,#171210_0%,#101214_100%)] p-6 text-[#f3ecdf] lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
            Build Process
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f3ecdf]">
            How the perfume concept comes together
          </h2>

          <div className="mt-6 space-y-4">
            {milestones.map((milestone) => (
              <article key={milestone.year} className="rounded-[26px] border border-[#3b3025] bg-white/[0.04] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b59663]">
                  {milestone.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#f3ecdf]">{milestone.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d8cab7]">{milestone.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-[34px] border border-[#3b3025] bg-[#15171a]/88 p-6 lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
            Quick Facts
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#f3ecdf]">
            FragPH at a glance
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-[24px] border border-[#3b3025] bg-white/[0.03] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b59663]">
                  {fact.label}
                </p>
                <p className="mt-2 text-base font-semibold text-[#f3ecdf]">{fact.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default AboutPage;

