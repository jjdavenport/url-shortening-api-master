import { Button, Image, View } from "react-native";

const menu = require("@/assets/images/icon-menu.svg");
const logo = require("@/assets/images/logo.svg");

const Header = () => {
  return (
    <>
      <View>
        <Image src={logo} />
        <Button>
          <Image src={menu} />
        </Button>
      </View>
    </>
  );
};

export default Header;
