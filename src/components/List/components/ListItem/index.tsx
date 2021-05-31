import React, { useContext, useState } from "react";

import { TodoContext } from "../../../../context/TodoContext";
import * as actions from "../../../../store/actions/index";
import Button from "../../../UI/Button";

import { ListItemStyled, ListDescriptionStyled } from "./styles";
import Checkbox from "./components/Checkbox";
interface IProps {
  id: string;
  isChecked?: boolean;
  time?: string;
  description?: string;
}
const ListItem: React.FC<IProps> = ({ id, isChecked, time, description }) => {
  const { dispatch } = useContext(TodoContext);
  const [checked, setChecked] = useState(false);
  const onDeleteTodo = (id: string) => {
    dispatch(actions.deleteTodo(id));
  };
  const onCheckTodo = (id: string) => {
    setChecked(!checked);
    dispatch(actions.checkTodo(id));
  };

  return (
    <ListItemStyled>
      <ListDescriptionStyled
        isChecked={checked}
      >{`${description} created: ${time}`}</ListDescriptionStyled>
      <Button onClick={() => onDeleteTodo(id)} text={"Delete"} />
      <Checkbox isChecked={isChecked} onClick={() => onCheckTodo(id)} />
    </ListItemStyled>
  );
};

export default ListItem;
