import { DesktopBoost, MobileBoost } from "@/components/svgs/images";

import { Text, View } from "react-native";

type Prop = {
  tablet: boolean;
};

const Boost = ({ tablet }: Prop) => {
  return (
    <>
      <View className="relative flex h-[300px] items-center justify-center gap-4 bg-darkViolet bg-cover bg-center md:h-[250px] md:gap-8">
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
        <Text className="text-center font-poppins text-3xl font-bold text-white md:text-4xl">
          Boost your links today
        </Text>
        <View className="rounded-full bg-white">
          <Text className="w-fit cursor-pointer rounded-full bg-cyan px-10 py-4 text-center font-poppins text-xl font-bold text-white transition-opacity duration-300 ease-in-out hover:opacity-60">
            Get Started
          </Text>
        </View>
      </View>
    </>
  );
};

export default Boost;
