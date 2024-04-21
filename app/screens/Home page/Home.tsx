import React, { useState } from "react";
import MapView from 'react-native-maps';
import { Surface } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { Marker } from "react-native-maps";
import { List } from 'react-native-paper';
import { Dialog, Portal, Text, Button, Snackbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IconButton, MD3Colors } from 'react-native-paper';
import { View } from "react-native";
interface Disaster{
  longitude: number,
  latitude: number,
  type: "war"| "hydrological"|"biological"|"meteorological"|"landslide",
  gravity: "severe"| "medium"| "low",

}
const mockDisaster: Disaster[]=[
  
  
    {"longitude":31.1828699,"latitude":48.383022,"type":"war","gravity":"severe"},
    {"longitude":26.287363627765556,"latitude":34.333332,"type":"war","gravity":"severe"},
    {"longitude":48.1748476,"latitude":15.5539046,"type":"war","gravity":"medium"},
    {"longitude":-72.9301367,"latitude":4.1156735,"type":"war","gravity":"low"},
    {"longitude":-77.774373,"latitude":19.311143,"type":"war","gravity":"low"},
    {"longitude":121.0211024,"latitude":23.553118,"type":"landslide","gravity":"severe"},
    {"longitude":138.0,"latitude":36.0,"type":"landslide","gravity":"severe"},
    {"longitude":100.7831,"latitude":-0.7893,"type":"landslide","gravity":"severe"},
    {"longitude":-19.0208,"latitude":64.9631,"type":"landslide","gravity":"severe"},
    {"longitude":8.6750,"latitude":61.0516,"type":"landslide","gravity":"medium"},
    {"longitude":140.1486,"latitude":38.2806,"type":"landslide","gravity":"severe"},
    {"longitude":-87.1181,"latitude":20.5888,"type":"landslide","gravity":"low"},
    {"longitude":17.5707,"latitude":17.5707,"type":"meteorological","gravity":"severe"},
    {"longitude":-97.0929,"latitude":35.0078,"type":"meteorological","gravity":"medium"},
    {"longitude":-116.5765,"latitude":53.9333,"type":"meteorological","gravity":"low"},
    {"longitude":151.2093,"latitude":-33.8688,"type":"meteorological","gravity":"low"},
    {"longitude":90.3563,"latitude":23.6850,"type":"meteorological","gravity":"low"},
    {"longitude":-80.15310425528218,"latitude":28.972439768217034,"type":"biological","gravity":"severe"},
    {"longitude":-64.20516318561534,"latitude":-15.887452253943836,"type":"biological","gravity":"low"},
    {"longitude":-54.5489932481225,"latitude":-8.053900526654973,"type":"biological","gravity":"medium"},
    {"longitude":17.8132,"latitude":-30.5595,"type":"war","gravity":"medium"},
    {"longitude":-76.2530,"latitude":-84.7153,"type":"war","gravity":"medium"},
    {"longitude":139.6917,"latitude":35.6895,"type":"war","gravity":"severe"},
    {"longitude":-0.1276,"latitude":51.5074,"type":"war","gravity":"severe"},
    {"longitude":-78.8494,"latitude":35.7822,"type":"war","gravity":"low"},
    {"longitude":-43.1729,"latitude":-22.9068,"type":"landslide","gravity":"severe"},
    {"longitude":151.2093,"latitude":-33.8688,"type":"landslide","gravity":"medium"},
    {"longitude":17.8753,"latitude":-29.4436,"type":"landslide","gravity":"low"},
    {"longitude":86.9250,"latitude":27.9881,"type":"landslide","gravity":"low"},
    {"longitude":7.2644,"latitude":43.7102,"type":"meteorological","gravity":"medium"},
    {"longitude":-95.7129,"latitude":37.0902,"type":"meteorological","gravity":"medium"},
    {"longitude":-68.1193,"latitude":-16.5000,"type":"meteorological","gravity":"low"},
    {"longitude":138.6010,"latitude":-34.9285,"type":"meteorological","gravity":"low"},
    {"longitude":28.0473,"latitude":-26.2041,"type":"biological","gravity":"severe"},
    {"longitude":100.5018,"latitude":13.7563,"type":"biological","gravity":"medium"},
    {"longitude":13.4050,"latitude":52.5200,"type":"biological","gravity":"medium"},
    {"longitude":-77.0369,"latitude":38.9072,"type":"biological","gravity":"low"},
    {"longitude":-58.3816,"latitude":-34.6037,"type":"biological","gravity":"low"},
    {"longitude":133.7751,"latitude":-25.2744,"type":"biological","gravity":"low"},
    {"longitude":126.9780,"latitude":37.5665,"type":"war","gravity":"medium"},
    {"longitude":139.6917,"latitude":35.6895,"type":"war","gravity":"severe"},
    {"longitude":100.5018,"latitude":13.7563,"type":"war","gravity":"severe"},
    {"longitude":103.8198,"latitude":1.3521,"type":"war","gravity":"low"},
    {"longitude":120.9842,"latitude":23.6978,"type":"landslide","gravity":"severe"},
    {"longitude":136.9064,"latitude":35.1815,"type":"landslide","gravity":"medium"},
    {"longitude":121.5654,"latitude":25.0320,"type":"landslide","gravity":"low"},
    {"longitude":77.5946,"latitude":12.9716,"type":"meteorological","gravity":"severe"},
    {"longitude":104.1954,"latitude":35.8617,"type":"meteorological","gravity":"medium"},
    {"longitude":114.0579,"latitude":22.5431,"type":"meteorological","gravity":"low"},
    {"longitude":160.5975,"latitude":61.1605,"type":"war","gravity":"medium"},
    {"longitude":112.3698,"latitude":64.9517,"type":"war","gravity":"severe"},
    {"longitude":105.3188,"latitude":61.5240,"type":"landslide","gravity":"severe"},
    {"longitude":80.3190,"latitude":61.3700,"type":"landslide","gravity":"medium"},
    {"longitude":70.3190,"latitude":50.1970,"type":"landslide","gravity":"low"}    
]
const modelToIcon={
war:"warning", 
landslide: "landslide",
meteorological: "cloud",
hydrological: "water",
biological: "man",
}
const modelToColor={
  severe: "red",
  medium: "orange",
  low: "yellow",
}
const stil = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    position: "absolute",
    top: 30,
    left: 5,
    right: 5,
    zIndex: 100,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
  },
  searchInput: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  searchButton: {
    backgroundColor: "transparent"
  },
  buttons: {
    position: "absolute",
    top: 100,
    left: 5,
    right: 5,
    zIndex: 100,
    flex: 1,
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  sections: {
    position: "absolute",
    top: 160,
    left: 5,
    right: 5,
    zIndex: 100,
    maxHeight: 400,
    backgroundColor: 'white'
  }

});

