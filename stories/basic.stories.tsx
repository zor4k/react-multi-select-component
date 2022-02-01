import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";

import MultiSelect from "../src/multi-select";
import { options } from "./constants";

export default {
  title: "Basic",
  decorators: [withKnobs],
};


let prevIndex = 0;
const loadOptions = async () =>{
  const offset = 100;

  /*if(prevIndex < options.length){

  }*/

  const startSlice = prevIndex;
  const endSlice = prevIndex+ offset;
  prevIndex+= offset; 

  return  {
    options : options.slice(startSlice, endSlice),
    hasMore : endSlice < options.length
  }
}
export const ExampleDefault = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        //options={options}
        loadOptions={loadOptions}
        hasSelectAll={boolean("hasSelectAll", true)}
        isLoading={boolean("isLoading", false)}
        shouldToggleOnHover={boolean("shouldToggleOnHover", false)}
        disableSearch={boolean("disableSearch", false)}
        value={selected}
        disabled={boolean("disabled", false)}
        onChange={setSelected}
        onMenuToggle={(s) => {
          console.debug("Select Toggle: ", s);
        }}
        labelledBy={text("labelledBy", "Select Fruits")}
        className={text("className", "multi-select")}
      />
    </div>
  );
};

ExampleDefault.story = {
  name: "Basic",
};
