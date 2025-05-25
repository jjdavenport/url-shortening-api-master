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
    <View>
      <ScrollView>
        <Header />
        <Hero />
        <Content />
        <Input />
        <Advanced />
        <List />
        <Links />
        <Boost />
        <Footer />
      </ScrollView>
    </View>
  );
}
