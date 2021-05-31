import React, { useContext, useState } from "react";
import { v1 as uuid } from "uuid";

import { TodoContext } from "../../context/TodoContext";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button";
import * as actions from "../../store/actions/index";
import { updateObject } from "../../shared/utility";

import { AddTodoStyled, SubmitButtonWrapperStyled } from "./styles";
import messages from "./messages";

interface IFormProps {
  [key: string]: any;
  todo: {
    elementType: string;
    elementConfig: {
      type: string;
      placeholder: string;
    };
    value: string;
  };
}

const AddTodo: React.FC = () => {
  const { dispatch } = useContext(TodoContext);
  const [disabled, setDisabled] = useState(true);

  const [addTodoForm, setAddTodoForm] = useState<IFormProps>({
    todo: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: messages.addTodo.defaultMessage,
      },
      value: "",
    },
  });

  const inputChangedHandler = (
    event: { target: { value: any } },
    controlName: string
  ) => {
    setDisabled(false);
    const updatedControls = updateObject(addTodoForm, {
      [controlName]: updateObject(addTodoForm[controlName], {
        value: event.target.value,
      }),
    });
    setAddTodoForm(updatedControls);
  };
  const getDate = () => {
    var dateArray = new Date().toString().split(" ");
    return (
      dateArray[0] +
      " " +
      dateArray[2] +
      " " +
      dateArray[1] +
      " " +
      dateArray[3]
    );
  };
  const getTime = () => {
    var d = new Date();
    var t = d.toLocaleTimeString();
    return t;
  };

  const onAddTodo = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(
      actions.addTodo({
        id: uuid(),
        isChecked: false,
        time: getDate() + " at: " + getTime(),
        description: addTodoForm.todo.value,
      })
    );
    const clearValue = updateObject(addTodoForm, {
      todo: updateObject(addTodoForm["todo"], {
        value: "",
      }),
    });
    setAddTodoForm(clearValue);
    setDisabled(true);
  };

  const formElementsArray = [];
  for (let key in addTodoForm) {
    formElementsArray.push({
      id: key,
      config: addTodoForm[key],
    });
  }
  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event: any) => inputChangedHandler(event, formElement.id)}
    />
  ));
  return (
    <form onSubmit={onAddTodo}>
      <AddTodoStyled>{form}</AddTodoStyled>
      <SubmitButtonWrapperStyled>
        <Button
          isDisabled={disabled}
          onClick={onAddTodo}
          btnType="Success"
          text={messages.addTodo.defaultMessage}
        />
      </SubmitButtonWrapperStyled>
    </form>
  );
};

export default AddTodo;
