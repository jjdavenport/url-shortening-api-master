import DesktopShorten from "@/assets/images/bg-shorten-desktop.svg";
import MobileShorten from "@/assets/images/bg-shorten-mobile.svg";
import { Text, TextInput, View } from "react-native";
import AriaButton from "./aria-button";

type Props = {
  input: string;
  setInput: () => void;
  onPress: () => void;
  tablet: boolean;
  error: {
    state: boolean;
    message: string;
  };
};

const Input = ({ input, setInput, onPress, tablet, error }: Props) => {
  if (tablet) {
    return (
      <>
        <View className="z-10 flex w-full items-center bg-transparent">
          <View className="relative -mb-24 flex w-11/12 gap-2 overflow-hidden rounded-lg bg-darkViolet p-10 md:max-w-screen-lg">
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
            <View className="flex flex-row gap-4">
              <TextInput
                value={input}
                onChangeText={setInput}
                className={`${error.state ? "outline outline-red placeholder:text-red placeholder:opacity-60" : "outline-none placeholder:text-grayishViolet"} z-10 w-full rounded-md bg-white p-3 font-poppins text-lg font-medium focus:outline-none`}
                placeholder="Shorten a link here..."
              />
              <View className="overflow-hidden rounded-lg bg-white">
                <AriaButton
                  onPress={onPress}
                  className="flex w-40 flex-1 items-center justify-center rounded-md bg-cyan p-0 transition-opacity duration-300 ease-in-out hover:opacity-60"
                >
                  <Text className="font-poppins text-lg font-bold text-white">
                    Shorten It!
                  </Text>
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
          <View className="flex gap-2">
            <TextInput
              value={input}
              onChangeText={setInput}
              className={`${error.state ? "outline outline-red placeholder:text-red placeholder:opacity-60" : "outline-none placeholder:text-grayishViolet"} z-10 w-full rounded-sm bg-white p-3 font-poppins text-lg font-medium focus:outline-none`}
              placeholder="Shorten a link here..."
            />
            {error.state && (
              <Text className="font-poppins text-xs font-medium italic text-red">
                {error.message}
              </Text>
            )}
          </View>
          <View className="overflow-hidden rounded-lg bg-white">
            <AriaButton
              onPress={onPress}
              className="flex flex-1 items-center justify-center rounded-sm bg-cyan p-3 transition-opacity duration-300 ease-in-out hover:opacity-60"
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
