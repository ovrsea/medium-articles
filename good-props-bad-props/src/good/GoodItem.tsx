import React from "react";

type GoodItemProps = {
  color: "white" | "grey";
  showTopDivider?: boolean;
  item: {
    title: string;
  };
};

export const GoodItem = ({ item, showTopDivider, color }: GoodItemProps) => (
  <>
    {showTopDivider && "-----------------"}
    <div style={{ color }}>{item.title}</div>
  </>
);
