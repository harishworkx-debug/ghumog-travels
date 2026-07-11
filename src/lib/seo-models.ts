export type InfoItem = { name: string; description: string; image?: string };
export type FAQItem = { question: string; answer: string };

export type Destination = {
  slug: string;
  name: string;
  description: string;
  history?: string;
  culture?: string;
  bestTimeToVisit?: string;
  weather?: string;
  howToReach?: string;
  topAttractions?: InfoItem[];
  topRestaurants?: InfoItem[];
  adventureActivities?: InfoItem[];
  shopping?: InfoItem[];
  nightlife?: InfoItem[];
  familyActivities?: InfoItem[];
  budgetTips?: string[];
  luxuryExperiences?: InfoItem[];
  nearbyDestinations?: InfoItem[];
  suggestedItineraries?: { day: string; description: string }[];
  emergencyInfo?: string;
  travelTips?: string[];
  faqs?: FAQItem[];
};

export type City = {
  slug: string;
  destinationSlug: string;
  name: string;
  description: string;
  weather?: string;
  bestTimeToVisit?: string;
  transportationGuide?: string;
  nearbyAttractions?: InfoItem[];
  thingsToDo?: InfoItem[];
  travelTips?: string[];
  mapEmbed?: string;
  faqs?: FAQItem[];
};

export type Area = {
  slug: string;
  citySlug: string;
  name: string;
  description: string;
  mapEmbed?: string;
  nearbyAttractions?: InfoItem[];
  restaurants?: InfoItem[];
  cafes?: InfoItem[];
  adventureActivities?: InfoItem[];
  travelTips?: string[];
  thingsToDo?: InfoItem[];
  faqs?: FAQItem[];
};

export const DESTINATIONS: Destination[] = [
  {
    slug: 'rishikesh',
    name: 'Rishikesh',
    description: 'The Yoga Capital of the World and gateway to the Garhwal Himalayas.',
    history: 'Known as a pilgrimage town and a center for yoga and meditation since ancient times.',
    culture: 'A beautiful blend of spiritual ashrams, adventure sports, and riverside cafes.',
    bestTimeToVisit: 'September to November and February to May.',
    weather: 'Summers are hot (up to 35°C), winters are pleasant and chilly at night (8°C to 20°C).',
    howToReach: 'Nearest airport is Jolly Grant in Dehradun (21km). Well connected by road from Delhi (240km).',
    topAttractions: [
      { name: 'Triveni Ghat', description: 'Famous for the evening Ganga Aarti and spiritual bathing.' },
      { name: 'Parmarth Niketan', description: 'The largest ashram in Rishikesh offering daily yoga and evening Aarti.' }
    ],
    adventureActivities: [
      { name: 'White Water Rafting', description: 'Thrilling rapids on the Ganges, mostly starting from Shivpuri.' },
      { name: 'Bungee Jumping', description: 'India’s highest bungee jump located in Mohan Chatti.' }
    ],
    budgetTips: ['Stay in hostels in Tapovan', 'Eat at local dhabas and ashrams', 'Rent a scooter instead of taxis'],
    emergencyInfo: 'Police: 100, Ambulance: 108, Tourist Police: 112',
    faqs: [
      { question: 'Is alcohol allowed in Rishikesh?', answer: 'No, Rishikesh is a holy city. Alcohol and non-vegetarian food are strictly prohibited.' }
    ]
  },
  {
    slug: 'shimla',
    name: 'Shimla',
    description: 'The Queen of Hills, surrounded by pine and oak forests.',
    history: 'The former summer capital of British India, reflecting colonial architecture.',
    culture: 'A mix of Himachali tradition and colonial heritage.',
    bestTimeToVisit: 'March to June for pleasant weather, December to February for snow.',
    weather: 'Pleasant summers (15°C to 30°C), freezing winters (0°C to 10°C) with occasional snowfall.',
    howToReach: 'Nearest broad gauge station is Kalka (90km). Nearest airport is Jubbarhatti (22km).',
    topAttractions: [
      { name: 'The Ridge', description: 'Large open space in the heart of Shimla, offering great views.' },
      { name: 'Jakhoo Temple', description: 'Ancient temple dedicated to Lord Hanuman, featuring a massive statue.' }
    ],
    familyActivities: [
      { name: 'Toy Train Ride', description: 'A scenic UNESCO World Heritage railway journey from Kalka to Shimla.' }
    ],
    budgetTips: ['Use HPTDC buses for local transport', 'Stay slightly away from Mall Road for cheaper hotels'],
    emergencyInfo: 'Police: 100, Ambulance: 108',
  }
];

