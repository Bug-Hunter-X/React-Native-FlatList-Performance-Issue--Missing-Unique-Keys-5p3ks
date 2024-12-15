This React Native code snippet demonstrates an issue related to using the FlatList component with a large dataset and improper key extraction.  The keys are not unique which can lead to unexpected rendering behavior and performance problems. 

```javascript
<FlatList
  data={largeDataset}
  renderItem={({ item }) => <Text>{item.text}</Text>}
/>
```

The `largeDataset` array contains objects, each with a `text` property, but lacks a unique `key` property for each item.  This omission causes re-renders and performance degradation. 