import Facebook from "@/assets/images/icon-facebook.svg";
import Instagram from "@/assets/images/icon-instagram.svg";
import Pinterest from "@/assets/images/icon-pinterest.svg";
import Twitter from "@/assets/images/icon-twitter.svg";
import Logo from "@/assets/images/logo.svg";
import { Text, View } from "react-native";

const Links = () => {
  return (
    <>
      <View className="flex w-full items-center bg-veryDarkViolet">
        <View className="flex w-full max-w-screen-xl items-center gap-6 p-4 pt-10 md:flex-row md:items-start md:justify-between">
          <Logo className="fill-white" />
          <View className="flex flex-col gap-4 md:gap-6">
            <Text className="text-center font-poppins font-bold text-white md:text-left">
              Features
            </Text>
            <View className="flex gap-1">
              <Text className="cursor-pointer text-center font-poppins font-medium text-gray hover:text-cyan md:text-left">
                Link Shortening
              </Text>
              <Text className="cursor-pointer text-center font-poppins font-medium text-gray hover:text-cyan md:text-left">
                Branded Links
              </Text>
              <Text className="cursor-pointer text-center font-poppins font-medium text-gray hover:text-cyan md:text-left">
                Analytics
              </Text>
            </View>
          </View>
          <View className="flex flex-col gap-4 md:gap-6">
            <Text className="text-center font-poppins font-bold text-white md:text-left">
              Resources
            </Text>
            <View className="flex gap-1">
              <Text className="cursor-pointer text-center font-poppins font-medium text-gray hover:text-cyan md:text-left">
                Blog
              </Text>
              <Text className="cursor-pointer text-center font-poppins font-medium text-gray hover:text-cyan md:text-left">
                Developers
              </Text>
              <Text className="cursor-pointer text-center font-poppins font-medium text-gray hover:text-cyan md:text-left">
                Support
              </Text>
            </View>
          </View>
          <View className="flex flex-col gap-4 md:gap-6">
            <Text className="text-center font-bold text-white md:text-left">
              Company
            </Text>
            <View className="flex gap-1">
              <Text className="cursor-pointer text-center font-poppins font-medium text-gray hover:text-cyan md:text-left">
                About
              </Text>
              <Text className="cursor-pointer text-center font-poppins font-medium text-gray hover:text-cyan md:text-left">
                Our Team
              </Text>
              <Text className="cursor-pointer text-center font-poppins font-medium text-gray hover:text-cyan md:text-left">
                Careers
              </Text>
              <Text className="cursor-pointer text-center font-poppins font-medium text-gray hover:text-cyan md:text-left">
                Contact
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4">
            <Facebook className="cursor-pointer fill-white transition-all duration-300 ease-in-out hover:fill-cyan" />
            <Twitter className="cursor-pointer fill-white transition-all duration-300 ease-in-out hover:fill-cyan" />
            <Pinterest className="cursor-pointer fill-white transition-all duration-300 ease-in-out hover:fill-cyan" />
            <Instagram className="cursor-pointer fill-white transition-all duration-300 ease-in-out hover:fill-cyan" />
          </View>
        </View>
      </View>
    </>
  );
};

export default Links;
