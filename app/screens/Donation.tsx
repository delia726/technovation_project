import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { IconButton, Paragraph, Snackbar } from "react-native-paper";
import { SafeAreaView, ScrollView, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Button, TextInput, Text } from "react-native-paper";
import { StyleSheet } from 'react-native';
import { Surface } from "react-native-paper";


const stil = StyleSheet.create({
  element:{
    marginBottom: 10
  },
  snackbar: {
    position: 'absolute',
    bottom: 0,
    marginBottom: -300, 
    backgroundColor: '#300A31', 
    width: '100%',
  }
})
const DonationScreen = ({ navigation }: any): any => {
  const [selectedType, setSelectedType] = useState("");
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  function onSubmit() {
    console.log('form submitted');
  }

  const [search, setSearch] = useState("")
  const updateSearch = (search: string) => {
    setSearch(search)
  };
  const [donation, setDonation] = React.useState(0);
  const [sent, setSent] = React.useState(false)
  const [text, setText] = React.useState("");
  const hazardTypes = [
    { label: "War", value: "war" },
    { label: "Hydrological", value: "hydrological" },
    { label: "Biological", value: "biological" },
    { label: "Meteorogical", value: "meteorogical" },
    { label: "Geological", value: "geological" },
  ]
  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        setSent(false);
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [sent]);
  const [selectedOrganization,setSelectedOrganization]= useState("")

  const Organizations=[
    { label: 'International rescue Committe', value: 'International rescue Committe', type:"war" },
    { label: 'International Committe of the Red Cross', value: 'International Committe of the Red Cross', type:"war" },
    { label: 'Catholic Relief Services', value: 'Catholic Relief Services' , type:"war"},
    { label: 'Care International', value: 'Care international', type:"war" },
    { label: 'INTERSOS', value: 'INTERSOS', type:"war" },
    { label: 'International Federation of Red Cross and Red Crescent Societies', value: 'International Federation of Red Cross and Red Crescent Societies', type:"geological" },
    { label: 'Save the Children', value: 'Save the Children', type:"geological" },
    { label: 'Direct Relief', value: 'Direct Relief', type:"geological" },
    { label: 'ShelterBox', value: 'ShelterBox', type:"geological" },
    { label: 'GlobalGiving', value: 'GlobalGiving', type:"geological" },
    { label: 'American Red Cross', value: 'American Red Cross', type:"meteorogical" },
    { label: 'Salvation Army', value: 'Salvation Army', type:"meteorogical"  },
    { label: 'Team Rubicon', value: 'Team Rubicon' , type:"meteorogical" },
    { label: 'All Hands and Hearts', value: 'All Hands and Hearts', type:"meteorogical"  },
    { label: 'World Central Kitchen', value: 'World Central Kitchen', type:"meteorological"  },
    { label: 'Tzu Chi Foundation', value: 'Tzu Chi Foundation', type:"hydrogical"  },
    { label: 'Mercy Corps', value: 'Mercy Corps', type:"hydrological" },
    { label: 'Oxfam', value: 'Oxfam' , type:"hydrological"},
    { label: 'International Medical Corps', value: 'International Medical Corps' , type:"hydrological"},
    { label: 'Operation USA', value: 'Operation USA' , type:"hydrological"},
    { label: 'Doctors Without Borders', value: 'Doctors Without Borders', type:"biological" },
    { label: 'Center for Disease Control and Prevention', value: 'Center for Disease Control and Prevention', type:"biological"  },
    { label: 'World Health Organization', value: 'World Health Organization', type:"biological"  },
    { label: 'International Federation of Red Cross and Red Crescent Societies', value: 'International Federation of Red Cross and Red Crescent Societies', type:"biological"  },
    { label: 'Direct Relief', value: 'Direct Relief', type:"biological"  },
  ]

  return (
    <ScrollView style={{ backgroundColor: '#F4ECD6', alignSelf: 'stretch', display: 'flex', flexDirection: 'column', height: '100%', paddingTop: 80, paddingLeft: 20, paddingRight: 20 }}>

      <RNPickerSelect
        placeholder={{ label: "Select a disaster type" }}
        items={hazardTypes}
        onValueChange={setSelectedType}
        value={selectedType}
        style={{inputIOS:  {...stil.element, fontSize: 20}, inputAndroid: {...stil.element, fontSize: 20}}}
      />

      {selectedType !== "" &&
        <RNPickerSelect
          placeholder={{ label: "Click here to see organization that help with this disaster" }}
          items={Organizations.filter(org=>org.type===selectedType)}
          onValueChange={setSelectedOrganization}
          value={selectedOrganization}
          style={{inputIOS: stil.element, inputAndroid: stil.element}}
        />
      }
  { selectedOrganization !== "" &&  <>
      <TextInput
        label="Amount"
        left={<TextInput.Affix text="$" />}
        style={stil.element}
        inputMode="numeric"
        onChange={ev => setDonation(Number(ev.nativeEvent.text))}
      />
      <TextInput
        label="Cardholder Name"
        onChangeText={(text) => setName(text)}
        style={stil.element}
      />
      <TextInput

        label="Card Number"
        onChangeText={(text) => setCardNumber(text)}
        style={stil.element}
      />
      <TextInput
        label="Expiration Date"
        onChangeText={(text) => setExpiration(text)}
        style={stil.element}
      />

      <TextInput
        label="Security Code"
        onChangeText={(text) => setCvv(text)}
        style={stil.element}
      />
      <Button buttonColor='#300A31' mode="outlined" style={{ alignSelf: 'center', height: 45, width: 200, marginVertical: 10 }}
       onPress={() => setSent(true)}
        textColor="white"
      >Send</Button>
      <Snackbar
        visible={sent}
        onDismiss={() => setSent(false)}
        style={stil.snackbar}
      >
        <Text style={{ color: 'white'}}>Thanks for your donation of {donation}$.</Text>
      </Snackbar>
</>  }
    </ScrollView>



  );
}

export default DonationScreen
