/*[
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  { label: "Watermelon 🍉", value: "watermelon" },
  { label: "Pear 🍐", value: "pear" },
  { label: "Apple 🍎", value: "apple" },
  { label: "Tangerine 🍊", value: "tangerine" },
  { label: "Pineapple 🍍", value: "pineapple" },
  { label: "Peach 🍑", value: "peach" },
  { label: "BlueBeery", value: "blueberry" },
  { label: "Chocolate", value: "chocolate" },
  { label: "EggPlant", value: "eggplant", disabled: true },
  { label: "Carrot", value: "carrot" },
  { label: "Cabbage", value: "cabbage" },
  { label: "Green Pepper", value: "green pepper" },
  { label: "Orange", value: "Orange" },
  { label: "Rasberry", value: "Rasberry" },
  { label: "Banana", value: "banana" },
];*/
import {Option } from '../src/lib/interfaces'
let returnOptions : Array<Option>= [];
for(let i =0 ; i<2000; i++){
  returnOptions.push({ label: `${i}`, value:`${i}`})  
}

export const options = returnOptions;