import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import UserSvg from "./svgs/UserSvg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <FontAwesome name="bell-o" size={24} color="black" />
      </View>
      <View style={styles.profile}>
        <View>
          <Text style={{ color: "#c0c8d3", fontSize: 17 }}>Sep 18,2020</Text>
          <Text style={{ fontSize: 26, fontWeight: "500", marginTop: 5 }}>
            Ali Nasrullayev
          </Text>
        </View>

        <View>
          <UserSvg></UserSvg>
        </View>
      </View>
      <View style={{ marginTop: 55 }}>
        <Text style={{ fontSize: 35, fontWeight: "900" }}>Projects</Text>
        <View style={styles.features}>
          <Text style={{ fontSize: 16 }}>Website</Text>
          <Text style={{ fontSize: 16, color: "#c0c8d3" }}>Mobile App</Text>
          <Text style={{ fontSize: 16, color: "#c0c8d3" }}>Research</Text>
        </View>
      </View>
      <View style={styles.cardWrapper}>
        <View style={{ ...{ backgroundColor: "#ff773d" }, ...styles.card }}>
          <AntDesign
            name="checkcircleo"
            size={30}
            color="#e3e3e3"
            style={{ marginBottom: 10 }}
          />
          <Text style={{ fontWeight: "900", fontSize: 23, color: "white" }}>
            10
          </Text>
          <Text style={{ color: "#e3e3e3" }}>Complete Task</Text>
        </View>
        <View style={{ ...{ backgroundColor: "#4c2b5a" }, ...styles.card }}>
          <MaterialCommunityIcons
            name="clock-time-nine-outline"
            size={31}
            color="#e3e3e3"
            style={{ marginBottom: 10 }}
          />
          <Text style={{ fontWeight: "900", fontSize: 23, color: "white" }}>
            10
          </Text>
          <Text style={{ color: "#e3e3e3" }}>Complete Task</Text>
        </View>
      </View>
      <View style={styles.boxWrapper}>
        <Text style={{ color: "#ccc", marginBottom: 18 }}>IN PROGRESS</Text>
        <View style={styles.boxWrapper}>
          <View style={styles.box}>
            <Text style={{ fontSize: 18 }}>
              Desing a landing page for WP dark Mode Pro
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  ...styles.text,
                  ...{ backgroundColor: "#f7733d", color: "white" },
                }}
              >
                Aug 3
              </Text>
              <Text
                style={{
                  ...styles.text,
                  ...{ backgroundColor: "#d3cad7", color: "black" },
                }}
              >
                Landing Page
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={{ fontSize: 18 }}>
              Desing a landing page for WP dark Mode Pro
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  ...styles.text,
                  ...{ backgroundColor: "#f7733d", color: "white" },
                }}
              >
                Aug 3
              </Text>
              <Text
                style={{
                  ...styles.text,
                  ...{ backgroundColor: "#d3cad7", color: "black" },
                }}
              >
                Landing Page
              </Text>
            </View>
          </View>
          <View></View>
        </View>
      </View>
      <View style={{ ...styles.button, ...{ zIndex: 99 } }}>
        <Text style={{ ...{ fontSize: 30 }, ...styles.inButton }}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 23,
    marginTop: 40,
    paddingHorizontal: 10,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cardWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 35,
  },
  card: {
    height: 200,
    width: "47%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    borderRadius: 10,
    padding: 18,
    marginBottom: 13,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  text: {
    marginRight: 15,
    paddingHorizontal: 12,
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 1,
  },
  button: {
    position: "absoluter",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  inButton: {
    backgroundColor: "#ff773d",
    color: "white",
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
  },
});
