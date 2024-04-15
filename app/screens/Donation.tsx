import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { IconButton, Paragraph, Snackbar } from "react-native-paper";
import { SafeAreaView, ScrollView, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Button, TextInput, Text } from "react-native-paper";
import { StyleSheet } from 'react-native';
import { Surface } from "react-native-paper";
//here you import
const stil = StyleSheet.create({
  searchContainer: {
    position: "absolute",
    top: 40,
    left: 5,
    right: 5,
    zIndex: 100,
    borderColor: "#8B8484",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
  },
  searchInput: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  Text1: {
    fontSize: 28,
    fontWeight: 'bold', 
    marginTop: 70,
    marginLeft: 10,
    marginBottom: 20,
    textAlign: 'center',
    position: 'absolute',
    color: '#686060'
  
  },
  Text2: {
    fontSize: 24,
    fontWeight: 'bold', 
    marginTop: 125,
    marginLeft: 10,
    marginBottom: 20,
    textAlign: 'center',
    position: 'absolute',
    color: '#7D7373'
  
  },
  Text3: {
    fontSize: 24,
    fontWeight: 'bold', 
    marginTop: 185,
    marginLeft: 10,
    marginBottom: 20,
    textAlign: 'center',
    position: 'absolute',
    color: '#7D7373'
  
  },
  Text4: {
    fontSize: 24,
    fontWeight: 'bold', 
    marginTop: 245,
    marginLeft: 10,
    marginBottom: 20,
    textAlign: 'center',
    position: 'absolute',
    color: '#7D7373'
  
  },
  Text5: {
    fontSize: 24,
    fontWeight: 'bold', 
    marginTop: 305,
    marginLeft: 10,
    marginBottom: 20,
    textAlign: 'center',
    position: 'absolute',
    color: '#7D7373'
  
  },
  Text6: {
    fontSize: 24,
    fontWeight: 'bold', 
    marginTop: 365,
    marginLeft: 10,
    marginBottom: 20,
    textAlign: 'center',
    position: 'absolute',
    color: '#7D7373'
  
  },
  
  
})
const DonationScreen = ({ navigation }: any): any => {
  
  const [search, setSearch] = useState("")
  const updateSearch = (search: string) => {
    setSearch(search)
  };
  const [donation, setDonation] = React.useState(0);
  const [sent, setSent] = React.useState(false)
  const [text, setText] = React.useState("");
  const [WarOrganizations, setSelectedWarOrganization] = useState(null);

  const WarOrganizationsOptions = [
    { label: 'International rescue Committe', value: 'International rescue Committe' },
    { label: 'International Committe of the Red Cross', value: 'International Committe of the Red Cross' },
    { label: 'Catholic Relief Services', value: 'Catholic Relief Services' },
    { label: 'Care International', value: 'Care international' },
    { label: 'INTERSOS', value: 'INTERSOS' },
  ];

  const [selectedGeologicalOrganization, setselectedGeologicalOrganization] = useState(null);

  const GeologicalOrganizations = [
    { label: 'International Federation of Red Cross and Red Crescent Societies', value: 'International Federation of Red Cross and Red Crescent Societies' },
    { label: 'Save the Children', value: 'Save the Children' },
    { label: 'Direct Relief', value: 'Direct Relief' },
    { label: 'ShelterBox', value: 'ShelterBox' },
    { label: 'GlobalGiving', value: 'GlobalGiving' },
  ];
  const [selectedMeteorologicalOrganization, setMeteorologicalOrganization] = useState(null);

  const MeteorologicalOrganizations = [
    { label: 'American Red Cross', value: 'American Red Cross' },
    { label: 'Salvation Army', value: 'Salvation Army' },
    { label: 'Team Rubicon', value: 'Team Rubicon' },
    { label: 'All Hands and Hearts', value: 'All Hands and Hearts' },
    { label: 'World Central Kitchen', value: 'World Central Kitchen' },
  ];
  const [selectedHydrologicalOrganization, setHydrologicalOrganization] = useState(null);

  const HydrologicalOrganizations = [
    { label: 'Tzu Chi Foundation', value: 'Tzu Chi Foundation' },
    { label: 'Mercy Corps', value: 'Mercy Corps' },
    { label: 'Oxfam', value: 'Oxfam' },
    { label: 'International Medical Corps', value: 'International Medical Corps' },
    { label: 'Operation USA', value: 'Operation USA' },
  ];
  const [selectedBiologicalOrganization, setBiologicalOrganization] = useState(null);

  const BiologicalOrganizations = [
    { label: 'Doctors Without Borders', value: 'Doctors Without Borders' },
    { label: 'Center for Disease Control and Prevention', value: 'Center for Disease Control and Prevention' },
    { label: 'World Health Organization', value: 'World Health Organization' },
    { label: 'International Federation of Red Cross and Red Crescent Societies', value: 'International Federation of Red Cross and Red Crescent Societies' },
    { label: 'Direct Relief', value: 'Direct Relief' },
  ];

  return (
    <>
    <Surface style={stil.searchContainer}>
        <TextInput
          placeholder="Search for a specific organization"
          onChangeText={text => updateSearch(text)}
          value={search}
          style={stil.searchInput}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
        />
         <Text style={stil.Text2}>War</Text>
         <Text style={stil.Text3}>Geological Hazards</Text>
         <Text style={stil.Text4}>Meteorological</Text>
         <Text style={stil.Text5}>Hydrological</Text>
         <Text style={stil.Text6}>Biological</Text>
         <Text style={stil.Text1}>Suggestions:</Text>
      </Surface>
      <View style={{ marginVertical: 202, marginLeft: 18, borderColor: '#7D7373'  }}>
        <RNPickerSelect
          placeholder={{label:"Click here to see organization that help with this disaster"}}
          items={WarOrganizationsOptions}
          onValueChange={(value) => setSelectedWarOrganization(value)}
          value={WarOrganizations}
        />
      </View>
      <View style={{ marginVertical: -158, marginLeft: 18, borderColor: '#7D7373'  }}>
        <RNPickerSelect
          placeholder={{label:"Click here to see organization that help with this disaster"}}
          items={GeologicalOrganizations}
          onValueChange={(value) => setselectedGeologicalOrganization(value)}
          value={selectedGeologicalOrganization}
        />
      </View>
      <View style={{ marginVertical: 205, marginLeft: 18, borderColor: '#7D7373'  }}>
        <RNPickerSelect
          placeholder={{label:"Click here to see organization that help with this disaster"}}
          items={MeteorologicalOrganizations}
          onValueChange={(value) => setMeteorologicalOrganization(value)}
          value={selectedMeteorologicalOrganization}
        />
      </View>
      <View style={{ marginVertical: -158, marginLeft: 18, borderColor: '#7D7373'  }}>
        <RNPickerSelect
          placeholder={{label:"Click here to see organization that help with this disaster"}}
          items={HydrologicalOrganizations}
          onValueChange={(value) => setHydrologicalOrganization(value)}
          value={selectedHydrologicalOrganization}
        />
      </View>
      <View style={{ marginVertical: 200, marginLeft: 18, borderColor: '#7D7373'  }}>
        <RNPickerSelect
          placeholder={{label:"Click here to see organization that help with this disaster"}}
          items={BiologicalOrganizations}
          onValueChange={(value) => setBiologicalOrganization(value)}
          value={selectedBiologicalOrganization}
        />
      </View>
     
    </>
  );
}

export default DonationScreen
