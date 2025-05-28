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
import { useMediaQuery } from "react-responsive";

export default function Index() {
  const [openMenu, setOpenMenu] = useState(false);
  const tablet = useMediaQuery({ minWidth: 768 });

  if (tablet) {
    return (
      <ScrollView>
        <View className="flex h-full min-h-screen">
          <View className="flex flex-1 items-center gap-10 text-lg">
            <Header tablet={tablet} />
            <View className="flex w-full items-end">
              <View className="flex w-full max-w-[90rem] flex-row items-center justify-between">
                <Content />
                <Hero />
              </View>
            </View>
            <Input />
            <View className="w-full">
              <View className="bg-lightGray flex items-center gap-10 pt-28">
                <Advanced />
                <List />
              </View>
              <Boost tablet={tablet} />
              <Links />
            </View>
          </View>
          <Footer />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView scrollEnabled={!openMenu}>
      <View className="flex h-full min-h-screen">
        <View className="flex flex-1">
          <Header
            tablet={tablet}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
          <Hero />
          <Content />
          <Input />
          <View>
            <View className="bg-lightGray flex gap-10 pb-10 pt-28">
              <Advanced />
              <List />
            </View>
            <Boost tablet={tablet} />
            <Links />
          </View>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}
