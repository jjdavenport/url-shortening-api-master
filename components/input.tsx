import { DesktopShorten, MobileShorten } from "@/components/svgs/images";
import { Text, TextInput, View } from "react-native";
import AriaButton from "./aria-button";

type Props = {
  input: string;
  setInput: () => void;
  onPress: () => void;
  onBlur: () => void;
  tablet: boolean;
  error: {
    state: boolean;
    message: string;
  };
};

const Input = ({ input, setInput, onPress, onBlur, tablet, error }: Props) => {
  if (tablet) {
    return (
      <>
        <View className="z-10 flex w-full items-center bg-transparent">
          <View className="relative -mb-24 flex w-11/12 gap-2 overflow-hidden rounded-lg bg-darkViolet p-10 md:max-w-screen-lg">
            <DesktopShorten
              preserveAspectRatio="xMidYMid meet"
              className="absolute left-0 top-0"
            />
            <View className="flex flex-row gap-4">
              <TextInput
                onBlur={onBlur}
                value={input}
                onChangeText={setInput}
                className={`${error.state ? "outline outline-[3px] outline-red placeholder:text-red placeholder:opacity-60 focus:outline focus:outline-[3px] focus:outline-red" : "outline-none placeholder:text-grayishViolet"} z-10 w-full cursor-pointer rounded-md bg-white p-3 font-poppins text-lg font-medium`}
                placeholder="Shorten a link here..."
              />
              <View className="overflow-hidden rounded-lg bg-white">
                <AriaButton
                  testID="input-button"
                  onPress={onPress}
                  className="flex w-40 flex-1 items-center justify-center rounded-md bg-cyan p-0 font-poppins text-lg font-bold text-white transition-opacity duration-300 ease-in-out hover:opacity-60"
                >
                  Shorten It!
                </AriaButton>
              </View>
            </View>
            {error.state && (
              <Text className="absolute top-24 font-poppins text-sm font-medium italic text-red">
                {error.message}
              </Text>
            )}
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <View className="z-10 flex w-full items-center bg-transparent">
        <View className="relative -mb-20 flex w-11/12 gap-4 overflow-hidden rounded-lg bg-darkViolet p-5">
          <MobileShorten
            preserveAspectRatio="xMidYMid meet"
            className="absolute right-0 top-0"
          />
          <View className="flex gap-2">
            <TextInput
              onBlur={onBlur}
              value={input}
              onChangeText={setInput}
              className={`${error.state ? "outline outline-[3px] outline-red placeholder:text-red placeholder:opacity-60 focus:outline focus:outline-[3px] focus:outline-red" : "outline-none placeholder:text-grayishViolet"} z-10 w-full cursor-pointer rounded-sm bg-white p-3 font-poppins text-lg font-medium`}
              placeholder="Shorten a link here..."
            />
            <View className="h-2">
              {error.state && (
                <Text className="font-poppins text-xs font-medium italic text-red">
                  {error.message}
                </Text>
              )}
            </View>
          </View>
          <View className="overflow-hidden rounded-lg bg-white">
            <AriaButton
              testID="input-button"
              onPress={onPress}
              className="flex flex-1 items-center justify-center rounded-sm bg-cyan p-3 font-poppins text-lg font-bold text-white transition-opacity duration-300 ease-in-out hover:opacity-60"
            >
              Shorten It!
            </AriaButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default Input;
