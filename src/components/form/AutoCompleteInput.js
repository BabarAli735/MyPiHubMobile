//Example of React Native AutoComplete Input
//https://aboutreact.com/example-of-react-native-autocomplete-input/

import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//import Autocomplete component
import Autocomplete from "react-native-autocomplete-input";

export const data = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
  { userId: 1, id: 4, title: "et porro tempora", completed: true },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  { userId: 1, id: 8, title: "quo adipisci enim quam ut ab", completed: true },
  { userId: 1, id: 9, title: "molestiae perspiciatis ipsa", completed: false },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

const AutoCompleteInput = () => {
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});

  useEffect(() => {
    setFilms(["data", "new", "wow", "w", "W"]);
    //setting the data in the films state
  }, []);

  const findFilm = (query) => {
    //method called everytime when we change the value of the input
    if (query) {
      //making a case insensitive regular expression to get similar value from the film json
      const regex = new RegExp(`${query.trim()}`, "i");
      //setting the filtered film qarray according the query from the input
      setFilteredFilms(films.filter((film) => film.search(regex) >= 0));
    } else {
      //if the query is null then return blank
      setFilteredFilms([]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          //data to show in suggestion
          data={filteredFilms}
          //default value if you want to set something in input
          defaultValue={
            JSON.stringify(selectedValue) === "{}" ? "" : selectedValue.title
          }
          /*onchange of the text changing the state of the query which will trigger
          the findFilm method to show the suggestions*/
          onChangeText={(text) => findFilm(text)}
          placeholder="Enter the film title"
          renderItem={({ item }) => (
            //you can change the view you want to show in suggestion from here
            <TouchableOpacity
              onPress={() => {
                console.log(item);
                setSelectedValue(item);
                setFilteredFilms([]);
              }}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1,
    padding: 16,
    marginTop: 40,
  },
  autocompleteContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 0,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  infoText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default AutoCompleteInput;
