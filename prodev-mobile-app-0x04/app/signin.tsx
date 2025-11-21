import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { FACEBOOKLOGO, GOOGLELOGO } from "@/constants";
import { styles } from "@/styles/_join";

export default function SignIn() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.iconsection}>
          <Link href="/" asChild>
            <TouchableOpacity>
              <Text>Back</Text>
            </TouchableOpacity>
          </Link>
          <Text style={styles.subText}>Welcome back</Text>
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Sign in</Text>
          <Text style={styles.subText}>
            Access your saved listings and track your bookings.
          </Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email address</Text>
            <TextInput
              placeholder="cole@prodev.com"
              keyboardType="email-address"
              style={styles.formControl}
              placeholderTextColor="#7B7B7B"
            />
          </View>
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                placeholder="Enter your password"
                secureTextEntry
                style={styles.passwordControl}
                placeholderTextColor="#7B7B7B"
              />
              <Text>Show</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} resizeMode="contain" />
            <Text style={styles.secondaryButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} resizeMode="contain" />
            <Text style={styles.secondaryButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>New to ProDev? </Text>
        <Link href="/join" asChild>
          <TouchableOpacity>
            <Text style={styles.signupSubTitleText}>Create an account</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

