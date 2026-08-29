import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useApp, NavigationPath } from '../../context/AppContext';

export interface BreadcrumbItem {
  label: string;
  path?: NavigationPath;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigateTo } = useApp();

  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
      <ol style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }}>
        <li style={{ display: 'inline-flex', alignItems: 'center' }}>
          <button
            onClick={() => navigateTo({ type: 'home' })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
            aria-label="Home"
          >
            <Home size={14} />
            <span>Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <ChevronRight size={12} style={{ color: 'var(--text-muted)' }} />
              {isLast || !item.path ? (
                <span style={{ color: '#818CF8', fontWeight: 600 }} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.path && navigateTo(item.path)}
                  style={{
                    color: 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
