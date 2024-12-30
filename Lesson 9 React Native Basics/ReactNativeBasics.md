# What is React Native?

**React Native** is a popular open-source framework developed by **Meta** for building mobile applications using **JavaScript** and **React**.  
It allows developers to create **cross-platform apps** that run on both **iOS** and **Android** with a single codebase.

# Core Components of React Native

## 1. View

- **What It Is:** A container for holding other components (like **Text**, **Image** or nested **View** components).
- **Purpose:** Similar to **<div>** in HTML, it is used to structure your app layout.
- **Usage Example:**

```jsx
import { View, Text } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 20, backgroundColor: "lightblue" }}>
      <Text>Hello, this is inside a View!</Text>
    </View>
  );
}
```

## 2. Text

- **What It Is:** Displays text on the screen.
- **Purpose:** Use it to show titles, paragraphs or any textual information.
- **Usage Example:**

```jsx
import { Text } from "react-native";

export default function App() {
  return (
    <Text style={{ fontSize: 20, color: "darkblue" }}>
      Hello, React Native!
    </Text>
  );
}
```

## 3. Image

- **What It Is:** Displays images.
- **Purpose:** Use it to show pictures, icons, or logos in your app.
- **Usage Example:**

```jsx
import { Image } from "react-native";

export default function App() {
  return (
    <Image
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      style={{ width: 100, height: 100 }}
    />
  );
}
```

## 4. TextInput

- **What It Is:** A field for user input.
- **Purpose:** Use it to capture text, like names, emails or passwords.
- **Usage Example:**

```jsx
import { TextInput } from "react-native";

export default function App() {
  return (
    <TextInput
      placeholder="Type something..."
      style={{ borderWidth: 1, padding: 10, margin: 10 }}
    />
  );
}
```

## 5. ScrollView

- **What It Is:** A container that allows vertical and horizontal scrolling.
- **Purpose:** Use it when the content exceeds the screen size.
- **Usage Example:**

```jsx
import { ScrollView, Text } from "react-native";

export default function App() {
  return (
    <ScrollView>
      {[...Array(20)].map((_, index) => (
        <Text key={index} style={{ fontSize: 20, margin: 10 }}>
          Item {index + 1}
        </Text>
      ))}
    </ScrollView>
  );
}
```

## 6. FlatList

- **What It Is:** A powerful component for displaying lists of data.
- **Purpose:** Use it for efficiently rendering long lists.
- **Usage Example:**

```jsx
import { FlatList, Text } from "react-native";

const data = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
];

export default function App() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
}
```

## 7. SectionList

- **What It Is:** Like **FlatList**, but allows grouping items into sections.
- **Purpose:** Use it for categorized lists (e.g., A-Z contact lists).
- **Usage Example:**

```jsx
import { SectionList, Text } from "react-native";

const sections = [
  { title: "Fruits", data: ["Apple", "Banana", "Cherry"] },
  { title: "Vegetables", data: ["Carrot", "Peas"] },
];

export default function App() {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={{ fontWeight: "bold" }}>{section.title}</Text>
      )}
    />
  );
}
```

