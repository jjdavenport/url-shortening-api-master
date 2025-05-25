import { View } from "react-native";
import Divide from "./divide";
import ListItem from "./list-item";

const brand = require("@/assets/images/icon-brand-recognition.svg");
const detail = require("@/assets/images/icon-detailed-records.svg");
const fully = require("@/assets/images/icon-fully-customizable.svg");

const List = () => {
  return (
    <>
      <View className="flex items-center p-4">
        <ListItem
          source={brand}
          title="Brand Recognition"
          subTitle="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
        />
        <Divide />
        <ListItem
          source={detail}
          title="Detailed Records"
          subTitle="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
        />
        <Divide />
        <ListItem
          source={fully}
          title="Fully Customizable"
          subTitle="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
        />
      </View>
    </>
  );
};

export default List;
