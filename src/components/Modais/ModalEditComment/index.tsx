import { Box, Modal } from "@mui/material";
import { EditCommentForm } from "../../Form/EditComment";

export const EditCommentModal = ({ open, onClose, commentId, commentText }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
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
        <EditCommentForm
          onClose={onClose}
          commentId={commentId}
          commentText={commentText}
        />
      </Box>
    </Modal>
  );
};
