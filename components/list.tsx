import { Brand, Detail, Fully } from "@/components/svgs/images";
import { View } from "react-native";
import Divide from "./divide";
import ListItem from "./list-item";

const List = () => {
  return (
    <>
      <View className="flex max-w-screen-lg items-center">
        <View className="flex flex-col items-center p-4 md:w-11/12 md:p-0 xl:w-full xl:flex-row">
          <ListItem
            svg={<Brand />}
            title="Brand Recognition"
            subTitle="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
          />
          <Divide />
          <ListItem
            className="xl:mt-20"
            svg={<Detail />}
            title="Detailed Records"
            subTitle="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
          />
          <Divide />
          <ListItem
            className="xl:mt-40"
            svg={<Fully />}
            title="Fully Customizable"
            subTitle="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
          />
        </View>
      </View>
    </>
  );
};

export default List;
