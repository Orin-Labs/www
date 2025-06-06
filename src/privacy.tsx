import {
  useEffect,
  useState,
} from 'react';

import Markdown from 'react-markdown';

import { MeshGradient } from '@paper-design/shaders-react';

import { COLORS } from './constants/colors';

export default function Memo() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/privacy.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="w-screen h-screen overflow-y-auto relative md:p-16 hind">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 pointer-events-none">
        <MeshGradient
          color1={COLORS[0]}
          color2={COLORS[1]}
          color3={COLORS[2]}
          speed={0.05}
          seed={0}
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      </div>

      <div
        className="z-10 text-left p-8 md:p-16 md:pt-8 w-fit mx-auto h-fit md:rounded-lg bg-white relative"
        style={{
          boxShadow:
            "12px 12px 24px rgba(0, 0, 0, 0.2), -12px -12px 24px rgba(255, 255, 255, 0.2)",
        }}
      >
        <Markdown
          className="max-w-4xl mx-auto markdown-body"
          components={{
            ol: ({ ...props }) => (
              <ol
                className="ml-6 my-4"
                style={{ listStyle: "revert" }}
                {...props}
              />
            ),
            ul: ({ ...props }) => (
              <ul
                className="ml-6 my-4"
                style={{ listStyle: "revert" }}
                {...props}
              />
            ),
          }}
        >
          {content}
        </Markdown>
      </div>
    </div>
  );
}
