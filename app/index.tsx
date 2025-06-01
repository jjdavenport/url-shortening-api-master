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
import Head from "expo-router/head";
import { useState } from "react";
import { ScrollView, View, useWindowDimensions } from "react-native";

export default function Index() {
  const { input, setInput, handlePress, handleBlur, urls, error } = useAPI();
  const [openMenu, setOpenMenu] = useState(false);
  const { width } = useWindowDimensions();
  const tablet = width >= 768;

  if (!width) return null;

  if (tablet) {
    return (
      <>
        <Head>
          <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
        </Head>

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
                error={error}
                tablet={tablet}
                onPress={handlePress}
                input={input}
                setInput={setInput}
                onBlur={handleBlur}
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
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
      </Head>

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
              error={error}
              tablet={tablet}
              onPress={handlePress}
              input={input}
              setInput={setInput}
              onBlur={handleBlur}
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
    </>
  );
}
