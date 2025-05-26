import Menu from "@/assets/images/icon-menu.svg";
import Logo from "@/assets/images/logo.svg";
import { Button } from "react-aria-components";
import { View } from "react-native";

const Header = () => {
  return (
    <>
      <View className="flex flex-row justify-between p-4">
        <Logo />
        <Button className="w-fit">
          <Menu />
        </Button>
      </View>
    </>
  );
};

export default Header;
