import { Typography } from "../../style";
import { InfoProfile } from "../infoProfile";
import * as C from "./style";

export function Publications() {
  return (
    <C.Container>
      <Typography>Publicações</Typography>

      <C.containerPublications>
        {Array.from(Array(20)).map((item, index) => (
          <C.Content key={index}>
            <C.PublicationImage src="https://avatars.githubusercontent.com/u/147121602?v=4" alt="imagem perfil git hub" />
            <InfoProfile />
          </C.Content>
        ))}
      </C.containerPublications>
    </C.Container>
  );
}