export const CITIES: City[] = [
  {
    slug: 'rishikesh',
    destinationSlug: 'rishikesh',
    name: 'Rishikesh',
    description: 'Explore the spiritual and adventurous heart of Uttarakhand. Find the best hotels in Rishikesh for every budget.',
    weather: 'Tropical climate with hot summers and mild winters.',
    bestTimeToVisit: 'September to November is ideal for rafting and sightseeing.',
    transportationGuide: 'Auto-rickshaws and rented scooters are the best way to get around the narrow streets.',
    thingsToDo: [
      { name: 'Attend Ganga Aarti', description: 'Experience the mesmerizing evening prayer at Triveni Ghat or Parmarth Niketan.' },
      { name: 'Cafe Hopping in Tapovan', description: 'Enjoy healthy, vegan meals with Ganges views.' }
    ],
    travelTips: ['Book adventure sports in advance', 'Visit Triveni Ghat for evening Aarti', 'Rent a scooter to explore Tapovan'],
    faqs: [
      { question: 'What is the best time to visit Rishikesh?', answer: 'The best time is from September to November and late February to May.' }
    ]
  },
  {
    slug: 'shimla',
    destinationSlug: 'shimla',
    name: 'Shimla',
    description: 'Discover luxury and budget stays in Shimla. Enjoy panoramic views of the Himalayas.',
    weather: 'Subtropical highland climate.',
    bestTimeToVisit: 'May to June for summer holidays, December for snow.',
    thingsToDo: [
      { name: 'Walk on Mall Road', description: 'Stroll along the pedestrian-only street lined with shops and cafes.' },
      { name: 'Visit Viceregal Lodge', description: 'Explore the grand colonial architecture and manicured gardens.' }
    ],
    travelTips: ['Pack warm clothes even in summer', 'Take the Toy Train from Kalka', 'Explore the Ridge in the evening'],
  }
];

export const AREAS: Area[] = [
  {
    slug: 'tapovan',
    citySlug: 'rishikesh',
    name: 'Tapovan',
    description: 'The vibrant hub of cafes, ashrams, and budget to luxury stays in Rishikesh.',
    cafes: [
      { name: 'Little Buddha Cafe', description: 'Treehouse-style cafe offering great river views.' },
      { name: 'Secret Garden Cafe', description: 'Hidden gem with excellent organic food.' }
    ],
    thingsToDo: [
      { name: 'Yoga Classes', description: 'Drop into any of the numerous yoga studios for a morning class.' }
    ],
    travelTips: ['Great for backpackers', 'Lots of vegan cafes', 'Close to Lakshman Jhula']
  },
  {
    slug: 'shivpuri',
    citySlug: 'rishikesh',
    name: 'Shivpuri',
    description: 'The camping and river rafting capital near Rishikesh.',
    adventureActivities: [
      { name: 'River Rafting', description: 'The starting point for the famous 16km rafting stretch.' },
      { name: 'Beach Camping', description: 'Stay in tents on the white sand beaches of the Ganges.' }
    ],
    travelTips: ['Perfect for adventure lovers', 'Carry mosquito repellent for camping', 'Book rafting along with the camp']
  },
  {
    slug: 'shoghi',
    citySlug: 'shimla',
    name: 'Shoghi',
    description: 'A quiet, peaceful suburb of Shimla surrounded by forests.',
    nearbyAttractions: [
      { name: 'Tara Devi Temple', description: 'A 250-year-old temple offering sweeping views of the valley.' }
    ],
    travelTips: ['Ideal for a peaceful stay away from city crowds', 'Great hiking trails', 'Try local Himachali food']
  }
];
