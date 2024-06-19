// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import FeaturedCard from '../components/FeaturedCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const popularJobs = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('../assets/burger-king-logo.png') },
    { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('../assets/beats-logo.png') },
    { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('../assets/facebook-logo.png') },
    // Additional jobs here...
  ];

  const featuredJobs = [
    { id: '4', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('../assets/facebook-logo.png') },
    { id: '5', title: 'Software Engineer', company: 'Google', salary: '$160,000', location: 'Accra, Ghana', logo: require('../assets/google-logo.png') },
    // Additional jobs here...
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={require('../assets/profile-picture.png')} style={styles.profileImage} />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('../assets/filter.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        data={featuredJobs}
        renderItem={({ item }) => <FeaturedCard details={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => <Card details={item} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,  // Added padding at the top to avoid overlapping with the status bar
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  email: {
    fontSize: 16,
    color: '#7D7D7D',
  },
  profileContainer: {
    marginLeft: 'auto',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    backgroundColor: '#F8F8F8',
  },
  filterButton: {
    marginLeft: 10,
  },
  filterIcon: {
    width: 30,
    height: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  seeAll: {
    fontSize: 14,
    color: '#0052CC',
  },
});

export default HomeScreen;
