import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([
    { name: "Store technical", time: "1d 2h", id: "BLAZ-1341", type: "HOLD" },
    { name: "bug", time: "1d 7h", id: "BLAZ-1563", type: "RESOLVED" },
    { name: "Improvments", time: "2d 2h", id: "BLAZ-9827", type: "SUBMMITED" },
  ]);

  const typeChange = (id, type) => {
    setData((state) => {
      return state.map((value) => {
        if (value.id === id) {
          value.type = type;
        }
        return value;
      });
    });
  };
  // console.log(data[0].type)


  const value = {
    data,
    typeChange,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
