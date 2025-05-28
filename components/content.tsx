import { Text, View } from "react-native";

const Content = () => {
  return (
    <>
      <View className="flex items-center gap-4 px-4 pb-20 md:w-fit md:items-start md:px-0 md:pb-0 md:pl-20">
        <Text className="w-96 text-center font-poppins text-4xl font-bold text-veryDarkBlue md:text-left md:text-5xl">
          More than just shorter links
        </Text>
        <Text className="text-center font-poppins text-lg font-medium text-grayishViolet md:w-96 md:text-left">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </Text>
        <Text className="w-fit rounded-full bg-cyan px-8 py-3 font-poppins text-xl font-medium text-white">
          Get Started
        </Text>
      </View>
    </>
  );
};

export default Content;
