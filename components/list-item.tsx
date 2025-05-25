import { Image, Text, View } from "react-native";

type Props = {
  title: string;
  subTitle: string;
  source: string;
};

const ListItem = ({ title, subTitle, source }: Props) => {
  return (
    <>
      <View>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
        <Image source={source} />
      </View>
    </>
  );
};

export default ListItem;
