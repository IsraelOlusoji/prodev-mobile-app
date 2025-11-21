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

export default function Join() {
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
          <Text style={styles.subText}>Need help?</Text>
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Join now</Text>
          <Text style={styles.subText}>
            Create an account to unlock premium property deals.
          </Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Full name</Text>
            <TextInput
              placeholder="Cole Baidoo"
              style={styles.formControl}
              placeholderTextColor="#7B7B7B"
            />
          </View>
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
                placeholder="Create a password"
                secureTextEntry
                style={styles.passwordControl}
                placeholderTextColor="#7B7B7B"
              />
              <Text>Show</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>
            By continuing, you agree to our Terms and Privacy Policy.
          </Text>
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
        <Text style={styles.signupTitleText}>Already a member? </Text>
        <Link href="/signin" asChild>
          <TouchableOpacity>
            <Text style={styles.signupSubTitleText}>Sign in</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

