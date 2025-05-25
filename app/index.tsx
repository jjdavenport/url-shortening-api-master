import Advanced from "@/components/advanced";
import Boost from "@/components/boost";
import Content from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Input from "@/components/input";
import Links from "@/components/links";
import List from "@/components/list";
import "@/global.css";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View className="flex h-full min-h-screen">
        <View className="font-poppins flex flex-1 gap-10 text-lg">
          <Header />
          <Hero />
          <Content />
          <Input />
          <View>
            <View className="bg-gray flex gap-10 pt-20">
              <Advanced />
              <List />
            </View>
            <Boost />
            <Links />
          </View>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}
