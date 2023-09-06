import ButtonComponents from "../../Global/Buttons";
import { Input } from "../Input";

export const EditCommentForm = () => {
  return (
    <form>
      <Input type="text" placeholder="" register={register("")} error={} />
      <ButtonComponents
        typeButton="button"
        text="Cancelar"
        $type="brand1"
        $size="large"
      />
      <ButtonComponents
        typeButton="button"
        text="Salvar Alterações"
        $type="brand1"
        $size="large"
      />
    </form>
  );
};
