import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoodItem } from "./good/GoodItem";
import { BadItem } from "./bad/BadItem";
import { ItemListAdapter } from "./good/ItemAdapter";
import { BadItemUpdated } from "./bad/BadItemUpdated";

const myItems = [
  {
    title: "Hello",
  },
  {
    title: "secondItem",
  },
  {
    title: "thirdItem",
  },
];

const selectedItem = myItems[0];

function App() {
  return (
    <div className="App">
      <div>
        {
          //Good list
          myItems.map((item, index) => (
            <GoodItem
              color={index === 0 ? "grey" : "white"}
              showTopDivider={index !== 0}
              item={item}
            />
          ))
        }
      </div>
      <div>
        {
          //Bad List
          myItems.map((item, index) => (
            <BadItem item={item} isFirstItem={index === 0} />
          ))
        }
      </div>

      <div id="my-good-selected-item">
        <GoodItem color={"white"} item={selectedItem} />
      </div>
      <div id="my-bad-selected-item">
        <BadItem item={selectedItem} isFirstItem={true} />
      </div>
      <div id="my-bad-selected-item">
        <BadItemUpdated item={selectedItem} isSelectedItem={true} />
      </div>

      {
        //Adapter
        myItems.map((item, index) => (
          <ItemListAdapter index={index} item={item} />
        ))
      }
    </div>
  );
}

export default App;
