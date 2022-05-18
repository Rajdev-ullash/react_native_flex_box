import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={styles.crypto_view}>
            <Text style={styles.crypto_text}>Crypto Currency</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <View>
              <View style={styles.bit_layout}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <FontAwesome5 name="bitcoin" size={55} color="orange" />
                  <Text style={styles.bit_text}>
                    BTC |<Text style={styles.bit_baseText}> Bitcoin</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_text2}>6070.26</Text>
                </View>
              </View>
              <View style={styles.bit_time_layout}>
                <View style={{ marginHorizontal: 38, marginBottom: 30 }}>
                  <Text style={styles.bit_time}>
                    24h: <Text style={styles.bit_baseTime}>1.15%</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_time}>
                    7d: <Text style={styles.bit_baseTime}>5.65%</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View style={styles.bit_layout}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <FontAwesome5 name="ethereum" size={55} color="black" />
                  <Text style={styles.bit_text}>
                    ETH |<Text style={styles.bit_baseText}> Ethereum</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_text2}>6070.26</Text>
                </View>
              </View>
              <View style={styles.bit_time_layout}>
                <View style={{ marginHorizontal: 38, marginBottom: 30 }}>
                  <Text style={styles.bit_time}>
                    24h: <Text style={styles.bit_baseTime2}>-2.15%</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_time}>
                    7d: <Text style={styles.bit_baseTime2}>-5.65%</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View style={styles.bit_layout}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <MaterialCommunityIcons
                    name="litecoin"
                    size={55}
                    color="#00ADB5"
                  />
                  <Text style={styles.bit_text}>
                    LTC |<Text style={styles.bit_baseText}> Litecoin</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_text2}>6070.26</Text>
                </View>
              </View>
              <View style={styles.bit_time_layout}>
                <View style={{ marginHorizontal: 38, marginBottom: 30 }}>
                  <Text style={styles.bit_time}>
                    24h: <Text style={styles.bit_baseTime2}>-3.15%</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_time}>
                    7d: <Text style={styles.bit_baseTime2}>-8.65%</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View style={styles.bit_layout}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <FontAwesome5 name="viacoin" size={55} color="#FF5F00" />
                  <Text style={styles.bit_text}>
                    VIC |<Text style={styles.bit_baseText}> Viacoin</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_text2}>6070.26</Text>
                </View>
              </View>
              <View style={styles.bit_time_layout}>
                <View style={{ marginHorizontal: 38, marginBottom: 30 }}>
                  <Text style={styles.bit_time}>
                    24h: <Text style={styles.bit_baseTime}>1.15%</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_time}>
                    7d: <Text style={styles.bit_baseTime}>5.65%</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View style={styles.bit_layout}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <FontAwesome5 name="bitcoin" size={55} color="orange" />
                  <Text style={styles.bit_text}>
                    BTC |<Text style={styles.bit_baseText}> Bitcoin</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_text2}>6070.26</Text>
                </View>
              </View>
              <View style={styles.bit_time_layout}>
                <View style={{ marginHorizontal: 38, marginBottom: 30 }}>
                  <Text style={styles.bit_time}>
                    24h: <Text style={styles.bit_baseTime}>1.15%</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_time}>
                    7d: <Text style={styles.bit_baseTime}>5.65%</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View style={styles.bit_layout}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <FontAwesome5 name="bitcoin" size={55} color="orange" />
                  <Text style={styles.bit_text}>
                    BTC |<Text style={styles.bit_baseText}> Bitcoin</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_text2}>6070.26</Text>
                </View>
              </View>
              <View style={styles.bit_time_layout}>
                <View style={{ marginHorizontal: 38, marginBottom: 30 }}>
                  <Text style={styles.bit_time}>
                    24h: <Text style={styles.bit_baseTime}>1.15%</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_time}>
                    7d: <Text style={styles.bit_baseTime}>5.65%</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View style={styles.bit_layout}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <FontAwesome5 name="bitcoin" size={55} color="orange" />
                  <Text style={styles.bit_text}>
                    BTC |<Text style={styles.bit_baseText}> Bitcoin</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_text2}>6070.26</Text>
                </View>
              </View>
              <View style={styles.bit_time_layout}>
                <View style={{ marginHorizontal: 38, marginBottom: 30 }}>
                  <Text style={styles.bit_time}>
                    24h: <Text style={styles.bit_baseTime}>1.15%</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_time}>
                    7d: <Text style={styles.bit_baseTime}>5.65%</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View style={styles.bit_layout}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <FontAwesome5 name="bitcoin" size={55} color="orange" />
                  <Text style={styles.bit_text}>
                    BTC |<Text style={styles.bit_baseText}> Bitcoin</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_text2}>6070.26</Text>
                </View>
              </View>
              <View style={styles.bit_time_layout}>
                <View style={{ marginHorizontal: 38, marginBottom: 30 }}>
                  <Text style={styles.bit_time}>
                    24h: <Text style={styles.bit_baseTime}>1.15%</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_time}>
                    7d: <Text style={styles.bit_baseTime}>5.65%</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View style={styles.bit_layout}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <FontAwesome5 name="bitcoin" size={55} color="orange" />
                  <Text style={styles.bit_text}>
                    BTC |<Text style={styles.bit_baseText}> Bitcoin</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_text2}>6070.26</Text>
                </View>
              </View>
              <View style={styles.bit_time_layout}>
                <View style={{ marginHorizontal: 38, marginBottom: 30 }}>
                  <Text style={styles.bit_time}>
                    24h: <Text style={styles.bit_baseTime}>1.15%</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_time}>
                    7d: <Text style={styles.bit_baseTime}>5.65%</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View style={styles.bit_layout}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <FontAwesome5 name="bitcoin" size={55} color="orange" />
                  <Text style={styles.bit_text}>
                    BTC |<Text style={styles.bit_baseText}> Bitcoin</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_text2}>6070.26</Text>
                </View>
              </View>
              <View style={styles.bit_time_layout}>
                <View style={{ marginHorizontal: 38, marginBottom: 30 }}>
                  <Text style={styles.bit_time}>
                    24h: <Text style={styles.bit_baseTime}>1.15%</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.bit_time}>
                    7d: <Text style={styles.bit_baseTime}>5.65%</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  crypto_view: {
    // flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  crypto_text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    // justifyContent: "center",
  },

  bit_layout: {
    flexDirection: "row",
    margin: 2,
    padding: 5,
    // borderBottomColor: "#DDDDDD",
    // borderBottomWidth: 1,
  },

  bit_text_layout: {
    justifyContent: "space-between",
  },

  bit_text: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
    // alignItems: "center",
    marginTop: 13,
  },
  bit_text2: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    marginTop: 13,
  },
  bit_baseText: {
    fontWeight: "normal",
  },
  bit_time: {
    fontSize: 20,
    fontWeight: "bold",
    // marginHorizontal: 15,
    // alignItems: "center",
    // marginTop: 13,
  },
  bit_baseTime: {
    fontWeight: "normal",
    color: "#00ADB5",
  },
  bit_baseTime2: {
    fontWeight: "normal",
    color: "red",
  },
  bit_time_layout: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
