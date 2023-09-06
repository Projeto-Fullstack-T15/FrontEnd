import { Box, Modal } from "@mui/material"
import { EditCommentForm } from "../../Form/EditComment"

export const EditCommentModal = ({open, onClose}) => {
    return(
        <Modal open={open} onClose={onClose}>
            <Box>
                <EditCommentForm/>
            </Box>
        </Modal>
    )
}