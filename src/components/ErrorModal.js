import { useState } from "react";
import styles from "./ErrorModal.module.css";
import Button from "./UI/Button";

function ErrorModal(props) {
  const [isClose, setIsClose] = useState(false);

  const closeWindow = () => {
    props.closeModal(isClose);
    setIsClose(true);
  };

  // Close the modal by clicking the enter key
  // onKeyDown={handleKeyDown}
  // tabIndex={0}
  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     closeWindow();
  //   }
  // };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      closeWindow(); // Close the modal when Enter key is pressed
    }
  };

  return (
    <div onClick={closeWindow}>
      {!isClose && (
        <div
          className={styles.errorCard}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className={styles.centered}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>Invalid Input</h5>
              </div>
              <div className={styles.modalContent}>{props.template}</div>
              <div className={styles.button}>
                <Button onClick={closeWindow}>OK</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ErrorModal;
