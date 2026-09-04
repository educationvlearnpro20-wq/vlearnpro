import React from 'react';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { useApp } from '../context/AppContext';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { TrustBadgeBar } from '../components/common/TrustBadgeBar';

interface BlogPostPageProps {
  slug: string;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const { navigateTo, openTrialModal } = useApp();
  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

  return (
    <main>
      <SEOHead
        title={`${post.title} | VLearnPro`}
        description={post.excerpt}
        canonicalUrl={`https://vlearnproeducation.com/blog/${post.slug}`}
      />

      <section style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container-sm">
          <Breadcrumbs
            items={[
              { label: 'Guides', path: { type: 'blog' } },
              { label: post.category }
            ]}
          />

          <article>
            <div style={{ marginBottom: '2rem' }}>
              <span className="badge badge-indigo" style={{ marginBottom: '0.75rem' }}>
                {post.category} • {post.readTime}
              </span>

              <h1 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', lineHeight: 1.25, marginBottom: '1rem' }}>
                {post.title}
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <span>By <strong style={{ color: 'var(--text-heading-secondary)' }}>{post.author.name}</strong> ({post.author.role})</span>
                <span>•</span>
                <span>Published {post.publishDate}</span>
              </div>
            </div>

            {/* Article Content Container */}
            <div style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'var(--text-primary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {post.content.map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h2 key={idx} style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-heading-secondary)', marginTop: '1rem', marginBottom: '0.25rem' }}>
                      {paragraph.replace('### ', '')}
                    </h2>
                  );
                }
                return (
                  <p key={idx} style={{ color: 'var(--text-primary)', fontSize: '1.025rem' }}>
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Lead Magnet CTA inside Article */}
            <div style={{
              padding: '2rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-heading-primary)', marginBottom: '0.5rem' }}>
                Get Expert 1-on-1 Guidance for Your Child
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Book a complimentary 45-minute diagnostic session with our senior department examiners.
              </p>
              <button
                type="button"
                onClick={() => openTrialModal()}
                className="btn btn-emerald"
                style={{ gap: '0.4rem' }}
              >
                <Sparkles size={16} />
                <span>Book Free Diagnostic Class</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
              <button
                type="button"
                onClick={() => navigateTo({ type: 'blog' })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-link)', cursor: 'pointer', fontSize: '0.875rem' }}
              >
                <ArrowLeft size={16} />
                <span>Back to All Guides</span>
              </button>
            </div>
          </article>
        </div>
      </section>

      <TrustBadgeBar />
    </main>
  );
};
