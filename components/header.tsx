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
      <View className="flex flex-row items-center justify-between p-6">
        <Logo />
        <AriaButton
          onPress={() => setOpenMenu(!openMenu)}
          className="w-fit outline-none"
        >
          <Menu className="h-7 w-7 stroke-gray" />
        </AriaButton>
      </View>
      {openMenu && <MobileMenu />}
    </>
  );
};

export default Header;
