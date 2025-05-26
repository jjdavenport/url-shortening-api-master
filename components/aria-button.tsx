import { ReactNode } from "react";
import { Button } from "react-aria-components";
import { Platform, TouchableOpacity } from "react-native";

type Props = {
  onPress?: () => void;
  children: ReactNode;
  className: string;
};

const AriaButton = ({ onPress, children, className }: Props) => {
  if (Platform.OS === "web") {
    return (
      <Button onClick={onPress} className={className}>
        {children}
      </Button>
    );
  }

  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export default AriaButton;
