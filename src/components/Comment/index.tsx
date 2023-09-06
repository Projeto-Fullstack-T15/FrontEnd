import {
  ButtonSubmit,
  Description,
  FormComment,
  Formulario,
  Name,
  User,
} from "./style";
import { UserContext } from "../../contexts/user/userContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CommentSchema } from "./shema";

export const Comment = () => {
  const { user } = useContext(UserContext);
  const { createComment } = useContext(CommentContext);

  const { register, handleSubmit } = useForm<CommentSchema>({
    resolver: yupResolver(CommentSchema),
  });

  const name = user.name;

  function pegarPrimeirasLetras(str) {
    const palavras = str.split(" ");
    const primeirasLetras = palavras.map((palavra) => palavra.charAt(0));
    return primeirasLetras.join("");
  }

  const iniciais = pegarPrimeirasLetras(name);

  return (
    <Formulario onSubmit={handleSubmit(createComment())}>
      <User>
        <Name>
          <h3>{iniciais.toUpperCase()}</h3>
          <h3>SL</h3>
        </Name>
        <div>
          <h2>Samuel Leão</h2>
        </div>
      </User>
      <FormComment>
        <Description
          name="description"
          id="description"
          placeholder="Digitar descrição do post"
          {...register("comment")}
        ></Description>

        <ButtonSubmit>
          <button type="submit">Postar</button>
        </ButtonSubmit>
      </FormComment>
    </Formulario>
  );
};
