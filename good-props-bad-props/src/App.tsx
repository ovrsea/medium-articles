import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoodItem } from "./good/GoodItem";
import { BadItem } from "./bad/BadItem";
import { ItemListAdapter } from "./good/ItemAdapter";

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
        {
          //Bad List
          myItems.map((item, index) => (
            <BadItem item={item} isFirstItem={index === 0} />
          ))
        }
      </div>

      {selectedItem && <GoodItem color={"white"} item={selectedItem} />}
      {selectedItem && <BadItem item={selectedItem} isFirstItem={true} />}

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
