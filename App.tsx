import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text} from 'react-native';
export default function App() {return <SafeAreaProvider><SafeAreaView style={styles.root}><Text accessibilityRole="header" style={styles.title}>Liberu project boilerplate</Text><Text>React Native application foundation.</Text><Text>Connect reviewed Laravel APIs before enabling protected workflows.</Text><StatusBar style="auto"/></SafeAreaView></SafeAreaProvider>;}
const styles = StyleSheet.create({root:{flex:1, justifyContent:'center', padding:24, gap:16, backgroundColor:'#fff'}, title:{fontSize:28,fontWeight:'600'}});
