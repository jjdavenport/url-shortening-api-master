import Menu from "@/assets/images/icon-menu.svg";
import Logo from "@/assets/images/logo.svg";
import { Text, View } from "react-native";
import AriaButton from "./aria-button";
import MobileMenu from "./mobile-menu";

type Props = {
  setOpenMenu?: (open: boolean) => void;
  openMenu?: boolean;
  tablet: boolean;
};

const Header = ({ setOpenMenu, openMenu, tablet }: Props) => {
  if (tablet) {
    return (
      <View className="flex w-full items-center">
        <View className="flex w-11/12 max-w-screen-lg flex-row items-center justify-between py-10">
          <View className="flex flex-row items-center gap-10">
            <Logo />
            <View className="flex flex-row gap-6">
              <Text className="cursor-pointer font-poppins font-bold text-grayishViolet hover:text-veryDarkViolet">
                Features
              </Text>
              <Text className="cursor-pointer font-poppins font-bold text-grayishViolet hover:text-veryDarkViolet">
                Pricing
              </Text>
              <Text className="cursor-pointer font-poppins font-bold text-grayishViolet hover:text-veryDarkViolet">
                Resources
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-center gap-6">
            <Text className="cursor-pointer font-poppins font-bold text-grayishViolet hover:text-veryDarkViolet">
              Login
            </Text>
            <Text className="cursor-pointer rounded-full bg-cyan px-6 py-2 font-poppins font-bold text-white transition-opacity duration-300 ease-in-out hover:opacity-60">
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    );
  }

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
