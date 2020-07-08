import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar, TouchableRipple } from "react-native-paper";
import Constants from "../../constants/Constants";

import { AntDesign } from "@expo/vector-icons";

const SeachScreen = (props) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.searchViewWrapper}>
      <View style={styles.searchBarWrapper}>
        <View style={styles.searchBarFlexWrapper}>
          <View style={{ flex: 6 }}>
            <Searchbar
              autoFocus={true}
              clearIcon={() => <AntDesign name="closecircle" />}
              icon="arrow-left"
              placeholder="Search Products"
              onChangeText={onChangeSearch}
              value={searchQuery}
              onIconPress={() => props.navigation.pop()}
            />
          </View>
          <TouchableRipple
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            onPress={() => props.navigation.navigate("Products")}
          >
            <Text style={{ fontWeight: "bold" }}>{`Go`}</Text>
          </TouchableRipple>
        </View>
      </View>
      <View
        style={{ flex: 15, backgroundColor: Constants.headerTintColor }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchViewWrapper: {
    flex: 1,
  },
  searchBarWrapper: {
    height: 50,
  },

  searchBarFlexWrapper: {
    flexDirection: "row",
  },
});

export default SeachScreen;