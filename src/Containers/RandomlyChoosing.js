import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CustomText } from "../Components/Common";
import Theme from "./Theme/colors";
import { MdAdd } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import FlipDiceIcon from "../Assets/Images/favicon.png";
// import Modal from "react-modal";
import ChosenModal from "../Components/ChosenModal";
import { MdCancel } from "react-icons/md";
import { Modal } from "rsuite";

const initialChoices = [];

const RandomlyChoosing = () => {
  const [hovered, setHovered] = useState(false);
  const [edit, setEdit] = useState(0);
  const [id, setId] = useState(1);
  const [choices, setChoices] = useState(initialChoices);
  const [text, setText] = useState("");
  const [editingText, setEditingText] = useState("");
  const [chosenModal, setChosenModal] = useState(false);
  const [chosenId, setChosenId] = useState(0);

  const handleChosenModal = () => {
    RandomChoice();
    setChosenModal(!chosenModal);
  };

  const RandomChoice = () => {
    const ChosenId = Math.floor(Math.random() * choices.length - 1) + 1;
    setChosenId(ChosenId);
  };

  useEffect(() => {
    const temp = localStorage.getItem("choices");
    if (temp) {
      const loadedChoices = JSON.parse(temp);

      if (loadedChoices) setChoices(loadedChoices);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(choices);
    localStorage.setItem("choices", temp);
  }, [choices]);

  const handleAdding = (text) => {
    if (text !== "") {
      const newChoice = { id: id, text: text };
      setId(id + 1);
      setChoices([...choices, newChoice]);
      setText("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (text !== "") {
        const newChoice = { id: id, text: text };
        setId(id + 1);
        setChoices([...choices, newChoice]);
        setText("");
      }
    }
  };

  const handleRemoving = (id) => {
    const updatedChoices = [...choices].filter((todo) => todo.id !== id);
    setChoices(updatedChoices);
  };

  const handleEditing = (id, text) => {
    if (text !== "") {
      const updatedChoices = [...choices].map((choice) => {
        if (choice.id === id) {
          choice.text = text;
        }
        return choice;
      });
      setChoices(updatedChoices);
    }
  };

  return (
    <Container>
      <ChoicesWrapper>
        <AddingInput>
          <Label>Add Your Choices:</Label>
          <InputWrapper>
            <Input
              type={"text"}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              onKeyPress={handleKeyDown}
            />
            <Add
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => handleAdding(text)}
            >
              <AddIcon
                size={50}
                color={hovered ? Theme.colors.white : Theme.colors.yellow}
              />
            </Add>
          </InputWrapper>
        </AddingInput>
        <List>
          {choices.map((item) => (
            <ListItem>
              {edit === item.id ? (
                <>
                  <EditingInput
                    autoFocus
                    onChange={(e) => setEditingText(e.target.value)}
                    value={editingText}
                  ></EditingInput>
                  <Done
                    onClick={() => {
                      handleEditing(item.id, editingText);
                      setEdit(0);
                      setEditingText("");
                    }}
                  >
                    Done
                  </Done>
                  <CancelIcon
                    size={30}
                    color={Theme.colors.red}
                    onClick={() => setEdit(0)}
                  />
                </>
              ) : (
                <>
                  <ItemTitle>{item.text}</ItemTitle>
                  <Icons>
                    <EditIcon
                      size={25}
                      color={Theme.colors.yellow}
                      onClick={() => setEdit(item.id)}
                    />
                    <RemoveIcon
                      size={25}
                      color={Theme.colors.red}
                      onClick={() => handleRemoving(item.id)}
                    />
                  </Icons>
                </>
              )}
            </ListItem>
          ))}
        </List>
      </ChoicesWrapper>
      <ChooseButtonWrapper>
        <ChooseButton onClick={handleChosenModal}>
          <FlipDice src={FlipDiceIcon} />
          <ChooseText>Choose</ChooseText>
        </ChooseButton>
      </ChooseButtonWrapper>
      <Modal show={chosenModal} onHide={() => setChosenModal(!chosenModal)}>
        <ChosenModal
          onCloseIcon={() => setChosenModal(!chosenModal)}
          chosenId={chosenId}
          choices={choices}
        />
      </Modal>
      {console.log(chosenModal)}
    </Container>
  );
};

export default RandomlyChoosing;

