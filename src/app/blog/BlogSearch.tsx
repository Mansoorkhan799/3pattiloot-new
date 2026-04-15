'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
  category: string;
};

const categoryColors: Record<string, string> = {
  Guide:    'bg-purple-500/15 text-purple-300 border-purple-500/30',
  Beginner: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  Strategy: 'bg-red-500/15 text-red-300 border-red-500/30',
  Earning:  'bg-green-500/15 text-green-300 border-green-500/30',
  Payments: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  Features: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  Account:  'bg-pink-500/15 text-pink-300 border-pink-500/30',
};

export default function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : posts;

  const displayed = filtered.length > 0 ? filtered : posts;
  const featuredPost = displayed.find((p) => p.featured);
  const regularPosts = displayed.filter((p) => !p.featured);

  return (
    <>
      {/* Search bar */}
      <form onSubmit={(e) => e.preventDefault()} className="mb-10 max-w-2xl mx-auto">
        <div className="relative flex items-center">
          <span className="absolute left-4 text-gray-500" aria-hidden="true">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, tips, strategies..."
            className="w-full pl-12 pr-32 py-3.5 bg-secondary border border-gray-700 hover:border-gray-600 focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500]/30 rounded-2xl text-white placeholder-gray-500 outline-none transition-all"
            aria-label="Search blog posts"
          />
          <button
            type="submit"
            className="absolute right-2 bg-[#FFA500] hover:bg-[#f97316] text-primary font-bold px-5 py-2 rounded-xl transition-all text-sm"
          >
            Search
          </button>
        </div>
        {query.trim() && (
          <p className="text-gray-500 text-sm mt-3 text-center">
            {filtered.length > 0
              ? `${filtered.length} result${filtered.length === 1 ? '' : 's'} for "${query}"`
              : `No results for "${query}" — showing all posts`}
          </p>
        )}
      </form>

      {/* Featured post — full-width hero card */}
      {featuredPost && !query.trim() && (
        <div className="mb-10">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="relative rounded-3xl overflow-hidden border border-[#FFA500]/30 hover:border-[#FFA500]/60 transition-all shadow-2xl hover:shadow-[0_0_40px_rgba(255,165,0,0.12)]">
              {/* Image */}
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06091F] via-[#06091F]/60 to-transparent" />
              </div>

              {/* Content overlaid on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFA500] text-primary text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ FEATURED
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[featuredPost.category]}`}>
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#FFA500] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base mb-4 max-w-2xl line-clamp-2">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-4 text-gray-400 text-xs">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {featuredPost.readTime}
                  </span>
                  <span className="text-[#FFA500] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Grid of regular posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-secondary border border-gray-800 hover:border-[#FFA500]/40 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:shadow-[#FFA500]/5 hover:-translate-y-1"
          >
            {/* Card image */}
            <div className="relative h-44 w-full overflow-hidden flex-shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1029]/80 to-transparent" />
              <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[post.category]}`}>
                {post.category}
              </span>
            </div>

            {/* Card content */}
            <div className="flex flex-col flex-1 p-5">
              <h2 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-[#FFA500] transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-800">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>
                <span className="text-[#FFA500] font-semibold flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
                  Read
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No results fallback when searching */}
      {query.trim() && filtered.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No posts found for &quot;{query}&quot;</p>
          <p className="text-gray-600 text-sm mt-1">Try searching for a different keyword</p>
        </div>
      )}
    </>
  );
}
