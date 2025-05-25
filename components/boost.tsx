import { Text, View } from "react-native";

const Boost = () => {
  return (
    <>
      <View className="bg-darkViolet flex items-center gap-4 p-4">
        <Text className="text-center text-xl text-white">
          Boost your links today
        </Text>
        <Text className="bg-cyan w-fit rounded-full px-6 py-2 text-center text-xl text-white">
          Get Started
        </Text>
      </View>
    </>
  );
};

export default Boost;
