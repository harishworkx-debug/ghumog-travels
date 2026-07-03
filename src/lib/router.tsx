import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type RouterCtx = { path: string; navigate: (to: string) => void };

const Ctx = createContext<RouterCtx>({ path: '/', navigate: () => {} });

export function RouterProvider({ children }: { children: ReactNode }) {
  const normalizePath = (url: string) => {
    const hashPath = url.startsWith('#') ? url.slice(1) : url;
    return hashPath.startsWith('/') ? hashPath : `/${hashPath}`;
  };

  const getFallbackPath = () => {
    const stored = window.sessionStorage.getItem('ghumog_fallback_path');
    const params = new URLSearchParams(window.location.search);
    const fallback = stored ?? params.get('p');

    if (fallback) {
      const normalized = normalizePath(fallback);
      window.sessionStorage.removeItem('ghumog_fallback_path');
      if (window.location.pathname !== normalized) {
        window.history.replaceState({}, '', normalized + window.location.hash);
      }
      return normalized;
    }

    if (window.location.hash) {
      return normalizePath(window.location.hash.slice(1));
    }

    return window.location.pathname || '/';
  };

  const [path, setPath] = useState(getFallbackPath);

  useEffect(() => {
    const onPopState = () => {
      if (window.location.hash) {
        const legacy = normalizePath(window.location.hash.slice(1));
        window.history.replaceState({}, '', legacy);
        setPath(legacy);
      } else {
        setPath(window.location.pathname || '/');
      }
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to: string) => {
    const normalized = to.startsWith('/') ? to : `/${to}`;
    window.history.pushState({}, '', normalized);
    setPath(normalized);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return <Ctx.Provider value={{ path, navigate }}>{children}</Ctx.Provider>;
}

export const useRouter = () => useContext(Ctx);

export function Link({ to, className, children, onClick }: { to: string; className?: string; children: ReactNode; onClick?: () => void }) {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
