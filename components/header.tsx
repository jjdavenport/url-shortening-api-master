import Menu from "@/assets/images/icon-menu.svg";
import Logo from "@/assets/images/logo.svg";
import { View } from "react-native";
import AriaButton from "./aria-button";
import MobileMenu from "./mobile-menu";

type Props = {
  setOpenMenu: (open: boolean) => void;
  openMenu: boolean;
};

const Header = ({ setOpenMenu, openMenu }: Props) => {
  return (
    <>
      <View className="flex flex-row justify-between p-4">
        <Logo />
        <AriaButton
          onPress={() => setOpenMenu(!openMenu)}
          className="w-fit outline-none"
        >
          <Menu />
        </AriaButton>
      </View>
      {openMenu && <MobileMenu />}
    </>
  );
};

export default Header;
