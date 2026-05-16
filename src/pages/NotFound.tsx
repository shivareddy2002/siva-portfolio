import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]');
    const prevDescContent = prevDesc?.getAttribute("content") ?? "";
    const prevCanonical = document.querySelector('link[rel="canonical"]');
    const prevCanonicalHref = prevCanonical?.getAttribute("href") ?? "";
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const prevOgTitle = ogTitle?.getAttribute("content") ?? "";
    const prevOgDesc = ogDesc?.getAttribute("content") ?? "";

    document.title = "Page Not Found | Lomada Siva Gangi Reddy";
    prevDesc?.setAttribute("content", "The page you are looking for does not exist. Return to the LSGR portfolio home.");
    prevCanonical?.setAttribute("href", `https://lsgr-portfolio-pulse.lovable.app${location.pathname}`);
    ogTitle?.setAttribute("content", "Page Not Found | Lomada Siva Gangi Reddy");
    ogDesc?.setAttribute("content", "The page you are looking for does not exist.");

    return () => {
      document.title = prevTitle;
      prevDesc?.setAttribute("content", prevDescContent);
      prevCanonical?.setAttribute("href", prevCanonicalHref);
      ogTitle?.setAttribute("content", prevOgTitle);
      ogDesc?.setAttribute("content", prevOgDesc);
    };
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:opacity-80">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
