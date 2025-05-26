import { TextInput, View } from "react-native";
import AriaButton from "./aria-button";

const Input = () => {
  return (
    <>
      <View className="z-10 flex items-center bg-transparent">
        <View className="-mb-16 flex w-11/12 gap-4 rounded-md bg-darkViolet p-4">
          <TextInput
            className="rounded-md bg-white p-3 font-poppins"
            placeholder="Shorten a link here..."
          />
          <AriaButton className="rounded-md bg-cyan p-2 font-poppins text-white">
            Shorten It!
          </AriaButton>
        </View>
      </View>
    </>
  );
};

export default Input;
