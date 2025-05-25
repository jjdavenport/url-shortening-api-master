import { Image, Text, View } from "react-native";

type Props = {
  title: string;
  subTitle: string;
  source: string;
};

const ListItem = ({ title, subTitle, source }: Props) => {
  return (
    <>
      <View className="flex w-full items-center gap-4 rounded-lg bg-white p-4">
        <View className="bg-darkViolet -mt-12 rounded-full p-3">
          <Image source={source} />
        </View>
        <Text className="text-center text-xl">{title}</Text>
        <Text className="text-center text-lg">{subTitle}</Text>
      </View>
    </>
  );
};

export default ListItem;
