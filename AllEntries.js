import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import EditEntry from "./EditEntry";

export default function AllEntries({ navigation }) {
  // const [ca]
  return (
    <View style={styles.container}>
      <Text>AllEntries</Text>
      <Button
        title="Add An Entry"
        onPress={() => navigation.navigate("AddAnEntry")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
