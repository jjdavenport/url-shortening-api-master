import MobileBoost from "@/assets/images/bg-boost-mobile.svg";
import { Text, View } from "react-native";

const Boost = () => {
  return (
    <>
      <View className="relative flex h-[300px] items-center justify-center gap-4 bg-darkViolet bg-cover bg-center">
        <MobileBoost
          preserveAspectRatio="xMidYMid meet"
          className="absolute top-0"
        />
        <Text className="text-center font-poppins text-2xl text-white">
          Boost your links today
        </Text>
        <Text className="w-fit rounded-full bg-cyan px-6 py-2 text-center font-poppins text-xl text-white">
          Get Started
        </Text>
      </View>
    </>
  );
};

export default Boost;
