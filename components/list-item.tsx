import { ReactNode } from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  subTitle: string;
  svg: ReactNode;
};

const ListItem = ({ title, subTitle, svg }: Props) => {
  return (
    <>
      <View className="flex w-full items-center gap-4 rounded-lg bg-white p-4">
        <View className="-mt-12 rounded-full bg-darkViolet p-3">{svg}</View>
        <Text className="text-center text-xl">{title}</Text>
        <Text className="text-center text-lg">{subTitle}</Text>
      </View>
    </>
  );
};

export default ListItem;
