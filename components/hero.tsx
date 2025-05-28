import Illustration from "@/assets/images/illustration-working.svg";
import { View } from "react-native";

const Hero = () => {
  return (
    <>
      <View className="flex h-96 items-end md:h-[30rem] md:w-1/2">
        <Illustration
          className="h-[100%] w-[90%] md:w-[100%]"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMidYMid meet"
        />
      </View>
    </>
  );
};

export default Hero;
