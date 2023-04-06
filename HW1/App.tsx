/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const textAdd = (text) => {
    setText(text);
  };

  const textRemove = (text) => {
    setText(text);
  };

  const handleAddButtonClick = () => {
    if (text !== '') {
      setList([...list, text]);
      setText('');
    }
  };

  const handleRemoveButtonClick = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Hello World!">
            The app have the following features:
            <Text>{"\n"}</Text>
            <Text>•	A button to add new items to the list.</Text>
            <Text>{"\n"}</Text>
            <Text>•	A button to remove items from the list.</Text>
            <Text>{"\n"}</Text>
            <Text>• The ability to display the number of items in the list.</Text>
          </Section>

          <Section>
            <Text>Type to add an item:</Text>
          </Section>

          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={textAdd}
            value={text}
          />

          <Button
            title="Add new item"
            color="tan"
            onPress={handleAddButtonClick}
          />

          <Button
            title="Remove the first item"
            color="darkgoldenrod"
            onPress={handleRemoveButtonClick}
          />

          <Text>Number of items: {list.length}</Text>

          {list.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row' }}>
              <Text>{item}</Text>
              <Button
                title="Remove"
                color="crimson"
                onPress={() => handleRemoveButtonClick(index)}
              />
            </View>
          ))}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
