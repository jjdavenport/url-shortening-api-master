import Illustration from "@/assets/images/illustration-working.svg";
import { View } from "react-native";

const Hero = () => {
  return (
    <>
      <View className="flex h-96 items-end">
        <Illustration
          width="90%"
          height="100%"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMidYMid meet"
        />
      </View>
    </>
  );
};

export default Hero;
