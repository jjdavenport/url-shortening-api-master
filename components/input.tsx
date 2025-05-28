import { Text, TextInput, View } from "react-native";
import AriaButton from "./aria-button";

const Input = () => {
  return (
    <>
      <View className="z-10 flex w-full items-center bg-transparent">
        <View className="-mb-16 flex w-11/12 gap-4 rounded-lg bg-darkViolet p-5 md:max-w-screen-xl md:flex-row md:p-8">
          <TextInput
            className="w-full rounded-md bg-white p-3 font-poppins text-lg font-medium placeholder:text-grayishViolet"
            placeholder="Shorten a link here..."
          />
          <AriaButton className="flex items-center justify-center rounded-md bg-cyan p-2 md:w-40 md:p-0">
            <Text className="font-poppins text-lg font-medium text-white">
              Shorten It!
            </Text>
          </AriaButton>
        </View>
      </View>
    </>
  );
};

export default Input;
