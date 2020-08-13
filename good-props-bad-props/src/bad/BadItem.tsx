import React from "react";

type BadItemProps = {
  isFirstItem?: boolean;
  item: {
    title: string;
  };
};

export const BadItem = ({ isFirstItem, item }: BadItemProps) => (
  <>
    {!isFirstItem && "-----------------"}
    <div style={{ color: isFirstItem ? "grey" : "white" }}>{item.title}</div>
  </>
);
