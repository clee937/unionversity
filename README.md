# Unionversity

## About

Unionversity is a program that searches courses and study groups, enrolls in them, and prints a list of currently enrolled events. The project focuses on union types - type guards/type narrowing, unions and arrays, unions with literal types, and inferred union return types.

## Features and code breakdown

- Type aliases are used for `Course`, `StudyGroup` and `SearchEventsOptions`.
- The `searchEvents()` function takes the user's search options as a parameter. It uses the array `filter` method with conditional statements and type guard checks to search through the list of courses/study groups and find events that match the user's search options. The function returns an array of the matching courses/study groups.
- The `enroll()` function takes an event and adds it to a list of enrolled events.
- The `printCourseTitles()` function takes an array of enrolled events as a parameter and prints only the titles of the enrolled events.

## Technologies used

- TypeScript
