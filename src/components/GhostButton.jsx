export const GhostButton = ({
  children,
  href,
  size = "default",
  className = "",
  ...props
}) => {
  const sizeClass =
    size === "sm" ? "ghost-btn-sm" : size === "lg" ? "ghost-btn-lg" : "";
  const classes = `ghost-btn ${sizeClass} ${className}`;

  if (href) {
    return (
      <a
        href={href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#") || href.startsWith("/") ? href : `https://${href}`}
        target={href.startsWith("#") || href.startsWith("mailto") ? undefined : "_blank"}
        rel={href.startsWith("#") || href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
