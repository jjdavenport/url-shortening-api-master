import { ReactNode } from "react";
import { Button } from "react-aria-components";
import { Platform, TouchableOpacity } from "react-native";

type Props = {
  onPress?: () => void;
  children: ReactNode;
  className: string;
  testID: string;
};

const AriaButton = ({ onPress, children, className, testID }: Props) => {
  if (Platform.OS === "web") {
    return (
      <Button data-testid={testID} onClick={onPress} className={className}>
        {children}
      </Button>
    );
  }

  return (
    <TouchableOpacity className={className} testID={testID} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default AriaButton;
