import Illustration from "@/assets/images/illustration-working.svg";
import { View } from "react-native";

type Prop = {
  tablet: boolean;
};

const MOBILE_VIEWBOX = "0 0 500 500";
const DESKTOP_VIEWBOX = "0 0 733 482";

const Hero = ({ tablet }: Prop) => {
  return (
    <View className="flex h-96 items-end md:h-[30rem]">
      <Illustration
        className="h-[100%] w-[90%] md:w-[100%]"
        viewBox={tablet ? DESKTOP_VIEWBOX : MOBILE_VIEWBOX}
        preserveAspectRatio="xMidYMid meet"
      />
    </View>
  );
};

export default Hero;
