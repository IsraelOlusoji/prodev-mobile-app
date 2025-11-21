import { Link } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  BACKGROUNDIMAGE,
  HEROLOGO,
  HEROLOGOGREEN,
} from "@/constants";
import { styles } from "@/styles/_mainstyle";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          resizeMode="cover"
          style={styles.backgroundImageContainer}
        >
          <View style={styles.logoContainer}>
            <Image source={HEROLOGO} resizeMode="contain" />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Find your favorite {"\n"}place here
            </Text>
            <View style={styles.titleSubTextContainer}>
              <Text style={styles.titleSubText}>
                The best prices for over 2 million properties worldwide
              </Text>
            </View>
          </View>

          <View style={styles.buttonGroup}>
            <Link href="/join" asChild>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Join here</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/signin" asChild>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Sign in</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <Link href="/(home)" asChild>
            <TouchableOpacity style={styles.buttonGroupSubText}>
              <Image source={HEROLOGOGREEN} resizeMode="contain" />
              <Text style={styles.titleSubText}>Continue to home</Text>
            </TouchableOpacity>
          </Link>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
