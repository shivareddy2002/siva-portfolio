import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { threshold = 0.12, rootMargin = "0px 0px -80px 0px", triggerOnce = true } = options;
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
  direction?: "up" | "left" | "right" | "none" | "scale";
  intensity?: "normal" | "strong";
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  intensity = "normal",
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal();

  const dist = intensity === "strong" ? 40 : 28;

  const getInitial = () => {
    switch (direction) {
      case "up":
        return { transform: `translateY(${dist}px)`, filter: "blur(6px)" };
      case "left":
        return { transform: `translateX(-${dist}px)`, filter: "blur(6px)" };
      case "right":
        return { transform: `translateX(${dist}px)`, filter: "blur(6px)" };
      case "scale":
        return { transform: "scale(0.92)", filter: "blur(6px)" };
      case "none":
        return { transform: "none", filter: "blur(6px)" };
    }
  };

  const initial = getInitial();
  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
  const duration = intensity === "strong" ? "0.9s" : "0.75s";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) translateX(0) scale(1)" : initial.transform,
        filter: isVisible ? "blur(0px)" : initial.filter,
        transition: `opacity ${duration} ${ease} ${delay}s, transform ${duration} ${ease} ${delay}s, filter ${duration} ${ease} ${delay}s`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
};
