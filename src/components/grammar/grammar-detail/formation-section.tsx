import ParseKanji from "@/components/core/parse-kanji";
import { Card } from "@/components/ui/card";
import React, { ComponentPropsWithoutRef } from "react";
import Markdown from "react-markdown";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  formation: string;
}

const FormationSection = ({ formation }: SectionProps) => {
  return (
    <section className="space-y-4" id="formation">
      <h3 className="text-2xl font-bold text-display">Formation</h3>
      <Card className="grid gap-8 p-6 text-body">
        <Markdown
          className="text-body"
          components={{
            p: ({ node, ...props }) => <p className="" {...props} />,
            ul: ({ node, ...props }) => (
              <ul className="grid gap-6" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="text-lg font-semibold" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="grid gap-8" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="text-brand text-lg font-semibold" {...props} />
            ),
            em: ({ node, ...props }) => {
              return (
                <ParseKanji
                  // @ts-ignore
                  text={node?.children?.[0]?.value! as string}
                  el="span"
                  className="text-md block font-normal"
                />
              );
            },
          }}
        >
          {formation}
        </Markdown>
      </Card>
    </section>
  );
};

export default FormationSection;
