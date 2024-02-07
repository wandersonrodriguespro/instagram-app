import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { Flex } from "../../style";
import * as C from "./style";

import LogoInstagram from "../../assets/logo-instagram.svg";

export function NavBar({ themeToggler, theme }) {
  return (
    <C.Container>
      <Flex>
        <C.BtnTheme onClick={themeToggler}>{theme === "light" ? <BiMoon /> : <BsSun />}</C.BtnTheme>
      </Flex>

      <img src={LogoInstagram} alt="logo instagram" />

      <Flex>
        <C.Profile>
          <img src="https://avatars.githubusercontent.com/u/147121602?v=4" alt="imagem perfil git hub" />
        </C.Profile>
      </Flex>
    </C.Container>
  );
}
