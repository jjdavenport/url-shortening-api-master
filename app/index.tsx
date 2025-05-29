import Advanced from "@/components/advanced";
import Boost from "@/components/boost";
import Content from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Input from "@/components/input";
import Links from "@/components/links";
import List from "@/components/list";
import UrlList from "@/components/urls-list";
import "@/global.css";
import useAPI from "@/hooks/api-context";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useMediaQuery } from "react-responsive";

export default function Index() {
  const { input, setInput, fetchData, urls } = useAPI();
  const [openMenu, setOpenMenu] = useState(false);
  const tablet = useMediaQuery({ minWidth: 768 });

  if (tablet) {
    return (
      <ScrollView>
        <View className="flex h-full min-h-screen">
          <View className="flex flex-1 items-center gap-10 text-lg">
            <Header tablet={tablet} />
            <View className="flex w-full items-center">
              <View className="flex w-11/12 max-w-screen-lg flex-row items-center justify-between gap-16">
                <Content />
                <Hero tablet={tablet} />
              </View>
            </View>
            <Input
              tablet={tablet}
              onPress={fetchData}
              input={input}
              setInput={setInput}
            />
            <View className="w-full">
              <View className="flex items-center gap-10 bg-lightGray pb-40 pt-20 md:gap-16">
                <UrlList data={urls} />
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
          <Hero tablet={tablet} />
          <Content />
          <Input
            tablet={tablet}
            onPress={fetchData}
            input={input}
            setInput={setInput}
          />
          <View>
            <View className="flex gap-10 bg-lightGray pb-10 pt-28">
              <UrlList data={urls} />
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
