"use client";

import React, {
  useEffect,
  useState,
} from 'react';

import Markdown from 'react-markdown';

export default function PrivacyPage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/privacy.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="w-screen h-screen overflow-y-auto relative md:p-16 hind">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 -z-10" />

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
