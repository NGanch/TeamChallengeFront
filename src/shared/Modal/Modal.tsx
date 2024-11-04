import Backdrop from "@mui/material/Backdrop";
import MuiModal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IoClose } from "react-icons/io5";
import { Box } from "@mui/material";
import { CloseBtn } from "./Modal.styled";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  variant: "burgersmall" | "medium" | "large"; // Додаємо проп для різних стилів
};

const Modal = ({ children, isOpen, variant, handleClose }: Props) => {
  const styles = {
    burgersmall: {
      position: "absolute",
      top: "50%",
      left: "33%",
      transform: "translate(-50%, -50%)",
      borderRadius: "0px 12px",
      background: "var(--Primary-white, #fff)",
      padding: "0",
      width: "250px",
      height: "100%",
      // Використовуємо функцію для медіа-запитів
      '@media (min-width: 481px) and (max-width: 768px)': {
        width: "277px",
        top: "61%",
        left: "82%",
        padding: "40px 24px",
        borderRadius: "0px 0px 0px 10px",
      },
      "@media (min-width: 900px)": { width: "600px", top: "25%", borderRadius: "12px" },
    },
    medium: {
      position: "absolute",
      top: "50%",
      left: "33%",
      transform: "translate(-50%, -50%)",
      borderRadius: "0px 12px",
      background: "var(--Primary-white, #fff)",
      padding: "0",
      width: "400px",
      height: "100%",
    },
    large: {
      position: "absolute",
      top: "25%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "12px",
      background: "var(--Primary-white, #fff)",
      padding: "0",
      width: "600px",
      height: "100%",
    },
  };

  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: { timeout: 500 },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={styles[variant]}>
          <CloseBtn onClick={handleClose}>
            <IoClose size={32} />
          </CloseBtn>
          {children}
        </Box>
      </Fade>
    </MuiModal>
  );
};

export default Modal;