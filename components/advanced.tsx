import { Text, View } from "react-native";

const Advanced = () => {
  return (
    <>
      <View className="flex items-center gap-2 p-4 md:gap-4 md:p-0">
        <Text className="text-center font-poppins text-3xl font-bold text-veryDarkBlue md:text-4xl">
          Advanced Statistics
        </Text>
        <Text className="text-center font-poppins text-lg font-medium text-grayishViolet md:w-[34rem]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Text>
      </View>
    </>
  );
};

export default Advanced;
