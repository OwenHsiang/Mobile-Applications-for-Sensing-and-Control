# EEP_523_HW1

## Overview
The goal of this assignment is to get familiar with React Native and to practice setting up a development environment, creating a "Hello World" app that displays a list of items. It includes a text input field for adding new items, a button to add the item to the list, a button to remove an item from the list, and a display of the number of items in the list. You can see the result of this project in "HW1/hw1_demo.mp4".

## Working Process
First, create a new React Native project using the React Native CLI, here I named the project "HW1". After creating the project, open `App.tsx` and edit some lines, details are as follows:

1. Import `TextInput`, `Button`, `Text`, and `View` from 'react-native' to create the user interface for the app. Also uses the `useState` hook to manage the state of the text input field and the list of items.
2. Define two functions: `handleAddButtonClick` to add items to the list and `handleRemoveButtonClick` to remove items from the list.
3. Define the `textAdd` button: first check if the text variable is not empty and then add it to the list variable using the spread operator. (Also clear the text variable so the user can input a new item.)
4. To remove an item from the list, create a copy of the list array and then remove the item at the specified index to update the list state with the new array.
5. Finally, display the list of items using the 'map method' to loop through the list array and render a `View` component for each item. It contains a `Text` component to display the item and a `Remove` Button component to remove the item from the list.


## Hours took
It took me approximately 12 hours to create this app, including getting familiar with the program syntax of React Native, designing the user interface and implementing the functionality.

## Challenging parts
The most challenging part of creating this app was managing the state of the list of items. I had to figure out how to add and remove items from the list and update the display of the number of items.

## References<br>
[React Native Environment Setup](https://reactnative.dev/docs/environment-setup?guide=native)<br>
[React Native Introduction](https://reactnative.dev/docs/getting-started)<br>
[React Native Elements](https://reactnativeelements.com/docs)<br>
