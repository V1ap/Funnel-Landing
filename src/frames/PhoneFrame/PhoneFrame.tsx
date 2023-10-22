import { phoneFormatter } from "src/utils/phoneFormatter";
import styles from "./styles.module.scss";
import { useState, useRef, useEffect } from "react";
import KeyButton from "./KeyButton/KeyButton";
import CheckIcon from "src/assets/icons/CheckIcon";
import CloseIcon from "src/assets/icons/CloseIcon";

const ANTI_DIGIT_REG_EXP = /[^0-9]/g;

interface IPhoneFrameProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const PhoneFrame: React.FC<IPhoneFrameProps> = ({ onCancel, onSuccess }) => {
  const [inputValue, setInputValue] = useState("+7(___)___-__-__");
  const [isAgree, setIsAgree] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const keyRef1 = useRef<HTMLButtonElement>(null);
  const keyRef2 = useRef<HTMLButtonElement>(null);
  const keyRef3 = useRef<HTMLButtonElement>(null);
  const keyRef4 = useRef<HTMLButtonElement>(null);
  const keyRef5 = useRef<HTMLButtonElement>(null);
  const keyRef6 = useRef<HTMLButtonElement>(null);
  const keyRef7 = useRef<HTMLButtonElement>(null);
  const keyRef8 = useRef<HTMLButtonElement>(null);
  const keyRef9 = useRef<HTMLButtonElement>(null);
  const keyRef0 = useRef<HTMLButtonElement>(null);
  const keyRefDelete = useRef<HTMLButtonElement>(null);
  const personBtnRef = useRef<HTMLButtonElement>(null);
  const formBtnRef = useRef<HTMLButtonElement>(null);
  const cancelBtnRef = useRef<HTMLButtonElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputValue.length > e.currentTarget.value.length) {
      setInputValue(
        phoneFormatter(
          isNaN(
            Number(inputValue[inputValue.length - 1]) // проверяем является ли последний введенный символ цифрой
          )
            ? e.currentTarget.value.replace(ANTI_DIGIT_REG_EXP, "").slice(0, -1)
            : e.currentTarget.value.replace(ANTI_DIGIT_REG_EXP, "")
        )
      );
    } else {
      setInputValue(
        phoneFormatter(e.currentTarget.value.replace(ANTI_DIGIT_REG_EXP, ""))
      );
    }
  };

  const changeSelectionStart = () => {
    if (inputRef.current) {
      inputRef.current.selectionStart = inputValue.length;
    }
  };

  const handleClickKey = (key: string) => {
    setInputValue((prev) =>
      phoneFormatter(prev.replace(ANTI_DIGIT_REG_EXP, "") + key)
    );
  };

  const handleClickDeleteKey = () => {
    setInputValue((prev) =>
      phoneFormatter(prev.replace(ANTI_DIGIT_REG_EXP, "").slice(0, -1))
    );
  };

  const handleClickPersonData = () => {
    setIsAgree((prev) => !prev);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsSubmited(true);
  };

  useEffect(() => {
    inputRef.current ? inputRef.current.focus() : null;
  }, [inputRef.current]);

  useEffect(() => {
    let timer = 1;
    if (isSubmited) {
      timer = setTimeout(() => {
        onSuccess();
      }, 600);
    }

    return () => clearTimeout(timer);
  }, [isSubmited]);

  return (
    <section className={styles.phone}>
      <article className={styles.phone__card}>
        <h1
          className={`${styles.phone__header} ${
            isSubmited ? styles._submited : null
          }`}
        >
          Введите ваш номер мобильного телефона
        </h1>
        <form
          action=""
          className={`${styles.phone__form} ${
            isSubmited ? styles._submited : null
          }`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className={styles.phone__input}
            value={inputValue}
            onChange={handleChange}
            ref={inputRef}
            onClick={changeSelectionStart}
            onKeyUp={changeSelectionStart}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                keyRef1.current?.focus();
              }
            }}
          />
          <p className={styles.phone__description}>
            и с Вами свяжется наш менеждер для дальнейшей консультации
          </p>
          <div className={styles.phone__keyboard}>
            <KeyButton
              innerRef={keyRef1}
              handleUpArrow={() =>
                inputRef.current ? inputRef.current.focus() : null
              }
              handleDownArrow={() =>
                keyRef4.current ? keyRef4.current.focus() : null
              }
              handleRightArrow={() =>
                keyRef2.current ? keyRef2.current.focus() : null
              }
              handleLeftArrow={() =>
                inputRef.current ? inputRef.current.focus() : null
              }
              onClick={() => handleClickKey("1")}
              className={styles.phone__key}
            >
              1
            </KeyButton>
            <KeyButton
              innerRef={keyRef2}
              handleUpArrow={() =>
                inputRef.current ? inputRef.current.focus() : null
              }
              handleDownArrow={() =>
                keyRef5.current ? keyRef5.current.focus() : null
              }
              handleRightArrow={() =>
                keyRef3.current ? keyRef3.current.focus() : null
              }
              handleLeftArrow={() =>
                keyRef1.current ? keyRef1.current.focus() : null
              }
              onClick={() => handleClickKey("2")}
              className={styles.phone__key}
            >
              2
            </KeyButton>
            <KeyButton
              innerRef={keyRef3}
              handleUpArrow={() =>
                inputRef.current ? inputRef.current.focus() : null
              }
              handleDownArrow={() =>
                keyRef6.current ? keyRef6.current.focus() : null
              }
              handleRightArrow={() =>
                keyRef4.current ? keyRef4.current.focus() : null
              }
              handleLeftArrow={() =>
                keyRef2.current ? keyRef2.current.focus() : null
              }
              onClick={() => handleClickKey("3")}
              className={styles.phone__key}
            >
              3
            </KeyButton>
            <KeyButton
              innerRef={keyRef4}
              handleUpArrow={() =>
                keyRef1.current ? keyRef1.current.focus() : null
              }
              handleDownArrow={() =>
                keyRef7.current ? keyRef7.current.focus() : null
              }
              handleRightArrow={() =>
                keyRef5.current ? keyRef5.current.focus() : null
              }
              handleLeftArrow={() =>
                keyRef3.current ? keyRef3.current.focus() : null
              }
              onClick={() => handleClickKey("4")}
              className={styles.phone__key}
            >
              4
            </KeyButton>
            <KeyButton
              innerRef={keyRef5}
              handleUpArrow={() =>
                keyRef2.current ? keyRef2.current.focus() : null
              }
              handleDownArrow={() =>
                keyRef8.current ? keyRef8.current.focus() : null
              }
              handleRightArrow={() =>
                keyRef6.current ? keyRef6.current.focus() : null
              }
              handleLeftArrow={() =>
                keyRef4.current ? keyRef4.current.focus() : null
              }
              onClick={() => handleClickKey("5")}
              className={styles.phone__key}
            >
              5
            </KeyButton>
            <KeyButton
              innerRef={keyRef6}
              handleUpArrow={() =>
                keyRef3.current ? keyRef3.current.focus() : null
              }
              handleDownArrow={() =>
                keyRef9.current ? keyRef9.current.focus() : null
              }
              handleRightArrow={() =>
                keyRef7.current ? keyRef7.current.focus() : null
              }
              handleLeftArrow={() =>
                keyRef5.current ? keyRef5.current.focus() : null
              }
              onClick={() => handleClickKey("6")}
              className={styles.phone__key}
            >
              6
            </KeyButton>
            <KeyButton
              innerRef={keyRef7}
              handleUpArrow={() =>
                keyRef4.current ? keyRef4.current.focus() : null
              }
              handleDownArrow={() =>
                keyRefDelete.current ? keyRefDelete.current.focus() : null
              }
              handleRightArrow={() =>
                keyRef8.current ? keyRef8.current.focus() : null
              }
              handleLeftArrow={() =>
                keyRef6.current ? keyRef6.current.focus() : null
              }
              onClick={() => handleClickKey("7")}
              className={styles.phone__key}
            >
              7
            </KeyButton>
            <KeyButton
              innerRef={keyRef8}
              handleUpArrow={() =>
                keyRef5.current ? keyRef5.current.focus() : null
              }
              handleDownArrow={() =>
                keyRefDelete.current ? keyRefDelete.current.focus() : null
              }
              handleRightArrow={() =>
                keyRef9.current ? keyRef9.current.focus() : null
              }
              handleLeftArrow={() =>
                keyRef7.current ? keyRef7.current.focus() : null
              }
              onClick={() => handleClickKey("8")}
              className={styles.phone__key}
            >
              8
            </KeyButton>
            <KeyButton
              innerRef={keyRef9}
              handleUpArrow={() =>
                keyRef6.current ? keyRef6.current.focus() : null
              }
              handleDownArrow={() =>
                keyRef0.current ? keyRef0.current.focus() : null
              }
              handleRightArrow={() =>
                keyRefDelete.current ? keyRefDelete.current.focus() : null
              }
              handleLeftArrow={() =>
                keyRef8.current ? keyRef8.current.focus() : null
              }
              onClick={() => handleClickKey("9")}
              className={styles.phone__key}
            >
              9
            </KeyButton>
            <KeyButton
              innerRef={keyRefDelete}
              handleUpArrow={() =>
                keyRef7.current ? keyRef7.current.focus() : null
              }
              handleDownArrow={() =>
                personBtnRef.current ? personBtnRef.current.focus() : null
              }
              handleRightArrow={() =>
                keyRef0.current ? keyRef0.current.focus() : null
              }
              handleLeftArrow={() =>
                keyRef9.current ? keyRef9.current.focus() : null
              }
              className={styles.phone__key_delete}
              onClick={handleClickDeleteKey}
            >
              СТЕРЕТЬ
            </KeyButton>
            <KeyButton
              innerRef={keyRef0}
              handleUpArrow={() =>
                keyRef9.current ? keyRef9.current.focus() : null
              }
              handleDownArrow={() =>
                personBtnRef.current ? personBtnRef.current.focus() : null
              }
              handleRightArrow={() =>
                personBtnRef.current ? personBtnRef.current.focus() : null
              }
              handleLeftArrow={() =>
                keyRefDelete.current ? keyRefDelete.current.focus() : null
              }
              onClick={() => handleClickKey("0")}
              className={styles.phone__key}
            >
              0
            </KeyButton>
          </div>
          <div className={styles.phone__personData}>
            <KeyButton
              innerRef={personBtnRef}
              handleUpArrow={() =>
                keyRefDelete.current ? keyRefDelete.current.focus() : null
              }
              handleDownArrow={
                isAgree &&
                inputValue.replace(ANTI_DIGIT_REG_EXP, "").length === 11
                  ? () =>
                      formBtnRef.current ? formBtnRef.current.focus() : null
                  : () =>
                      cancelBtnRef.current ? cancelBtnRef.current.focus() : null
              }
              handleRightArrow={
                isAgree &&
                inputValue.replace(ANTI_DIGIT_REG_EXP, "").length === 11
                  ? () =>
                      formBtnRef.current ? formBtnRef.current.focus() : null
                  : () =>
                      cancelBtnRef.current ? cancelBtnRef.current.focus() : null
              }
              handleLeftArrow={() =>
                keyRef0.current ? keyRef0.current.focus() : null
              }
              onClick={handleClickPersonData}
              className={styles.phone__personDataBtn}
            >
              {isAgree ? <CheckIcon /> : null}
            </KeyButton>
            <p className={styles.phone__personDataText}>
              Согласие на обработку персональных данных
            </p>
          </div>
          <KeyButton
            innerRef={formBtnRef}
            handleUpArrow={() =>
              personBtnRef.current ? personBtnRef.current.focus() : null
            }
            handleDownArrow={() =>
              cancelBtnRef.current ? cancelBtnRef.current.focus() : null
            }
            handleRightArrow={() =>
              cancelBtnRef.current ? cancelBtnRef.current.focus() : null
            }
            handleLeftArrow={() =>
              personBtnRef.current ? personBtnRef.current.focus() : null
            }
            onClick={handleSubmit}
            className={styles.phone__btn}
            type="submit"
            disabled={
              !(
                isAgree &&
                inputValue.replace(ANTI_DIGIT_REG_EXP, "").length === 11
              )
            }
          >
            ПОДТВЕРДИТЬ НОМЕР
          </KeyButton>
        </form>
      </article>

      <KeyButton
        onClick={onCancel}
        innerRef={cancelBtnRef}
        handleUpArrow={
          isAgree && inputValue.replace(ANTI_DIGIT_REG_EXP, "").length === 11
            ? () => (formBtnRef.current ? formBtnRef.current.focus() : null)
            : () => (personBtnRef.current ? personBtnRef.current.focus() : null)
        }
        handleLeftArrow={
          isAgree && inputValue.replace(ANTI_DIGIT_REG_EXP, "").length === 11
            ? () => (formBtnRef.current ? formBtnRef.current.focus() : null)
            : () => (personBtnRef.current ? personBtnRef.current.focus() : null)
        }
        className={styles.phone__cancelBtn}
      >
        <CloseIcon />
      </KeyButton>
    </section>
  );
};

export default PhoneFrame;
