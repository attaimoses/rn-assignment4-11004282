// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      navigation.navigate('Home', { name, email });
    } else {
      alert('Please enter both name and email');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Jobizz</Text>
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.orContinue}>Or continue with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/apple-logo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/google-logo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/facebook-logo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>
        Haven't an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  brand: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0052CC',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1E1E1E',
  },
  subtitle: {
    fontSize: 16,
    color: '#7D7D7D',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    paddingLeft: 15,
    width: '100%',
    backgroundColor: '#F8F8F8',
  },
  loginButton: {
    height: 50,
    backgroundColor: '#0052CC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContinue: {
    fontSize: 14,
    color: '#7D7D7D',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  registerText: {
    fontSize: 14,
    color: '#7D7D7D',
  },
  registerLink: {
    color: '#0052CC',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
