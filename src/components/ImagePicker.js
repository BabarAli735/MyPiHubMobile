import  FontAwesome5  from "react-native-vector-icons/FontAwesome5";
import ImagePicker from 'react-native-image-crop-picker';
import { Center } from "native-base";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

export default ({ image, onChange }) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      onChange(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <Center
        borderWidth={0.5}
        borderRadius={"full"}
        h="32"
        w="32"
        overflow={"hidden"}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <FontAwesome5 name="camera" size={30} color="gray" />
        )}
      </Center>
    </TouchableOpacity>
  );
};
