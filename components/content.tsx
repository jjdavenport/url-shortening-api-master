import { Text, View } from "react-native";

const Content = () => {
  return (
    <>
      <View className="flex items-center gap-4 px-4 pb-20 md:w-1/2 md:items-start">
        <Text className="w-96 text-center font-poppins text-4xl font-bold md:text-left md:text-5xl">
          More than just shorter links
        </Text>
        <Text className="w-96 text-center font-poppins text-lg md:text-left">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </Text>
        <Text className="w-fit rounded-full bg-cyan px-6 py-2 font-poppins text-xl text-white">
          Get Started
        </Text>
      </View>
    </>
  );
};

export default Content;
