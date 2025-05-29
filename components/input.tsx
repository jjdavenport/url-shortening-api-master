import DesktopShorten from "@/assets/images/bg-shorten-desktop.svg";
import MobileShorten from "@/assets/images/bg-shorten-mobile.svg";
import { Text, TextInput, View } from "react-native";
import AriaButton from "./aria-button";

type Props = {
  input: string;
  setInput: () => void;
  onPress: () => void;
  tablet: boolean;
};

const Input = ({ input, setInput, onPress, tablet }: Props) => {
  return (
    <>
      <View className="z-10 flex w-full items-center bg-transparent">
        <View className="relative -mb-20 flex w-11/12 gap-4 overflow-hidden rounded-lg bg-darkViolet p-5 md:-mb-24 md:max-w-screen-lg md:flex-row md:p-8">
          {tablet ? (
            <DesktopShorten
              preserveAspectRatio="xMidYMid meet"
              className="absolute left-0 top-0"
            />
          ) : (
            <MobileShorten
              preserveAspectRatio="xMidYMid meet"
              className="absolute right-0 top-0"
            />
          )}
          <TextInput
            value={input}
            onChangeText={(e) => setInput(e.target.value)}
            className="z-10 w-full rounded-md bg-white p-3 font-poppins text-lg font-medium placeholder:text-grayishViolet focus:outline-none"
            placeholder="Shorten a link here..."
          />
          <View className="overflow-hidden rounded-lg bg-white">
            <AriaButton
              onPress={onPress}
              className="flex flex-1 items-center justify-center rounded-md bg-cyan p-2 transition-opacity duration-300 ease-in-out hover:opacity-60 md:w-40 md:p-0"
            >
              <Text className="font-poppins text-lg font-bold text-white">
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
