import { Text, View } from "react-native";

const MobileMenu = () => {
  return (
    <>
      <View className="fixed top-20 flex w-full items-center">
        <View className="flex w-11/12 items-center gap-4 rounded-lg bg-darkViolet p-4">
          <Text className="text-lg text-white">Features</Text>
          <Text className="text-lg text-white">Pricing</Text>
          <Text className="text-lg text-white">Resources</Text>
          <View className="h-[1px] w-full bg-grayishViolet" />
          <Text className="text-lg text-white">Login</Text>
          <Text className="w-full rounded-full bg-cyan py-1 text-center text-lg text-white">
            Sign Up
          </Text>
        </View>
      </View>
    </>
  );
};

export default MobileMenu;
