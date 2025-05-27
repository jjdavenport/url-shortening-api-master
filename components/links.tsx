import Facebook from "@/assets/images/icon-facebook.svg";
import Instagram from "@/assets/images/icon-instagram.svg";
import Pinterest from "@/assets/images/icon-pinterest.svg";
import Twitter from "@/assets/images/icon-twitter.svg";
import Logo from "@/assets/images/logo.svg";
import { Text, View } from "react-native";

const Links = () => {
  return (
    <>
      <View className="flex items-center gap-6 bg-veryDarkViolet p-4 pt-10 md:flex-row md:items-start md:justify-between">
        <Logo fill="#FFFFFF" />
        <View className="flex flex-col gap-4 md:gap-6">
          <Text className="text-center font-poppins text-white md:text-left">
            Features
          </Text>
          <View className="flex gap-1">
            <Text className="text-center font-poppins text-white md:text-left">
              Link Shortening
            </Text>
            <Text className="text-center font-poppins text-white md:text-left">
              Branded Links
            </Text>
            <Text className="text-center font-poppins text-white md:text-left">
              Analytics
            </Text>
          </View>
        </View>
        <View className="flex flex-col gap-4 md:gap-6">
          <Text className="text-center font-poppins text-white md:text-left">
            Resources
          </Text>
          <View className="flex gap-1">
            <Text className="text-center font-poppins text-white md:text-left">
              Blog
            </Text>
            <Text className="text-center font-poppins text-white md:text-left">
              Developers
            </Text>
            <Text className="text-center font-poppins text-white md:text-left">
              Support
            </Text>
          </View>
        </View>
        <View className="flex flex-col gap-4 md:gap-6">
          <Text className="text-center text-white md:text-left">Company</Text>
          <View className="flex gap-1">
            <Text className="text-center font-poppins text-white md:text-left">
              About
            </Text>
            <Text className="text-center font-poppins text-white md:text-left">
              Our Team
            </Text>
            <Text className="text-center font-poppins text-white md:text-left">
              Careers
            </Text>
            <Text className="text-center font-poppins text-white md:text-left">
              Contact
            </Text>
          </View>
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
