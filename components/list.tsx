import Brand from "@/assets/images/icon-brand-recognition.svg";
import Detail from "@/assets/images/icon-detailed-records.svg";
import Fully from "@/assets/images/icon-fully-customizable.svg";
import { View } from "react-native";
import Divide from "./divide";
import ListItem from "./list-item";

const List = () => {
  return (
    <>
      <View className="flex items-center p-4">
        <ListItem
          svg={<Brand />}
          title="Brand Recognition"
          subTitle="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
        />
        <Divide />
        <ListItem
          svg={<Detail />}
          title="Detailed Records"
          subTitle="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
        />
        <Divide />
        <ListItem
          svg={<Fully />}
          title="Fully Customizable"
          subTitle="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
        />
      </View>
    </>
  );
};

export default List;
