import React from "react";

type BadItemUpdatedProps = {
  isFirstItem?: boolean;
  isSelectedItem?: boolean;
  item: {
    title: string;
  };
};

export const BadItemUpdated = ({
  isFirstItem,
  item,
  isSelectedItem,
}: BadItemUpdatedProps) => (
  <>
    {!isFirstItem && !isSelectedItem && "-----------------"}
    <div style={{ color: isFirstItem ? "grey" : "white" }}>{item.title}</div>
  </>
);
