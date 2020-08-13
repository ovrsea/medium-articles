import React from "react";

type GoodItemProps = {
  color: "white" | "grey";
  showTopDivider?: boolean;
  item: {
    title: string;
  };
};

export const GoodItem = (props: GoodItemProps) => (
  <>
    {props.showTopDivider && "-----------------"}
    <div>{props.item.title}</div>
  </>
);
