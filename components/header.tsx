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
      <View className="flex w-full max-w-screen-xl flex-row items-center justify-between p-6">
        <View className="flex flex-row items-center gap-8">
          <Logo />
          <View className="flex flex-row gap-4">
            <Text className="font-poppins">Features</Text>
            <Text className="font-poppins">Pricing</Text>
            <Text className="font-poppins">Resources</Text>
          </View>
        </View>
        <View className="flex flex-row items-center gap-4">
          <Text className="font-poppins">Login</Text>
          <Text className="rounded-full bg-cyan px-6 py-2 font-poppins text-white">
            Sign Up
          </Text>
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