const Container = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const ChoicesWrapper = styled.div`
  width: 50%;
  padding: 50px 130px;
  @media (max-width: 1330px) {
    padding: 50px 100px;
  }
  @media (max-width: 1270px) {
    padding: 50px 80px;
  }
  @media (max-width: 850px) {
    width: 80%;
    padding: 50px 0px 50px 9%;
  }
`;

const ChooseButtonWrapper = styled.div`
  width: 50%;
  padding: 150px 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 850px) {
    width: 80%;
    padding: 50px 0px 80px 9%;
  }
  @media (max-width: 400px) {
    width: 80%;
    padding: 50px 0px 80px 10.5%;
  }
`;

const AddingInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 350px;
  height: 60px;
  font-size: 35px;
  border: 1px solid ${Theme.colors.primary};
  border-radius: 14px;
  &:focus,
  &:visited,
  &:link,
  &:active {
    border: 3px solid ${Theme.colors.primary};
  }
  outline: none;
  @media (max-width: 1230px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    height: 55px;
    font-size: 30px;
  }
  @media (max-width: 950px) {
    height: 45px;
    font-size: 25px;
  }
  @media (max-width: 400px) {
    height: 40px;
    width: 70%;
  }
`;

const Add = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid ${Theme.colors.yellow};
  border-radius: 35px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: ${Theme.colors.yellow};
  }
  transition: all 0.5s;
  @media (max-width: 950px) {
    width: 45px;
    height: 45px;
  }
`;

const Label = styled(CustomText)`
  align-self: flex-start;
  font-size: 35px;
  margin-left: 12px;
  @media (max-width: 950px) {
    font-size: 25px;
  }
`;

const AddIcon = styled(MdAdd)`
  @media (max-width: 950px) {
    width: 40px;
  }
`;

const List = styled.div`
  margin-top: 40px;
`;

const ListItem = styled.div`
  height: 55px;
  width: 450px;
  border: 3px solid ${Theme.colors.primary};
  border-radius: 14px;
  background-color: ${Theme.colors.transparent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  /* :hover {
    background-color: ${Theme.colors.blue};
  } */
  @media (max-width: 950px) {
    height: 45px;
    width: 380px;
  }
  @media (max-width: 850px) {
    width: 100%;
  }
`;

const ItemTitle = styled(CustomText)`
  font-size: 30px;
  margin-left: 10px;
  @media (max-width: 950px) {
    font-size: 25px;
  }
`;

const Icons = styled.div`
  margin-right: 10px;
`;

const RemoveIcon = styled(IoMdRemoveCircle)`
  cursor: pointer;
  @media (max-width: 950px) {
    width: 20px;
  }
`;

const EditIcon = styled(MdEdit)`
  margin-right: 8px;
  cursor: pointer;
  @media (max-width: 950px) {
    width: 20px;
  }
`;

const EditingInput = styled.input`
  height: 88%;
  width: 80%;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border: 0px;
  font-size: 30px;
  &:focus,
  &:visited,
  &:link,
  &:active {
    border: 0px;
  }
  outline: none;
`;

const Done = styled.div`
  width: 50px;
  height: 40px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  background-color: #4cbb17;
  cursor: pointer;
  margin-right: 3px;
  margin-left: 5px;
`;

const CancelIcon = styled(MdCancel)`
  cursor: pointer;
`;

const ChooseButton = styled.div`
  width: 330px;
  height: 400px;
  border-radius: 14px;
  border: 3px solid ${Theme.colors.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  :hover {
    background-color: ${Theme.colors.yellow};
  }
  transition: all 0.4s;
  @media (max-width: 1200px) {
    width: 280px;
    height: 350px;
  }
  @media (max-width: 1000px) {
    width: 230px;
    height: 300px;
  }
  @media (max-width: 850px) {
    height: 120px;
    flex-direction: row;
  }
`;

const FlipDice = styled.img`
  width: 210px;
  @media (max-width: 1200px) {
    width: 180px;
  }
  @media (max-width: 1000px) {
    width: 130px;
  }
  @media (max-width: 850px) {
    width: 70px;
  }
`;

const ChooseText = styled(CustomText)`
  font-size: 45px;
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 1000px) {
    font-size: 35px;
  }
  @media (max-width: 850px) {
    font-size: 25px;
  }
`;
