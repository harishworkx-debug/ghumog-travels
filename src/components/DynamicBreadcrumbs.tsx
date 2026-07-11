import { Link } from '../lib/router';
import { ChevronRight, Home } from 'lucide-react';

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

export function DynamicBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-forest-600 mb-6 overflow-x-auto whitespace-nowrap pb-2">
      <Link to="/" className="hover:text-gold-600 flex items-center gap-1 transition-colors">
        <Home size={14} /> Home
      </Link>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-2">
          <ChevronRight size={14} className="text-forest-400" />
          {item.to ? (
            <Link to={item.to} className="hover:text-gold-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-forest-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
