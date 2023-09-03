import { Modal, Box } from "@mui/material";
import ButtonComponents from "../../Global/Buttons";
import { Close, SubTitle, Text, Title } from "./style";
import { useNavigate } from "react-router-dom";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  open,
  onClose,
}) => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    onClose();
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 3,
          borderRadius: "8px",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          style={{ marginBottom: "60px" }}
        >
          <Title>Sucesso!</Title>
          <Close onClick={onClose}>X</Close>
        </Box>
        <Box display="flex" flexDirection="column" gap="20px">
          <SubTitle>Sua conta foi criada com sucesso!</SubTitle>
          <Text>
            Agora você poderá ver seus negócios crescendo em grande escala
          </Text>
          <ButtonComponents
            typeButton="button"
            text="Ir para o login"
            $type="brand1"
            $size="large"
            onClick={() => handleLoginClick()}
          />
        </Box>
      </Box>
    </Modal>
  );
};
