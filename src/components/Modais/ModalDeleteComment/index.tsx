import { Box, Modal } from "@mui/material";
import ButtonComponents from "../../Global/Buttons";
import { DeleteCommentProps } from "../../../interfaces";

export const DeleteCommentModal:React.FC<DeleteCommentProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        <p>Tem certeza que deseja excluir esse comentário?</p>
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
    </Modal>
  );
};
