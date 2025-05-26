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
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function Index() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <ScrollView scrollEnabled={!openMenu}>
      <View className="flex h-full min-h-screen">
        <View className="flex flex-1 text-lg">
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Hero />
          <Content />
          <Input />
          <View>
            <View className="flex gap-10 bg-gray pt-28">
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
