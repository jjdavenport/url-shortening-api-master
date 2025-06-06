import { View } from "react-native";
import Url from "./url";

type Prop = {
  data: { shortUrl: string; longUrl: string }[];
};

const UrlsList = ({ data }: Prop) => {
  return (
    <>
      <View className="flex w-full gap-4">
        {data.map((i, index) => (
          <Url key={index} longUrl={i.longUrl} shortUrl={i.shortUrl} />
        ))}
      </View>
    </>
  );
};

export default UrlsList;
