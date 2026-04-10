import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid w-full gap-8 rounded-[34px] border border-[#3b3025] bg-[#15171a]/92 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
        <div className="flex flex-col justify-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#b59663]">
            404 / Broken Bottle
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-none tracking-[-0.05em] text-[#f3ecdf] sm:text-5xl">
            Oops, that bottle slipped.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#c4b6a6] sm:text-lg">
            The page you were trying to open is not here anymore. Think of it as a missing scent
            trail, not a dead end. You can head back home or jump straight into the featured
            perfume articles.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/" variant="primary">
              Back Home
            </Button>
            <Button to="/articles">Browse Articles</Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/16239693/pexels-photo-16239693.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Broken perfume bottle with spilled fragrance"
            className="w-full rounded-[30px] border border-[#3b3025] object-cover shadow-[0_18px_45px_rgba(0,0,0,0.24)]"
          />
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;

