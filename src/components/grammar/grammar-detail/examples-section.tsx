import RehypeMarkdown from "@/components/core/rehype-markdown";
import { Card, CardTitle } from "@/components/ui/card";
import { JlptExample } from "@/types/grammar";
import React, { ComponentPropsWithoutRef } from "react";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  examples: JlptExample[];
}

const ExamplesSection = ({ examples }: SectionProps) => {
  return (
    <section className="space-y-4" id="examples">
      <h3 className="text-2xl font-bold text-display">Examples</h3>
      <Card className="grid gap-8 p-6">
        {examples?.map((example, index) => (
          <div key={index} className="flex">
            <div className="grid gap-2">
              <CardTitle className="">
                <RehypeMarkdown
                  content={example?.sentence}
                  components={{
                    strong: ({ node, ...props }) => (
                      <strong
                        className="text-brand text-lg font-semibold"
                        {...props}
                      />
                    ),
                  }}
                />
              </CardTitle>
              <p className="text-body">{example?.meaning}</p>
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
};

export default ExamplesSection;
