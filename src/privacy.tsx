import { useEffect, useState } from "react";

import Markdown from "react-markdown";

export default function Privacy() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/privacy.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div>
      <Markdown>{content}</Markdown>
    </div>
  );
}
