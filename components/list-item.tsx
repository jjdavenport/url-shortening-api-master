import { ReactNode } from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  subTitle: string;
  svg: ReactNode;
  className?: string;
};

const ListItem = ({ title, subTitle, svg, className }: Props) => {
  return (
    <>
      <View
        className={`${className} flex w-full items-center gap-4 rounded-lg bg-white p-5 md:w-auto md:flex-1 md:items-start`}
      >
        <View className="-mt-14 rounded-full bg-darkViolet p-6 md:-mt-16">
          {svg}
        </View>
        <Text className="text-center font-poppins text-2xl font-bold text-darkViolet md:text-left">
          {title}
        </Text>
        <Text className="text-center font-poppins text-lg font-medium text-grayishViolet md:text-left">
          {subTitle}
        </Text>
      </View>
    </>
  );
};

export default ListItem;
