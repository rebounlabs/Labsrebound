import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock3 } from 'lucide-react';

const featuredPost = {
  title: 'How We Reduced LCP By 43% In A Real Estate Marketplace',
  excerpt:
    'A practical breakdown of our performance audit, image pipeline updates, and rendering strategy that pushed Core Web Vitals into the green.',
  category: 'Performance',
  readTime: '7 min read',
  date: 'March 20, 2026',
  image:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1974&auto=format&fit=crop',
};

const posts = [
  {
    title: 'Design-To-Code: Shipping Pixel-Perfect UI Without Slowing Velocity',
    excerpt:
      'Our system for converting Figma decisions into reusable components while keeping handoff friction low.',
    category: 'UI Engineering',
    readTime: '5 min read',
    date: 'March 12, 2026',
  },
  {
    title: 'Scaling Next.js For Content-Heavy Platforms',
    excerpt:
      'When ISR is not enough: routing strategy, cache boundaries, and API budget management for large catalogs.',
    category: 'Architecture',
    readTime: '8 min read',
    date: 'March 2, 2026',
  },
  {
    title: 'What We Audit In The First Week Of A New Project',
    excerpt:
      'A compact checklist covering performance baselines, analytics health, SEO blockers, and accessibility debt.',
    category: 'Process',
    readTime: '4 min read',
    date: 'February 22, 2026',
  },
  {
    title: 'Animation Without Bloat: Framer Motion Patterns We Reuse',
    excerpt:
      'Small motion systems that improve clarity and polish while maintaining excellent runtime performance.',
    category: 'Frontend',
    readTime: '6 min read',
    date: 'February 14, 2026',
  },
  {
    title: 'API Contracts That Keep Frontend and Backend In Sync',
    excerpt:
      'How we use schemas and typed clients to prevent regressions and ship with confidence across teams.',
    category: 'Backend',
    readTime: '6 min read',
    date: 'January 31, 2026',
  },
  {
    title: 'SEO Playbook For Fast-Moving Product Teams',
    excerpt:
      'The minimum viable SEO setup that works: indexation hygiene, metadata strategy, and monitoring.',
    category: 'Growth',
    readTime: '5 min read',
    date: 'January 18, 2026',
  },
];

const categories = ['All', 'Performance', 'Architecture', 'UI Engineering', 'Process', 'Growth'];
const mobilePosts = posts.slice(0, 4);

const Blogs = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-bg-dark overflow-hidden">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-growaz-orange/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-growaz-orange mb-6">
            Rebound Journal
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight leading-[1.08] mb-6">
            Insights, playbooks, and engineering notes.
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Practical writing from the Rebound team on performance, architecture, delivery process, and product
            execution.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 p-5 md:p-10 bg-white/[0.02] border border-white/10 rounded-3xl mb-12 md:mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden min-h-[260px]">
            <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-growaz-orange mb-4">{featuredPost.category}</span>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white leading-tight mb-5">
              {featuredPost.title}
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">{featuredPost.excerpt}</p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-400 mb-8">
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} />
                {featuredPost.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={16} />
                {featuredPost.readTime}
              </span>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-black bg-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-growaz-orange hover:to-growaz-yellow transition-colors w-fit"
            >
              Read Featured Story
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.article>

        <div className="mb-8 md:mb-10 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-3 min-w-max md:min-w-0 md:flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="px-4 py-2 rounded-full text-sm border border-white/15 text-zinc-400 hover:text-white hover:border-growaz-orange/50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden mb-10">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-mono uppercase tracking-[0.14em] text-zinc-400">Latest Articles</p>
            <span className="text-xs text-growaz-orange">Top picks</span>
          </div>
          <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 snap-x snap-mandatory">
              {mobilePosts.map((post) => (
                <article
                  key={post.title}
                  className="min-w-[82%] snap-start p-5 rounded-2xl border border-white/10 bg-white/[0.02]"
                >
                  <span className="text-xs font-mono uppercase tracking-[0.14em] text-growaz-orange">{post.category}</span>
                  <h3 className="text-xl font-heading font-bold text-white leading-snug mt-3 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <p className="text-xs text-zinc-400 mt-3">Swipe to browse more posts.</p>
        </div>

        <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <span className="text-xs font-mono uppercase tracking-[0.14em] text-growaz-orange">{post.category}</span>
              <h3 className="text-xl font-heading font-bold text-white leading-snug mt-4 mb-4 group-hover:text-growaz-orange transition-colors">
                {post.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
