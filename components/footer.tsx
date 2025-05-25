import { Link } from "expo-router";
import { Text, View } from "react-native";

const Footer = () => {
  return (
    <>
      <View className="bg-veryDarkBlue flex items-center">
        <Text className="flex gap-1 text-xs text-white">
          Challenge by
          <Link
            className="underline"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </Link>
          . Coded by
          <Link className="underline" href="https://github.com/jjdavenport">
            jjdavenport
          </Link>
          .
        </Text>
      </View>
    </>
  );
};

export default Footer;
