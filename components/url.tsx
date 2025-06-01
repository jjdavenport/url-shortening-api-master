import Clipboard from "@react-native-clipboard/clipboard";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import AriaButton from "./aria-button";

type Props = {
  longUrl: string;
  shortUrl: string;
};

const Url = ({ longUrl, shortUrl }: Props) => {
  const [button, setButton] = useState("Copy");

  const copy = () => {
    setButton("Copied!");
    Clipboard.setString(shortUrl);
    setTimeout(() => {
      setButton("Copy");
    }, 3000);
  };

  return (
    <>
      <View className="flex w-full items-center bg-transparent">
        <View className="flex w-11/12 gap-1 divide-y divide-lightGray rounded-lg bg-white md:max-w-screen-lg md:flex-row md:items-center md:justify-between md:divide-y-0">
          <Text className="px-4 pb-2 pt-4 font-poppins text-lg font-medium md:p-4">
            {longUrl}
          </Text>
          <View className="flex gap-2 px-4 py-2 pb-4 md:flex-row md:items-center md:gap-4 md:p-4">
            <Link
              target="__blank"
              href={shortUrl}
              className="font-poppins text-lg font-medium text-cyan hover:underline"
            >
              {shortUrl}
            </Link>
            <AriaButton
              className={`${button === "Copy" ? "bg-cyan hover:opacity-60" : "bg-darkViolet"} rounded-md py-2 font-poppins text-lg font-bold text-white transition-all duration-75 ease-in-out md:w-36`}
              onPress={copy}
            >
              {button}
            </AriaButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default Url;
