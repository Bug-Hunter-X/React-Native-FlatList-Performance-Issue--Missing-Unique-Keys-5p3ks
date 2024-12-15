# React Native FlatList Performance Issue: Missing Unique Keys

This repository demonstrates a common performance issue in React Native's FlatList component when dealing with large datasets. The problem stems from the absence of unique keys for each item in the data array, leading to inefficient rendering and potential UI glitches.

## Problem

When rendering a FlatList with a substantial amount of data, omitting unique keys or using duplicate keys causes React Native to struggle with determining which items need updates. This results in unnecessary re-renders, ultimately impacting performance.

## Solution

The solution involves ensuring each item in the `data` prop has a unique `key` prop.  This allows React Native to efficiently track and update only the necessary items, significantly boosting performance.

## How to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run the app on an emulator or device.
4. Observe the performance difference between the initial buggy implementation and the corrected version. 

## Note

The `key` prop should ideally be a unique identifier tied to the data item's identity (e.g., a database ID).