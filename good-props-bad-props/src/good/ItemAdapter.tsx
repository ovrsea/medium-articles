import { GoodItem } from "./GoodItem";
import * as React from "react";

type ItemListAdapterProps = {
  index: number;
  item: {
    title: string;
  };
};

export const ItemListAdapter = ({ index, item }: ItemListAdapterProps) => (
  <GoodItem
    item={item}
    color={index === 0 ? "grey" : "white"}
    showTopDivider={index !== 0}
  />
);

export const ItemListAdapterV2 = ({ index, item }: ItemListAdapterProps) => (
    <GoodItem
        item={item}
        color={index % 2 === 0 ? "grey" : "white"}
        showTopDivider={index !== 0}
    />
);