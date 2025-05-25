import { View } from "react-native";
import Divide from "./divide";
import ListItem from "./list-item";

const List = () => {
  return (
    <>
      <View>
        <ListItem
          title="Brand Recognition"
          subTitle="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
          source=""
        />
        <Divide />
        <ListItem
          title="Detailed Records"
          subTitle="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
          source=""
        />
        <Divide />
        <ListItem
          title="Fully Customizable"
          subTitle="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
          source=""
        />
      </View>
    </>
  );
};

export default List;
