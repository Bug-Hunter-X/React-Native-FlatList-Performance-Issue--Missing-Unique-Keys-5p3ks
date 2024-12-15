The solution involves providing a unique `key` prop to each item in the `data` array passed to the FlatList.  This key should be a unique identifier for that item.

```javascript
<FlatList
  data={largeDataset}
  keyExtractor={(item, index) => item.id.toString()}
  renderItem={({ item }) => <Text>{item.text}</Text>}
/>
```

Here, we assume each object in `largeDataset` has a unique `id` property.  The `keyExtractor` function extracts this ID as the key. If you don't have a suitable unique ID, you can use the index as a fallback, but this is less efficient and can lead to problems if the data array is frequently modified.

**Example with Index (less preferred):**

```javascript
<FlatList
  data={largeDataset}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => <Text>{item.text}</Text>}
/>
```

Remember to always prioritize using unique identifiers from your data source as keys for optimal performance.