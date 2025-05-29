import { Text, View } from "react-native";

const Content = () => {
  return (
    <>
      <View className="flex items-center gap-4 px-4 pb-20 md:w-1/2 md:items-start md:gap-6 md:px-0 md:pb-0">
        <Text className="w-96 text-center font-poppins text-4xl font-bold text-veryDarkBlue md:w-[40rem] md:text-left md:text-6xl xl:text-7xl">
          More than just shorter links
        </Text>
        <Text className="text-center font-poppins text-lg font-medium text-grayishViolet md:w-96 md:text-left xl:w-[30rem]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </Text>
        <Text className="w-fit cursor-pointer rounded-full bg-cyan px-10 py-4 font-poppins text-xl font-bold text-white transition-opacity duration-300 ease-in-out hover:opacity-60">
          Get Started
        </Text>
      </View>
    </>
  );
};

export default Content;
