export const handler = async () => {
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from my jovo Alexa skill app\'s AWS Lambda Function!'),
    };
    return response;
  };