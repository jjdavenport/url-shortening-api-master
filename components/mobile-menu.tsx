import { Text, View } from "react-native";

const MobileMenu = () => {
  return (
    <>
      <View className="fixed top-20 z-10 flex w-full items-center">
        <View className="z-10 flex w-11/12 items-center gap-6 rounded-lg bg-darkViolet px-4 py-10">
          <Text className="font-poppins text-lg font-bold text-white">
            Features
          </Text>
          <Text className="font-poppins text-lg font-bold text-white">
            Pricing
          </Text>
          <Text className="font-poppins text-lg font-bold text-white">
            Resources
          </Text>
          <View className="h-[1px] w-full bg-grayishViolet" />
          <Text className="font-poppins text-lg font-bold text-white">
            Login
          </Text>
          <Text className="w-full rounded-full bg-cyan py-2 text-center font-poppins text-lg font-bold text-white">
            Sign Up
          </Text>
        </View>
      </View>
    </>
  );
};

export default MobileMenu;
