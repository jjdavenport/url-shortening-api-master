import { Text, View } from "react-native";

const Content = () => {
  return (
    <>
      <View className="flex items-center gap-4 px-4 pb-20">
        <Text className="text-center font-poppins text-4xl">
          More than just shorter links
        </Text>
        <Text className="text-center font-poppins text-lg">
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
