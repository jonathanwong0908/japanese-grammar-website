import { cn } from "@/lib/utils";
import React from "react";
import Markdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";

interface RehypeMarkdownProps {
  content: string;
  components?: Partial<Components> | null | undefined;
  className?: string;
}

const RehypeMarkdown = ({
  content,
  components,
  className,
}: RehypeMarkdownProps) => {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={components}
      className={cn("font-body", className)}
    >
      {content}
    </Markdown>
  );
};

export default RehypeMarkdown;
