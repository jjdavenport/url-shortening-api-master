import { Link } from "expo-router";
import { Text, View } from "react-native";

const Footer = () => {
  return (
    <>
      <View>
        <Text>
          Challenge by
          <Link
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </Link>
          . Coded by
          <Link href="https://github.com/jjdavenport">jjdavenport</Link>.
        </Text>
      </View>
    </>
  );
};

export default Footer;
