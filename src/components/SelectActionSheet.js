import { Actionsheet, Divider } from "native-base";
import { View } from "react-native";

const SelectActionSheet = ({ isOpen = false, setIsOpen, items = [] }) => {
  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Actionsheet.Content>
        {items.map((item) => (
          <View style={{ width: "100%" }} key={item.id}>
            <Actionsheet.Item>{item.title}</Actionsheet.Item>
            <Divider />
          </View>
        ))}
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default SelectActionSheet;
