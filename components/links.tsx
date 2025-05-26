import Facebook from "@/assets/images/icon-facebook.svg";
import Instagram from "@/assets/images/icon-instagram.svg";
import Pinterest from "@/assets/images/icon-pinterest.svg";
import Twitter from "@/assets/images/icon-twitter.svg";
import Logo from "@/assets/images/logo.svg";
import { Text, View } from "react-native";

const Links = () => {
  return (
    <>
      <View className="flex items-center gap-6 bg-veryDarkBlue p-4">
        <Logo fill="#FFFFFF" />
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
          <Facebook />
          <Twitter />
          <Pinterest />
          <Instagram />
        </View>
      </View>
    </>
  );
};

export default Links;
