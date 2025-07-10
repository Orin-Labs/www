function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

const parseLinksInText = (text: string): React.ReactNode => {
  return text
    .split(/(<a href=['"][^'"]*['"]>[^<]*<\/a>)/)
    .map((part, index) => {
      const linkMatch = part.match(/^<a href=['"]([^'"]*)['"]>(.*?)<\/a>$/);
      if (linkMatch) {
        const [, href, text] = linkMatch;
        return (
          <a href={href} key={index} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        );
      }
      return part;
    });
};

export { cn, parseLinksInText };
