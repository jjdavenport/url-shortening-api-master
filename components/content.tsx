import { Text, View } from "react-native";

const Content = () => {
  return (
    <>
      <View className="flex items-center gap-4 p-4">
        <Text className="text-center text-4xl">
          More than just shorter links
        </Text>
        <Text className="text-center text-lg">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </Text>
        <Text className="bg-cyan w-fit rounded-full px-6 py-2 text-xl text-white">
          Get Started
        </Text>
      </View>
    </>
  );
};

export default Content;
