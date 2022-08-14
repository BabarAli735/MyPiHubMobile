import React, { memo, useState } from "react";
import DropDown from "react-native-dropdown-picker";

const DropDownPicker = ({ placeholder }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  // change these
  const [items, setItems] = useState([
    { label: "Primary Care", value: "Primacy Care" },
    { label: "Cardilogy", value: "Cardiology" },
  ]);

  return (
    <DropDown
      searchable={true}
      placeholder={placeholder || "select"}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

export default memo(DropDownPicker);
