/**
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View, Alert} from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}: Readonly<{navigation: any}>) {
  function handleButtonPress() {
    navigation.navigate('Profile', {
      id: 'test props',
      name: 'fathi muhamed',
    });
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={handleButtonPress} title="move to Profile" />
    </View>
  );
}

function ProfileScreen({
  route,
  navigation,
}: Readonly<{route: any; navigation: any}>) {
  function handleButtonPress() {
    navigation.navigate('Home');
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 24,
          color: 'red',
        }}>
        {route.params?.name}
      </Text>
      <Button onPress={handleButtonPress} title="back to home" />
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          animation: 'slide_from_bottom',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerRight: () => (
              <Button
                onPress={() => Alert.alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({route}: any) => ({
            title: route?.params?.name ?? 'Profile',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
