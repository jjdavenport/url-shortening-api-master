import DesktopBoost from "@/assets/images/bg-boost-desktop.svg";
import MobileBoost from "@/assets/images/bg-boost-mobile.svg";
import { Text, View } from "react-native";

type Prop = {
  tablet: boolean;
};

const Boost = ({ tablet }: Prop) => {
  return (
    <>
      <View className="relative flex h-[300px] items-center justify-center gap-4 bg-darkViolet bg-cover bg-center md:h-[250px]">
        {tablet ? (
          <DesktopBoost
            preserveAspectRatio="xMidYMid meet"
            className="absolute top-0"
          />
        ) : (
          <MobileBoost
            preserveAspectRatio="xMidYMid meet"
            className="absolute top-0"
          />
        )}
        <Text className="text-center font-poppins text-3xl font-bold text-white">
          Boost your links today
        </Text>
        <View className="rounded-full bg-white">
          <Text className="w-fit cursor-pointer rounded-full bg-cyan px-10 py-3 text-center font-poppins text-xl font-medium text-white transition-opacity duration-300 ease-in-out hover:opacity-60">
            Get Started
          </Text>
        </View>
      </View>
    </>
  );
};

export default Boost;
