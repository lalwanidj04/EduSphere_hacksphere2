import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import * as Speech from "expo-speech";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ContentScreenProps {
    navigateTo: (screen: string) => void;
}

const EidPage = ({ navigateTo }: ContentScreenProps) => {

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text);
  };

  return (
    <View className="flex-1 bg-white p-6">
      
      {/* Heading at the Top */}
      <Text className="text-4xl font-bold text-gray-800 text-center mt-8">
        GREETING
      </Text>

      {/* Main Content Centered */}
      <View className="flex-1 items-center justify-center">
        {/* Lottie Animation */}
        <LottieView 
          source={require("../../assets/animations/eid animation.json")}
          autoPlay 
          loop 
          style={{ width: 300, height: 300 }}
        />

        {/* Happy Diwali Text with Speaker */}
        <View className="flex-row items-center mt-6">
          <Text className="text-3xl font-bold text-black">Eid Mubarak</Text>
          <TouchableOpacity onPress={() => speak("Eid Mubarak")} className="ml-3">
            <MaterialCommunityIcons name="volume-high" size={35} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity 
        className="bg-white-600 border p-4 rounded-lg mt-6 items-center"
        onPress={()=>navigateTo("EidItemsPage")}
      >
        <Text className="text-black text-lg font-bold">Next</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default EidPage;
