import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/UI/Button";

import { MainContentWrapperStyled, LandingDetailsStyled } from "./styles";
import messages from "./messages";

const TodoList: React.FC = () => {
  const history = useHistory();
  return (
    <MainContentWrapperStyled>
      <h1>{messages.title.defaultMessage}</h1>
      <LandingDetailsStyled>
        <p>{messages.description.defaultMessage}</p>
      </LandingDetailsStyled>
      <Button
        onClick={() => history.push("/todos")}
        btnType="Success"
        text={messages.getStarted.defaultMessage}
        testId={"get-started"}
      />
    </MainContentWrapperStyled>
  );
};

export default TodoList;
