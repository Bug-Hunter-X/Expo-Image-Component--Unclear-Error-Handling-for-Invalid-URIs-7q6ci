This solution utilizes a combination of async/await and try...catch blocks to gracefully handle errors while loading images.

```javascript
import React, { useState, useEffect } from 'react';
import { Image } from 'expo-image';

const MyImage = ({ uri }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      try {
        // Placeholder to simulate checking the validity of the URI
        if (!uri || typeof uri !== 'string' || !uri.startsWith('http')) {
          throw new Error('Invalid image URI');
        }
        // Simulate fetching the image
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    loadImage();
  }, [uri]);

  if (error) {
    return <Text>Error loading image: {error.message}</Text>;
  }

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Image
      source={{ uri }}
      style={{ width: 200, height: 200 }}
    />
  );
};

export default MyImage;
```