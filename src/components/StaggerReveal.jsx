import { useEffect, useRef, useState } from "react";

export const StaggerReveal = ({ children, className = "", stagger = 120 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                transitionDelay: visible ? `${i * stagger}ms` : "0ms",
                ...(visible ? { opacity: 1, transform: "translateY(0)" } : {}),
              }}
            >
              {child}
            </div>
          ))
        : (
          <div
            className="reveal"
            style={visible ? { opacity: 1, transform: "translateY(0)" } : {}}
          >
            {children}
          </div>
        )}
    </div>
  );
};
