import React from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';

export const BlogHubPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <main>
      <SEOHead
        title="Educational Blog & Parent Guides | Study Insights | VLearnPro"
        description="Read expert educational insights, board exam revision strategies, IB vs IGCSE comparisons, and learning tips for parents. Explore our latest guides today."
        primaryKeyword="Online Education Guides"
        canonicalUrl="https://vlearnproeducation.com/blog"
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Guides & Insights' }]} />

          <div style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
            <span className="section-eyebrow">
              PARENT STRATEGY & CURRICULUM GUIDES
            </span>
            <h1 style={{ marginBottom: '1rem' }}>
              Educational Insights & Exam Strategy
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Authored by senior international curriculum heads, university admissions advisers, and exam evaluators to help parents make informed academic choices.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="card-glass"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
                onClick={() => navigateTo({ type: 'blog-post', slug: post.slug })}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span className="badge badge-indigo">
                      {post.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-heading-secondary)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {post.title}
                  </h2>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                    {post.tags.map((t, i) => (
                      <span key={i} style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem', background: 'var(--brand-primary-light)', borderRadius: 'var(--radius-xs)', color: 'var(--color-link)' }}>
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      By {post.author.name} • {post.publishDate}
                    </div>
                    <span style={{ color: 'var(--color-link)', fontSize: '0.85rem', fontWeight: 600 }}>
                      Read Guide →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustBadgeBar />
    </main>
  );
};
