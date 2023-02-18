import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CustomText } from "../Components/Common";
import Theme from "./Theme/colors";
import { MdAdd } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import FlipDiceIcon from "../Assets/Images/favicon.png";
import ChosenModal from "../Components/ChosenModal";
import { MdCancel } from "react-icons/md";
import { Loader, Modal } from "rsuite";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TheModal } from "../Components/Header";

const initialChoices = [];

const RandomlyChoosing = () => {
  const { token } = useSelector((state) => state);
  const [hovered, setHovered] = useState(false);
  const [edit, setEdit] = useState(0);
  const [id, setId] = useState(1);
  const [choices, setChoices] = useState(initialChoices);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [randomLoading, setRandomLoading] = useState(false);
  const [editingText, setEditingText] = useState("");
  const [chosenModal, setChosenModal] = useState(false);
  const [chosenId, setChosenId] = useState(0);
  const { value } = useParams();

  const RandomChoice = () => {
    setRandomLoading(true);
    fetch("https://randomly-backend.vercel.app/choices/random", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        category: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChosenId(data.choice.title);
        setRandomLoading(false);
        setChosenModal(!chosenModal);
      })
      .catch((err) => {
        alert("Something went wrong, choosing faild");
        console.log(err);
        setRandomLoading(false);
      });
    // const ChosenId = Math.floor(Math.random() * choices.length - 1) + 1;
    // setChosenId(ChosenId);
  };

  const handleChosenModal = () => {
    RandomChoice();
  };

  const fetchChoices = async () => {
    setLoading(true);
    fetch("https://randomly-backend.vercel.app/choices", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let filtered = data?.choices?.filter(
          (choice) => choice.category === value
        );
        console.log(filtered);
        setChoices(filtered);
        setLoading(false);
      })
      .catch((err) => {
        alert("Something went wrong, Maybe you are not logged in");
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log("value", value);
    fetchChoices();
    // const temp = localStorage.getItem("choices");
    // if (temp) {
    //   const loadedChoices = JSON.parse(temp);

    //   if (loadedChoices) setChoices(loadedChoices);
    // }
  }, []);

  useEffect(() => {
    // const temp = JSON.stringify(choices);
    // localStorage.setItem("choices", temp);
    console.log("choices", choices);
  }, [choices]);

  const handleAdding = (text) => {
    if (text !== "") {
      setLoading(true);
      fetch("https://randomly-backend.vercel.app/choices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          title: text,
          category: value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          fetchChoices();
          setText("");
        })
        .catch((err) => {
          alert("Something went wrong, Maybe you are not logged in");
          console.log(err);
          setLoading(false);
        });
      // const newChoice = { id: id, text: text };
      // setId(id + 1);
      // setChoices([...choices, newChoice]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdding(text);
      // if (text !== "") {
      //   const newChoice = { id: id, text: text };
      //   setId(id + 1);
      //   setChoices([...choices, newChoice]);
      //   setText("");
      // }
    }
  };

  const handleRemoving = (id) => {
    setLoading(true);
    fetch("https://randomly-backend.vercel.app/choices/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchChoices();
      })
      .catch((err) => {
        alert("Something went wrong, Maybe you are not logged in");
        console.log(err);
        setLoading(false);
      });
    // const updatedChoices = [...choices].filter((todo) => todo.id !== id);
    // setChoices(updatedChoices);
  };

  const handleEditing = (id, text) => {
    if (text !== "") {
      setLoading(true);
      fetch("https://randomly-backend.vercel.app/choices/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          title: text,
          category: value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          fetchChoices();
          setEdit(0);
        })
        .catch((err) => {
          alert("Something went wrong, Maybe you are not logged in");
          console.log(err);
          setLoading(false);
        });
      // const updatedChoices = [...choices].map((choice) => {
      //   if (choice.id === id) {
      //     choice.text = text;
      //   }
      //   return choice;
      // });
      // setChoices(updatedChoices);
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
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "50%",
            }}
          >
            <Loader size="lg" />
          </div>
        ) : (
          <List>
            {choices?.map((item) => (
              <ListItem>
                {edit === item._id ? (
                  <>
                    <EditingInput
                      autoFocus
                      onChange={(e) => setEditingText(e.target.value)}
                      value={editingText}
                    ></EditingInput>
                    <Done
                      onClick={() => {
                        handleEditing(item._id, editingText);
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
                    <ItemTitle>{item.title}</ItemTitle>
                    <Icons>
                      <EditIcon
                        size={25}
                        color={Theme.colors.yellow}
                        onClick={() => setEdit(item._id)}
                      />
                      <RemoveIcon
                        size={25}
                        color={Theme.colors.red}
                        onClick={() => handleRemoving(item._id)}
                      />
                    </Icons>
                  </>
                )}
              </ListItem>
            ))}
          </List>
        )}
      </ChoicesWrapper>
      <ChooseButtonWrapper>
        <ChooseButton onClick={handleChosenModal}>
          {randomLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: window.innerWidth > 850 ? "100%" : "30%",
                height: "50%",
                paddingBottom: window.innerWidth > 850 ? "0" : "20px",
              }}
            >
              <Loader size={window.innerWidth > 850 ? "lg" : "md"} />
            </div>
          ) : (
            <FlipDice src={FlipDiceIcon} />
          )}
          <ChooseText>Choose</ChooseText>
        </ChooseButton>
      </ChooseButtonWrapper>
      <ChooseModal
        show={chosenModal}
        onHide={() => setChosenModal(!chosenModal)}
      >
        <ChosenModal
          onCloseIcon={() => setChosenModal(!chosenModal)}
          chosenId={chosenId}
          choices={choices}
        />
      </ChooseModal>
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

export const ChooseModal = styled(Modal)`
  @media (max-width: 950px) {
    height: 500px;
    width: 90%;
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
  height: 33px;
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
  color: white;
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
