import { JlptLevel } from "@/types/resources";

export const ResourcesConfig = {
  jlptLevels: <JlptLevel[]>[
    {
      name: "n1",
      description: "Language sensei",
      href: "/grammar/n1",
      title: "Maestro",
      status: "disabled",
    },
    {
      name: "n2",
      description: "Confident traveler",
      href: "/grammar/n2",
      title: "Stumbler",
      status: "active",
    },
    {
      name: "n3",
      description: "Casual conversationalist",
      href: "/grammar/n3",
      title: "Juggler",
      status: "disabled",
    },
    {
      name: "n4",
      description: "Communication novice",
      href: "/grammar/n4",
      title: "Fumbler",
      status: "disabled",
    },
    {
      name: "n5",
      description: "Kawaii Apprentice",
      href: "/grammar/n5",
      title: "Nooblet",
      status: "disabled",
    },
  ],
};

export const jlptLevels = ["n1", "n2", "n3", "n4", "n5"];
