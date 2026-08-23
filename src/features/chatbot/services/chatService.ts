const MOCK_RESPONSES = [
    "I'd be happy to help you plan your trip! Tell me your preferred destination, budget, and number of days.",
    'We have several packages across India. What kind of destination are you interested in — mountains, beaches, heritage, or nature?',
    'Our packages can include accommodation, transportation, local sightseeing, and a travel guide depending on the package.',
  ];
  
  export async function sendChatMessage(
    message: string,
  ): Promise<string> {
    console.log('User message:', message);
  
    await new Promise((resolve) => {
      setTimeout(resolve, 700);
    });
  
    const responseIndex =
      Math.floor(Math.random() * MOCK_RESPONSES.length);
  
    return MOCK_RESPONSES[responseIndex];
  }