export default function HomeScreen({ navigation }: any) {
  const [search, setSearch] = useState("")
  const updateSearch = (search: string) => {
    setSearch(search)
  };
  const [value, setValue] = React.useState('');
  const toggleValue= (buttonValue: string)=>{
    if (buttonValue===value) {setValue("")}
    else
    setValue(buttonValue)
  }
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);
  const [markerDialogVisible, setMarkerDialogVisible] = React.useState(false);
  const showMarkerDialog = () => {
    setMarkerDialogVisible(true);
    return null;
  };
  const handleYesButtonPress = () => {
    setMarkerDialogVisible(false);
    setSnackbarVisible(true); 
  };
  const handleNoButtonPress = () => {
    setMarkerDialogVisible(false);
    setSnackbarVisible(true);
  };
  const handleExitButtonPress = () => {
    setMarkerDialogVisible(false);
  };
  const [additionalBoxVisible, setAdditionalBoxVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  // Define states for each hazard type
const [showWarning, setShowWarning] = useState(true);
const [showLandslide, setShowLandslide] = useState(true);
const [showCloud, setShowCloud] = useState(true);
const [showWater, setShowWater] = useState(true);
const [showMan, setShowMan] = useState(true);
const toggleWarningMarkers = () => {
  setShowWarning(!showWarning);
};
const toggleLandslideMarkers = () => {
  setShowLandslide(!showLandslide);
};
const toggleCloudMarkers = () => {
  setShowCloud(!showCloud);
};
const toggleWaterMarkers = () => {
  setShowWater(!showWater);
};
const toggleManMarkers = () => {
  setShowMan(!showMan);
};
  return (
    <>
      <MapView style={stil.map}>

      { 
        
        mockDisaster.filter(disaster=>{
          if(value==='')
            return true
          else
          return value===disaster.type
        }).map(disaster=>
          <Marker
            coordinate={{ latitude: disaster.latitude, longitude: disaster.longitude }}
            onPress={showMarkerDialog}
          >
            <Icon
              name={modelToIcon[disaster.type]}
              size={30}
              color={modelToColor[disaster.gravity]}
              />
          </Marker>
        )
      }
      </MapView>
      <Surface style={stil.searchContainer}>
        <TextInput
          placeholder="Search for a specific region..."
          onChangeText={text => updateSearch(text)}
          value={search}
          style={stil.searchInput}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
        />
        <IconButton
          icon="tune-vertical"
          size={24}
          style={stil.searchButton}
          onPress={handlePress}
          selected={expanded}
        />
      </Surface>

      <ScrollView horizontal style={stil.buttons}>
        <SegmentedButtons
          value={value}
          onValueChange={toggleValue}
          buttons={[
            {
              value: 'war',
              icon: () => <Icon name="warning" size={20} />,
              label: 'war',
            },
            {
              value: 'landslide',
              label: 'landslide',
              icon: () => <Icon name="landslide" size={20} />,
            },
            {
              value: 'meteorological',
              label: 'meteorological',
              icon: () => <Icon name="cloud" size={20} />,
            },
            {
              value: 'hydrological',
              label: 'hydrological',
              icon: () => <Icon name="water" size={20} />,
            },
            {
              value: 'biological',
              label: 'biological',
              icon: () => <Icon name="man" size={20} />,
            }
          ]}
        />
      </ScrollView>

      {expanded && <ScrollView style={stil.sections}>
        <List.Section >
          <List.Accordion
            title="Severity">
            <List.Item title="High" />
            <List.Item title="Moderate" />
            <List.Item title="Low" />
          </List.Accordion>
          <List.Accordion
            title="Victims">
            <List.Item title="1000+" />
            <List.Item title="500+" />
            <List.Item title="250+" />
            <List.Item title="100+" />
            <List.Item title="1+" />
            <List.Item title="0" />
          </List.Accordion>
          <List.Accordion
            title="Affected Region">
            <List.Item title="Multiple Countries" />
            <List.Item title="A Country" />
            <List.Item title="A City" />
            <List.Item title="A neighbourghood" />
          </List.Accordion>
          <List.Accordion
            title="Popularity">
            <List.Item title="High Approval" />
            <List.Item title="Approved" />
            <List.Item title="Low Approval" />
          </List.Accordion>

        </List.Section>
      </ScrollView>}
      <Portal>
  <Dialog visible={markerDialogVisible} onDismiss={hideDialog}>
    <Dialog.Title>
      <Text style={{ fontWeight: 'bold' }}>You clicked on the war between Ukraine and Russia</Text>
    </Dialog.Title>
    <Dialog.Content>
      <Text variant="bodyMedium">Is this hazard real?</Text>
      <Text variant="bodyMedium">100.000+ other people say it is a real threat</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Button icon="plus" onPress={() => setAdditionalBoxVisible(!additionalBoxVisible)}>
          Additional Information
        </Button>
      </View>
      {additionalBoxVisible && (
        <ScrollView style={{ maxHeight: 200 }}>
          <>
            <Text>The ongoing conflict between Ukraine and Russia, primarily centered around eastern Ukraine and Crimea, stems from historical, cultural, and political tensions. With roots in Russia's annexation of Crimea in 2014 and ongoing military intervention, the war has resulted in significant humanitarian crises, including displacement, casualties, and geopolitical ramifications.</Text>
          </>
        </ScrollView>
      )}
    </Dialog.Content>
    <Dialog.Actions>
      <Button onPress={handleNoButtonPress}>No</Button>
      <Button onPress={handleYesButtonPress}>Yes</Button>
      <Button onPress={handleExitButtonPress}>Exit</Button>
    </Dialog.Actions>
  </Dialog>
</Portal>
<Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000} 
        style={{ marginBottom: 100, alignItems: 'center' }}
      >
        Thank you for verifying this!
      </Snackbar>
    </>

  );
}





