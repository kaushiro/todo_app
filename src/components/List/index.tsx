import React, { useState, useEffect } from "react";

import ListItem from "./components/ListItem";
import { OrderedListStyled } from "./styles";

type GenericObject = { [key: string]: any };
interface IProps {
  list: GenericObject[];
}
const List: React.FC<IProps> = ({ list }) => {
  // const [orderedList,setOrderedList] =  useState([])
  // useEffect(() => {
  //   list.map((item) =>
  //   item.isChecked ? setOrderedList.push(item) : f.isChecked ? -1 : 1
  //   );
  // }, [list]);
  // console.log(list);

  return (
    <OrderedListStyled>
      {list &&
        list.map((listItem) => (
          <ListItem
            key={listItem.id}
            id={listItem.id}
            isChecked={listItem.isChecked}
            time={listItem.time}
            description={listItem.description}
          />
        ))}
    </OrderedListStyled>
  );
};

export default List;