Above are some important core components that you will use the most.  
There are more core components in React Native, for more information see [React Native Documentation](https://reactnative.dev/docs/components-and-apis).

# Comparison Table of React Native Components to their HTML Equivalents

![React Native to HTML equivalent](/Assets/ReactHtmlComparison.jpeg)

# React Native Props

**What are props?**

- Props (short for 'properties') are **read-only inputs** that you pass to components in React Native to customise their behaviour or appearance.
- Think of props like **HTML attributes** (eg, **src** for **img** or **placeholder** for **input**).

## How to Use Props

Props are passed to a component as attributes when you use it in JSX.
**Example:**

```jsx
import React from "react";
import { Text } from "react-native";

export default function App() {
  return <Text style={{ fontSize: 20, color: "blue" }}>Hello, Props!</Text>;
}
```

The above example showed that the **style** prop customises the appearance of the **Text** component.

## Default Props vs. Custom Props

1. Default Props:
   - These are predefined props provided by React Native components.
   - Example: The **style** or **placeholder** prop.
2. Custom Props:

   - You can create your own props for custom components.
   - Example:

     ```jsx
     import React from "react";
     import { Text } from "react-native";

     function Greeting({ name }) {
       return <Text>Hello, {name}!</Text>;
     }

     export default function App() {
       return <Greeting name="John" />;
     }
     ```

     The **name** prop is passed to the **Greeting** component, and it renders "Hello, John!".  
     You can pass as many props as you want.

## Key Points About Props

1. Props Are Read-Only

- You cannot modify props inside a component. They are immutable.
- Example:

```jsx
function Greeting({ name }) {
  name = "Jack"; // ❌ This will throw an error!
  return <Text>Hello, {name}!</Text>;
}
```

2. Destructuring Props

- You can use destructuring to simplify how you access props.
- Example:

```jsx
function Greeting({ name }) {
  return <Text>Hello, {name}!</Text>;
}

// is the same as:

function Greeting(props) {
  return <Text>Hello, {props.name}!</Text>;
}
```

3. Default Values for Props:

- You can set default values for props if none are provided:

```jsx
function Greeting({ name = "Guest" }) {
  return <Text>Hello, {name}!</Text>;
}
```

# Styling in React Native

In React Native, styling is done using **JavaScript objects** instead of CSS.  
Although it shares similarities with CSS, there are some key differences and unique approaches.

## How Styling Works in React Native

- Instead of writing styles in a seperate CSS file, you create a **JavaScript object** containing style rules.
- These styles are passed to a component via the **style** prop.

**Example:**

```jsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Styling!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "blue",
  },
});
```

## Key Concepts in React Native Styling

1. Inline Styles

- You can apply styles directly as an object using the **style** prop.
  Example:
  ```jsx
  <Text style={{ fontSize: 20, color: "green" }}>Inline Styling</Text>
  ```

2. StyleSheet

- A more organised way to define styles by using the **StyleSheet** API.
  Example:
  ```jsx
  const styles = StyleSheet.create({
    header: {
      backgroundColor: "lightblue",
      padding: 10,
    },
  });
  <View style={styles.header}></View>;
  ```

3. Combining Multiple Styles

- You can combine multiple style objects using an array.
  Example:

  ```jsx
  <Text style={[styles.text, { color: "red" }]}>Combined Styling</Text>
  ```

4. Dynamic Styles

- You can use variables or conditions to apply styles dynamically.
  Example:
  ```jsx
  const isActive = true;
  <Text style={{ color: isActive ? "green" : "gray" }}>Dynamic Styling</Text>;
  ```

## React Native Style Properties to their CSS Equivalents

![React Native Style Properties to CSS equivalents](/Assets/ReactCssComparison.jpeg)

## Layout with Flexbox

React Native uses **Flexbox** for layout instead of traditional CSS box models.  
It is similar but with some differences.

Key Properties:

- **flex:** Determines the ratio of space a component takes.
- **flexDirection:** Defines the direction of children (**row** or **column**).
  - Default: **column** (unlike web Flexbox where it is **row**).
- **justifyContent:** Aligns children vertically.
- **alignItems:** Aligns children horizontally.

Example:

```jsx
<View
  style={{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Text>Box 1</Text>
  <Text>Box 2</Text>
</View>
```

## Units in React Native

- React Native does not support traditional units like **px**, **%**, **em** or **rem**. Instead:
  - **_All sizes are unitless and assumed to be in pixels._**
  - Example: **fontSize: 20** means 20 pixels.

## Differences from Web CSS

1. No Classes or IDs:

   - Styles are applied directly via the **style** prop instead of **class** or **id**.

2. Limited Properties:

   - Some CSS properties, like **float**, are not supported.

3. Responsive Design:

   - Use Flexbox and percentages for responsiveness.
