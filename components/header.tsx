import { Button } from "react-aria-components";
import { Image, View } from "react-native";

const menu = require("@/assets/images/icon-menu.svg");
const logo = require("@/assets/images/logo.svg");

const Header = () => {
  return (
    <>
      <View className="flex flex-row justify-between p-4">
        <Image source={logo} />
        <Button className="w-fit">
          <Image source={menu} />
        </Button>
      </View>
    </>
  );
};

export default Header;
