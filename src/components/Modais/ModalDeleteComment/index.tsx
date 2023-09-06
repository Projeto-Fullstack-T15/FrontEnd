import { Box, Modal } from "@mui/material";
import ButtonComponents from "../../Global/Buttons";
import { DeleteCommentProps } from "../../../interfaces";
import { Title } from "./style";

export const DeleteCommentModal: React.FC<DeleteCommentProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box display="flex" flexDirection="column" gap="50px"
        sx={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Title>Tem certeza que deseja excluir esse comentário?</Title>
        <Box display="flex" justifyContent="space-between" >
        <ButtonComponents
          typeButton="button"
          text="Cancelar"
          $type="brand1"
          $size="large"
          onClick={onClose}
        />
        <ButtonComponents
          typeButton="button"
          text="Confirmar"
          $type="brand1"
          $size="large"
          onClick={onConfirm}
        />
        </Box>
      </Box>
    </Modal>
  );
};
