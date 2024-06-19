// components/Card.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ details }) => {
  return (
    <View style={styles.card}>
      <Image source={details.logo} style={styles.logo} />
      <Text style={styles.title}>{details.title}</Text>
      <Text style={styles.company}>{details.company}</Text>
      <Text style={styles.salary}>{details.salary}</Text>
      <Text style={styles.location}>{details.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    elevation: 2,
    width: 250,
    backgroundColor: '#F0F4F8',
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1E1E1E',
  },
  company: {
    fontSize: 14,
    color: '#7D7D7D',
    marginBottom: 5,
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0000',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#7D7D7D',
  },
});

export default Card;
