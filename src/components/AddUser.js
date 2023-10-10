import { useState } from "react";
import styles from "../components/AddUser.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModal from "./ErrorModal";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [template, setTemplate] = useState("");
  const [isClose, setIsClose] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    const user = {
      userName: enteredName,
      userAge: +enteredAge,
      id: Math.random().toString(),
    };
    if (enteredName.trim().length === 0 || enteredAge.trim() === 0) {
      console.log("This is empty input");
      setIsValid(false);
      setTemplate("Please enter your valid name and age(no empty values).");
      clearNameAndAge();
    } else if (enteredAge <= 0) {
      console.log("This is InValid Age");
      setIsValid(false);
      setTemplate("Please enter the valid age (> 0)");
      clearNameAndAge();
    } else {
      setIsValid(true);
      clearNameAndAge();
      props.addUser(user);
    }
  };
  const clearNameAndAge = () => {
    setEnteredName("");
    setEnteredAge("");
  };

  const AddUserNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const AddUserAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const closeModalHandler = () => {
    setIsValid(true);
    setIsClose(false);
  };

  return (
    <Card className="card">
      <form className={styles.inputform} onSubmit={addUserHandler}>
        <div className={styles.forms}>
          <label>Username</label>
          <input
            type="text"
            value={enteredName}
            onChange={AddUserNameHandler}
          />
        </div>
        <div className={styles.forms}>
          <label>Age(Years)</label>
          <input
            type="number"
            value={enteredAge}
            onChange={AddUserAgeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>

      {!isValid && (
        <ErrorModal
          closeModal={closeModalHandler}
          template={template}
          isClose={isClose}
        />
      )}
    </Card>
  );
}
export default AddUser;
