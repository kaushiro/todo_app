import React from "react";

import ListItem from "./components/ListItem";
import { OrderedListStyled } from "./styles";

type GenericObject = { [key: string]: any };
interface IProps {
  list: GenericObject[];
}
const List: React.FC<IProps> = ({ list }) => {
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
