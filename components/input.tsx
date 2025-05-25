import { Button } from "react-aria-components";
import { TextInput, View } from "react-native";

const Input = () => {
  return (
    <>
      <View className="z-10 flex items-center bg-transparent">
        <View className="bg-darkViolet -mb-24 flex w-11/12 gap-4 rounded-md p-4">
          <TextInput
            className="rounded-md bg-white p-3"
            placeholder="Shorten a link here..."
          />
          <Button className="bg-cyan rounded-md p-2 text-white">
            Shorten It!
          </Button>
        </View>
      </View>
    </>
  );
};

export default Input;
