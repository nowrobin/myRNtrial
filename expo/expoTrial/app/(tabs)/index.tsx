import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import CalendarView from "../../components/Calendar";
import { useEffect, useRef, useState } from "react";
import { getUniqueId } from "react-native-device-info";
import Kmap from "../../components/KakaoMap";

interface Message {
  user: string;
  message: string;
}

export default function TabOneScreen() {
  const [serverState, setServerState] = useState("Loading...");
  const [messageText, setMessageText] = useState("");
  const [serverMsg, setServerMsg] = useState([]);

  let userId = getUniqueId();
  const serverMessagesList: Message[] = [];
  const webSocket = useRef(null);
  console.log(webSocket);
  // useEffect(() => {
  //   webSocket.current = new WebSocket(`ws://로컬호스트아이피`);
  // }, []);

  // webSocket.current.onopen = () => {
  //   setServerState("Connected to the server");
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Kmap></Kmap>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <CalendarView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
