import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
  homeLabel?: string;
  homeHref?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = '',
  showHome = true,
  homeLabel = 'Home',
  homeHref = '/'
}) => {
  return (
    <nav aria-label="breadcrumb" className={`breadcrumb-nav ${className}`}>
      <div className="container px-5 mx-auto xl:px-0">
        <ol className="breadcrumb mb-0">
          {showHome && (
            <li className="breadcrumb-item">
              <Link href={homeHref} className="text-decoration-none">
                <i className="fas fa-home me-1"></i>
                {homeLabel}
              </Link>
            </li>
          )}
          {items.map((item, index) => (
            <li
              key={index}
              className={`breadcrumb-item ${item.active ? 'active' : ''}`}
              aria-current={item.active ? 'page' : undefined}
            >
              {item.href && !item.active ? (
                <Link href={item.href} className="text-decoration-none">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
