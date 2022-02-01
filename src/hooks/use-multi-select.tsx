import React, { useEffect, useState } from "react";

import { ISelectProps, Option } from "../lib/interfaces";

const defaultStrings = {
  allItemsAreSelected: "All items are selected.",
  clearSearch: "Clear Search",
  clearSelected: "Clear Selected",
  noOptions: "No options",
  search: "Search",
  selectAll: "Select All",
  selectAllFiltered: "Select All (Filtered)",
  selectSomeItems: "Select...",
  create: "Create",
};

const defaultProps: Partial<ISelectProps> = {
  value: [],
  hasSelectAll: true,
  className: "multi-select",
  debounceDuration: 200,
  //options: [] as Option[],
};

interface MultiSelectContextProps extends ISelectProps {
  t: (key: string) => string;
  setOptions?;
  hasMore: boolean;
  setHasMore: (hasMore: boolean) => void;
  options: Array<Option> 
}

interface MultiSelectProviderProps {
  props: ISelectProps;
  children;
}

const MultiSelectContext = React.createContext<MultiSelectContextProps>(
  {} as MultiSelectContextProps
);

export const MultiSelectProvider = ({
  props,
  children,
}: MultiSelectProviderProps) => {
  const [options, setOptions] : [Array<Option>, any]= useState([]);
  const [hasMore , setHasMore] : [boolean, any] = useState(false);
  const t = (key) => props.overrideStrings?.[key] || defaultStrings[key];

  /*useEffect(() => {
    props.loadOptions().then( (returnVal )=> {
      setOptions(returnVal.options); setHasMore(returnVal.hasMore);
      console.log("setting options to:")
      console.log(returnVal.options)
    })
  }, [props.loadOptions]);*/

  useEffect(() => {
    props.loadOptions().then( (returnVal )=> {
      setOptions(returnVal.options);
      setHasMore(returnVal.hasMore);
      console.log("setting options to:")
      console.log(returnVal.options);

      console.log("hasMore: "+ returnVal.hasMore);
    })
  }, []);

  return (
    <MultiSelectContext.Provider
      value={{ t, ...defaultProps, ...props, options, setOptions, hasMore, setHasMore  }}
    >
      {children}
    </MultiSelectContext.Provider>
  );
};

export const useMultiSelect = () => React.useContext(MultiSelectContext);
