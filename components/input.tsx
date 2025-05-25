import { Button, TextInput, View } from "react-native";

const Input = () => {
  return (
    <>
      <View>
        <TextInput placeholder="Shorten a link here..." />
        <Button>Shorten It!</Button>
      </View>
    </>
  );
};

export default Input;
