import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal();

  const getInitial = () => {
    switch (direction) {
      case "up": return { transform: "translateY(24px)", filter: "blur(4px)" };
      case "left": return { transform: "translateX(-24px)", filter: "blur(4px)" };
      case "right": return { transform: "translateX(24px)", filter: "blur(4px)" };
      case "none": return { transform: "none", filter: "blur(4px)" };
    }
  };

  const initial = getInitial();
  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : initial.transform,
        filter: isVisible ? "blur(0px)" : initial.filter,
        transition: `opacity 0.7s ${ease} ${delay}s, transform 0.7s ${ease} ${delay}s, filter 0.7s ${ease} ${delay}s`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
};
