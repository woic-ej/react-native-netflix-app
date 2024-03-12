import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const AddWatchListButton = () => {
  return (
    <Pressable>
      <View style={styles.playButton}>
        <Icon name="plus" size={24} color="#FCFFFF" />
        <Text style={styles.buttonText}>ADD Watch</Text>
      </View>
    </Pressable>
  );
};

export default AddWatchListButton;

const styles = StyleSheet.create({
  playButton: {
    backgroundColor: "#171717",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FCFFFF",
  },
});
