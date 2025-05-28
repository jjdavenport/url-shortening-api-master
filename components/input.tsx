import { Text, TextInput, View } from "react-native";
import AriaButton from "./aria-button";

type Props = {
  input: string;
  setInput: () => void;
  onPress: () => void;
};

const Input = ({ input, setInput, onPress }: Props) => {
  return (
    <>
      <View className="z-10 flex w-full items-center bg-transparent">
        <View className="-mb-24 flex w-11/12 gap-4 rounded-lg bg-darkViolet p-5 md:max-w-screen-xl md:flex-row md:p-8">
          <TextInput
            value={input}
            onChangeText={(e) => setInput(e.target.value)}
            className="w-full rounded-md bg-white p-3 font-poppins text-lg font-medium placeholder:text-grayishViolet focus:outline-none"
            placeholder="Shorten a link here..."
          />
          <View className="overflow-hidden rounded-lg bg-white">
            <AriaButton
              onPress={onPress}
              className="flex flex-1 items-center justify-center rounded-md bg-cyan p-2 transition-opacity duration-300 ease-in-out hover:opacity-60 md:w-40 md:p-0"
            >
              <Text className="font-poppins text-lg font-medium text-white">
                Shorten It!
              </Text>
            </AriaButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default Input;
