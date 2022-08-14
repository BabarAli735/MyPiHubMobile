import { FontAwesome5 } from "react-native-vector-icons";
import ImagePicker from 'react-native-image-crop-picker';
import { Center } from "native-base";
import React from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";

export default ({ image, onChange, style = {} }) => {
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
      <Center borderWidth={0.5} overflow={"hidden"}>
        {image ? (
          <Image source={{ uri: image }} style={style} />
        ) : (
          <FontAwesome5 name="camera" size={30} color="gray" />
        )}
      </Center>
    </TouchableOpacity>
  );
};
