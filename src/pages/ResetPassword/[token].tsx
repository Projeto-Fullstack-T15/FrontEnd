import { useParams } from "react-router-dom";
import { ResetPasswordForm } from "../../components/Form/ResetPassword";
import { Main } from "./style";

export const ResetPasswordPage = () => {
    const { token } = useParams();
  
    return (
      <Main>
        <ResetPasswordForm token={token} />
      </Main>
    );
  };