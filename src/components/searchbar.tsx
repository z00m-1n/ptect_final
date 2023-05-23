import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, Pressable } from "react-native";
import { Icon } from "@rneui/themed";
import Constant from "../global/constant";


interface Props {
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>
  searchPhrase : string
  clicked : boolean
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  onClick : ()=> void
}

function Entypo(props: { onPress: () => void, size: number, color: string, name: string, style: { padding: number } }) {
  return null;
}

const CustomSearchbar = ({searchPhrase, setSearchPhrase,onClick}:Props) => {
  return (
    <Pressable onPress={onClick}>
    <View style={styles.container}>
      <View
        style={
        styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Icon name="search" size={25} color="#3C3C43" />
        {/* Input field */}
        <TextInput editable={false}
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'#3C3C43'}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {

          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}

      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}

    </View>
    </Pressable>
  );
};
export default CustomSearchbar;

// styles
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: Constant.paddingHorizontal
  },
  searchBar__unclicked: {
    paddingHorizontal : 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "90%",
    color:'#3C3C43'
  },
});