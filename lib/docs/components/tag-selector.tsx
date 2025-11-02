"use client";

import React, { useState } from "react";

import TagSelector from "@/lib/docs/ui/tag-selector";
const initialTags = [
  "innovation",
  "productivity",
  "collaboration",
  "learning",
  "automation",
];

const TagSelectorDemo = () => {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <div>
      <TagSelector
        initialTags={initialTags}
        selectedTags={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default TagSelectorDemo;
