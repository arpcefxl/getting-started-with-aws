// Using ES Modules syntax
export async function handler(event) {
  console.log("Event: ", event);
  // Get current epoch time in milliseconds
  const epochTime = Date.now();

  // Return a simple HTTP-like response with the current epoch time
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, World!',
      currentTime: epochTime
    })
  };
};
