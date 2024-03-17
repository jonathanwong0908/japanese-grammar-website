import { Card } from "@/components/ui/card";
import { JlptGrammar } from "@/types/grammar";
import React, { ComponentPropsWithoutRef } from "react";
import Markdown from "react-markdown";

interface OverviewSectionProps extends ComponentPropsWithoutRef<"section"> {
  grammar: JlptGrammar;
}

const OverviewSection = ({ grammar }: OverviewSectionProps) => {
  return (
    <section className="space-y-4" id="overview">
      <h3 className="font-body text-2xl font-bold text-display">Overview</h3>
      <Card className="grid gap-8 p-6">
        {grammar?.forms ? (
          <div className="space-y-1">
            <h4 className="font-body text-lg font-bold">Forms</h4>
            <p className="font-body-jp text-body">{grammar?.forms}</p>
          </div>
        ) : null}
        {grammar?.usage ? (
          <div className="space-y-1">
            <h4 className="font-body text-lg font-bold">Usage</h4>
            <p className="font-body-jp text-body">{grammar?.usage}</p>
          </div>
        ) : null}
        {grammar?.meaning ? (
          <div className="space-y-1">
            <h4 className="font-body text-lg font-bold">Meaning</h4>
            <Markdown
              className="text-body"
              components={{
                p: ({ node, ...props }) => <p className="" {...props} />,
                ul: ({ node, ...props }) => <ul className="" {...props} />,
                li: ({ node, ...props }) => <li className="" {...props} />,
                strong: ({ node, ...props }) => (
                  <strong
                    className="font-semibold underline underline-offset-2"
                    {...props}
                  />
                ),
              }}
            >
              {grammar?.meaning}
            </Markdown>
          </div>
        ) : null}
      </Card>
    </section>
  );
};

export default OverviewSection;
