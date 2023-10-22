import styles from "./styles.module.scss";

interface IKeyButtonProps {
  handleRightArrow?: () => void;
  handleLeftArrow?: () => void;
  handleUpArrow?: () => void;
  handleDownArrow?: () => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: React.ReactNode;
  innerRef: React.RefObject<HTMLButtonElement>;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
}

const KeyButton: React.FC<IKeyButtonProps> = ({
  handleRightArrow,
  handleLeftArrow,
  handleDownArrow,
  handleUpArrow,
  onClick,
  className,
  children,
  innerRef,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${styles.keyBtn} ${className ? className : ""}`}
      onClick={onClick}
      ref={innerRef}
      onKeyDown={(e) => {
        switch (e.key) {
          case "ArrowRight":
            handleRightArrow ? handleRightArrow() : null;
            break;

          case "ArrowDown":
            handleDownArrow ? handleDownArrow() : null;
            break;

          case "ArrowUp":
            handleUpArrow ? handleUpArrow() : null;
            break;

          case "ArrowLeft":
            handleLeftArrow ? handleLeftArrow() : null;
            break;

          default:
            break;
        }
      }}
    >
      {children}
    </button>
  );
};

export default KeyButton;
