import { Image, Text, View } from "react-native";

const logo = require("@/assets/images/logo.svg");

const Links = () => {
  return (
    <>
      <View>
        <Image source={logo} />
        <Text>Features</Text>
        <View>
          <Text>Link Shortening</Text>
          <Text>Branded Links</Text>
          <Text>Analytics</Text>
        </View>
        <Text>Resources</Text>
        <View>
          <Text>Blog</Text>
          <Text>Developers</Text>
          <Text>Support</Text>
        </View>
        <Text>Company</Text>
        <View>
          <Text>About</Text>
          <Text>Our Team</Text>
          <Text>Careers</Text>
          <Text>Contact</Text>
        </View>
      </View>
    </>
  );
};

export default Links;
