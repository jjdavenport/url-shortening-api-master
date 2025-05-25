import { Image, Text, View } from "react-native";

const logo = require("@/assets/images/logo.svg");
const facebook = require("@/assets/images/icon-facebook.svg");
const twitter = require("@/assets/images/icon-twitter.svg");
const pinterest = require("@/assets/images/icon-pinterest.svg");
const instagram = require("@/assets/images/icon-instagram.svg");

const Links = () => {
  return (
    <>
      <View className="bg-veryDarkBlue flex items-center gap-6 p-4">
        <Image source={logo} />
        <Text className="text-center text-white">Features</Text>
        <View className="flex gap-1">
          <Text className="text-center text-white">Link Shortening</Text>
          <Text className="text-center text-white">Branded Links</Text>
          <Text className="text-center text-white">Analytics</Text>
        </View>
        <Text className="text-center text-white">Resources</Text>
        <View className="flex gap-1">
          <Text className="text-center text-white">Blog</Text>
          <Text className="text-center text-white">Developers</Text>
          <Text className="text-center text-white">Support</Text>
        </View>
        <Text className="text-center text-white">Company</Text>
        <View className="flex gap-1">
          <Text className="text-center text-white">About</Text>
          <Text className="text-center text-white">Our Team</Text>
          <Text className="text-center text-white">Careers</Text>
          <Text className="text-center text-white">Contact</Text>
        </View>
        <View className="flex flex-row items-center gap-4">
          <Image source={facebook} />
          <Image source={twitter} />
          <Image source={pinterest} />
          <Image source={instagram} />
        </View>
      </View>
    </>
  );
};

export default Links;
