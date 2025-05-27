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
        className={`${className} flex w-full items-center gap-4 rounded-lg bg-white p-4 md:w-auto md:flex-1 md:items-start`}
      >
        <View className="-mt-12 rounded-full bg-darkViolet p-3">{svg}</View>
        <Text className="text-center font-poppins text-xl text-darkViolet md:text-left">
          {title}
        </Text>
        <Text className="text-center font-poppins text-lg md:text-left">
          {subTitle}
        </Text>
      </View>
    </>
  );
};

export default ListItem;
