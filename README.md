# Expo Image Component: Handling Invalid URIs

This repository demonstrates a common, yet subtle, bug when using the Expo `Image` component with invalid or inaccessible image URIs.  The issue is that the error messages are not always informative, making debugging difficult. This repository provides a simple example to reproduce the problem and a solution to improve error handling.

## Reproducing the Bug

1. Clone this repository.
2. Navigate to the project directory and run `npm install`.
3. Run the app using `expo start`.
4. Observe that the image fails to load, with the error messages not indicating the exact cause.

## Solution

The solution involves implementing robust error handling to check the validity of the image URI before attempting to load it.  The provided solution uses a combination of asynchronous functions and error handling to provide more informative feedback to developers.