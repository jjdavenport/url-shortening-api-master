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
        className={`${className} flex w-full items-center gap-4 rounded-lg bg-white p-5 md:w-96 md:flex-1 md:gap-6 md:p-8 xl:items-start`}
      >
        <View className="-mt-14 rounded-full bg-darkViolet p-6 md:-mt-20">
          {svg}
        </View>
        <View className="flex gap-4">
          <Text className="text-center font-poppins text-2xl font-bold text-darkViolet xl:text-left">
            {title}
          </Text>
          <Text className="text-center font-poppins text-lg font-medium text-grayishViolet xl:text-left">
            {subTitle}
          </Text>
        </View>
      </View>
    </>
  );
};

export default ListItem;
