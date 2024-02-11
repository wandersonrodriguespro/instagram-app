import { Flex, Typography } from "../../style";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import * as C from "./style";

export function InfoProfile() {

  return (
    <Flex direction="row" align="center" justify="space-between">
      <C.Container>
        <C.Link>
          <C.ProfileImage src="https://avatars.githubusercontent.com/u/147121602?v=4" alt="imagem perfil git hub" />
          <Typography weight="300" size="13px" height="15px">
            Pedro
          </Typography>
        </C.Link>
      </C.Container>

      <C.Container>
        <AiFillHeart color="red" />
        <Typography>1234</Typography>

        <FaRegComment />
        <Typography>52</Typography>
      </C.Container>
    </Flex>
  );
}
