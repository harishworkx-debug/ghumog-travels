import { Hotel } from './data';

// We map hotel slugs to their specific SEO extended data.
export const HOTEL_SEO_DATA: Record<string, Partial<Hotel>> = {
  'rishikesh-hotel-4u': {
    seo: {
      title: 'Best Hotel in Tapovan Rishikesh | Rishikesh Hotel 4U by GhumoG',
      description: 'Book the best budget and luxury hotel in Tapovan, Rishikesh. Rishikesh Hotel 4U offers scenic Himalayan views, premium stays, and easy access to Lakshman Jhula.',
      keywords: 'Rishikesh Hotel, Hotels in Rishikesh, Best Hotel in Rishikesh, Budget Hotel in Rishikesh, Luxury Hotel in Rishikesh, Hotels Near Lakshman Jhula, Tapovan Hotels',
    },
    longAbout: [
      "Nestled in the spiritual heart of Tapovan, Rishikesh Hotel 4U by GhumoG is the perfect sanctuary for travelers seeking peace, adventure, and comfort. Surrounded by the majestic Himalayas and just a short walk from the sacred Ganges, our hotel offers an unparalleled experience in the Yoga Capital of the World.",
      "Whether you are looking for a budget-friendly stay or a premium luxury experience, Rishikesh Hotel 4U caters to all your needs. Our thoughtfully designed rooms provide stunning mountain views, modern amenities, and a deeply relaxing atmosphere. It is widely considered one of the best hotels in Rishikesh for couples, families, and solo backpackers.",
      "At Rishikesh Hotel 4U, we pride ourselves on exceptional hospitality. Guests can enjoy free high-speed WiFi, 24/7 room service, and secure free parking—a rare luxury in Tapovan. Our proximity to iconic landmarks like Lakshman Jhula and Ram Jhula makes us the top choice for travelers wanting to explore the local culture, cafes, and ashrams without the hassle of long commutes.",
      "For adventure enthusiasts, staying at our hotel means you are just minutes away from world-class river rafting, bungee jumping, and trekking starting points. After a thrilling day, return to the comfort of your room, enjoy a hot shower, and witness a breathtaking Himalayan sunset right from your balcony.",
      "Experience the true essence of Uttarakhand with our personalized services. From arranging local sightseeing tours to suggesting the best hidden cafes in Tapovan, our team at GhumoG is dedicated to making your stay memorable. Book your stay with us and discover why guests return to Rishikesh Hotel 4U year after year."
    ],
    whyStayHere: [
      'Prime location in Tapovan, close to Lakshman Jhula and popular cafes.',
      'Breathtaking Himalayan and valley views right from your balcony.',
      'Premium amenities including free high-speed WiFi and hot water.',
      'Rare free private parking available for guests.',
      'Exceptional homely hospitality and 24/7 room service.',
      'Perfect base for both spiritual retreats and adventure sports (rafting/trekking).'
    ],
    locationDetails: {
      address: 'Badrinath Highway, Tapovan, Rishikesh, Uttarakhand 249192',
      railwayStation: 'Yog Nagari Rishikesh Railway Station (approx. 5 km)',
      airport: 'Jolly Grant Airport, Dehradun (approx. 21 km)',
      busStand: 'Rishikesh ISBT (approx. 6 km)',
      directions: 'Located on the main Badrinath Highway in Tapovan. Easily accessible by taxi or auto-rickshaw from the railway station or bus stand.',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.203770338774!2d78.31885834999999!3d30.1284566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909163b9f365739%3A0xc34cc5b1d440d995!2sTapovan%2C%20Rishikesh%2C%20Uttarakhand%20249192!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    },
    rooms: [
      {
        name: 'Premium Mountain View Room',
        image: '', 
        description: 'Wake up to glorious sunrises over the Himalayas. This premium room offers expansive views, a plush king-size bed, and modern interiors designed for utmost comfort.',
        amenities: ['King Size Bed', 'Balcony', 'Mountain View', 'Free WiFi', 'Ensuite Bathroom', 'Hot Water'],
        occupancy: '2 Adults + 1 Child',
        highlights: ['Scenic Views', 'Comfort & Luxury', 'Premium Stay']
      },
      {
        name: 'Deluxe Family Room',
        image: '',
        description: 'Spacious and elegantly furnished, our Deluxe Family Room is perfect for small groups or families traveling together. It features extra seating and premium bedding.',
        amenities: ['Queen Size Beds', 'Free WiFi', 'Room Service', 'Ensuite Bathroom', 'Seating Area'],
        occupancy: '4 Adults',
        highlights: ['Family & Couple Friendly', 'Spacious', 'Best Budget Options']
      }
    ],
    nearbyAttractions: [
      { name: 'Lakshman Jhula', distance: '1.5 km', travelTime: '10 mins walk', description: 'Iconic suspension bridge over the Ganges.' },
      { name: 'Ram Jhula', distance: '3 km', travelTime: '15 mins drive', description: 'Famous landmark surrounded by ashrams.' },
      { name: 'Triveni Ghat', distance: '6 km', travelTime: '20 mins drive', description: 'Sacred bathing ghat known for the evening Maha Aarti.' },
      { name: 'Neer Garh Waterfall', distance: '4 km', travelTime: '15 mins drive', description: 'Beautiful cascading waterfall perfect for a short trek.' }
    ],
    thingsToDo: [
      { name: 'River Rafting', description: 'Experience thrilling white water rafting on the Ganges, starting just a few kilometers away.' },
      { name: 'Yoga & Meditation', description: 'Join nearby renowned ashrams for rejuvenating yoga sessions.' },
      { name: 'Cafe Hopping', description: 'Explore the vibrant cafe culture of Tapovan, featuring organic and global cuisines.' },
      { name: 'Ganga Aarti', description: 'Witness the mesmerizing evening Aarti at Parmarth Niketan or Triveni Ghat.' }
    ],
    faqs: [
      { question: 'What is the check-in and check-out time at Rishikesh Hotel 4U?', answer: 'Standard check-in time is 12:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is subject to availability.' },
      { question: 'Is parking available at the hotel?', answer: 'Yes, we offer free and secure private parking for all our guests.' },
      { question: 'Is Rishikesh Hotel 4U suitable for families?', answer: 'Absolutely! We have spacious family rooms and a safe environment perfect for families and couples.' },
      { question: 'How far is the hotel from Lakshman Jhula?', answer: 'We are located in Tapovan, just a short 10-15 minute walk (approx 1.5 km) from Lakshman Jhula.' },
      { question: 'Do the rooms have views of the mountains?', answer: 'Yes, our Premium rooms offer beautiful views of the surrounding Himalayan foothills.' },
      { question: 'Is Wi-Fi available at the property?', answer: 'Yes, we provide free high-speed Wi-Fi access throughout the hotel.' },
      { question: 'Does the hotel have a restaurant?', answer: 'We offer excellent 24/7 room service with a diverse menu, and there are dozens of popular cafes within walking distance.' },
      { question: 'Can the hotel arrange river rafting and trekking?', answer: 'Yes, the GhumoG team can help you book trusted river rafting, bungee jumping, and local trekking experiences.' },
      { question: 'Is hot water available 24/7?', answer: 'Yes, all our ensuite bathrooms are equipped with geysers for 24/7 hot water.' },
      { question: 'What is the cancellation policy?', answer: 'We offer free cancellation up to 7 days before check-in. Please refer to our full cancellation policy for details.' }
    ],
    reviews: [
      { author: 'Rahul S.', rating: 5, text: 'Amazing stay! The mountain views from the balcony were breathtaking and the staff was extremely helpful.', date: 'October 2023' },
      { author: 'Priya M.', rating: 4.5, text: 'Very clean rooms and great location in Tapovan. Walking distance to all the good cafes.', date: 'November 2023' },
      { author: 'Amit K.', rating: 5, text: 'The free parking was a lifesaver in Rishikesh. Great hospitality by the GhumoG team.', date: 'December 2023' }
    ]
  },
  
  'hotel-rashal-stay': {
    seo: {
      title: 'Hotel Rashal Stay Shimla | Best Budget Hotel in Shoghi Shimla',
      description: 'Experience a peaceful mountain stay at Hotel Rashal Stay in Shoghi, Shimla. Enjoy wooden rooms, homely food, and nature views. Book your Shimla hotel today.',
      keywords: 'Hotel Rashal Stay, Hotels in Shimla, Best Hotel in Shimla, Budget Hotel in Shimla, Shoghi Hotels, Homestay in Shimla, Hotels Near Shimla, Family Hotels Shimla',
    },
    longAbout: [
      "Escape the crowded city center and discover the tranquil beauty of Hotel Rashal Stay by GhumoG, located in the picturesque town of Shoghi, just a short drive from Shimla. Surrounded by lush cedar and pine forests, our property offers a deeply peaceful retreat for those looking to reconnect with nature.",
      "As one of the best budget hotels near Shimla, Hotel Rashal Stay provides a perfect blend of modern comfort and traditional Himachali charm. Our cozy wooden rooms are designed to keep you warm and comfortable, featuring large windows that frame stunning views of the valley. Whether you are on a romantic getaway or a family vacation, you will feel right at home.",
      "What truly sets us apart is our heartfelt hospitality. We believe in the mantra 'Pahadon Ki God Mein Aapka Apna Ghar' (Your own home in the lap of the mountains). We offer delicious, freshly prepared homely food on request, ensuring you get a taste of authentic local flavors. In the evenings, gather around a cozy bonfire under the starry sky, an experience you won't easily find in busy Shimla town.",
      "Our strategic location in Shoghi means you avoid the infamous Shimla traffic while remaining close enough to visit the Mall Road and Jakhoo Temple for a day trip. It is the ideal base for exploring the hidden gems of Himachal Pradesh while enjoying a quiet, restful night's sleep.",
      "With free parking, high-speed WiFi, and a team dedicated to your comfort, Hotel Rashal Stay guarantees a memorable Himalayan vacation. Book directly with GhumoG for the best rates and personalized service."
    ],
    whyStayHere: [
      'Located in peaceful Shoghi, away from the crowded Shimla traffic.',
      'Beautiful wooden-paneled rooms providing natural warmth and aesthetics.',
      'Authentic, delicious homely food prepared fresh on request.',
      'Cozy bonfire evenings arranged for families and couples.',
      'Stunning valley and pine forest views from the property.',
      'Safe and secure environment with dedicated free parking.'
    ],
    locationDetails: {
      address: 'Shoghi, Shimla, Himachal Pradesh 171219',
      railwayStation: 'Shoghi Railway Station (approx. 2 km), Shimla Station (approx. 15 km)',
      airport: 'Jubbarhatti Airport, Shimla (approx. 20 km)',
      busStand: 'ISBT Shimla (approx. 13 km)',
      directions: 'Located easily off the NH5 in Shoghi, before entering the main Shimla city traffic. Follow the signs for Shoghi market.',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27346.0645601267!2d77.1218086!3d31.0478051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905786ed8e3eb99%3A0xc3f8b0d061c0c169!2sShoghi%2C%20Himachal%20Pradesh%20171219!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    },
    rooms: [
      {
        name: 'Classic Wooden Room',
        image: '',
        description: 'Experience authentic mountain living in our Classic Wooden Room. Beautiful wood paneling keeps the room cozy and warm during Shimla winters.',
        amenities: ['Wooden Interiors', 'Valley View', 'Free WiFi', 'Ensuite Bathroom', 'Heater on request'],
        occupancy: '2 Adults',
        highlights: ['Wooden Rooms', 'Peaceful Stay', 'Comfort & Luxury']
      },
      {
        name: 'Family Valley View Room',
        image: '',
        description: 'A spacious room ideal for families, offering panoramic views of the Shoghi valley. Enjoy comfortable bedding and room for everyone to relax.',
        amenities: ['Queen Size Beds', 'Valley View', 'Free WiFi', 'Seating Area', 'Ensuite Bathroom'],
        occupancy: '4 Adults',
        highlights: ['Family & Couple Friendly', 'Scenic Views', 'Spacious']
      }
    ],
    nearbyAttractions: [
      { name: 'Tara Devi Temple', distance: '5 km', travelTime: '15 mins drive', description: 'Ancient temple offering panoramic views of Shimla.' },
      { name: 'Viceregal Lodge', distance: '12 km', travelTime: '30 mins drive', description: 'Historic British-era building with beautiful gardens.' },
      { name: 'Shimla Mall Road', distance: '15 km', travelTime: '40 mins drive', description: 'The bustling heart of Shimla for shopping and cafes.' },
      { name: 'Chadwick Falls', distance: '16 km', travelTime: '45 mins drive', description: 'A serene waterfall located deep in the Glen forest.' }
    ],
    thingsToDo: [
      { name: 'Forest Walks', description: 'Take a leisurely stroll through the dense cedar and pine forests surrounding Shoghi.' },
      { name: 'Bonfire Nights', description: 'Enjoy a warm bonfire under the stars at our property.' },
      { name: 'Toy Train Ride', description: 'Experience the UNESCO heritage Kalka-Shimla toy train from Shoghi station.' },
      { name: 'Temple Hopping', description: 'Visit local ancient temples like Tara Devi and Jakhoo Temple.' }
    ],
    faqs: [
      { question: 'Is Hotel Rashal Stay located in main Shimla?', answer: 'We are located in Shoghi, a peaceful suburb about 15 km before main Shimla. This allows you to avoid city traffic while still being close enough to visit.' },
      { question: 'Do you provide food at the hotel?', answer: 'Yes, we provide delicious, freshly cooked homely food on request. We highly recommend trying our local Himachali dishes.' },
      { question: 'Are heaters provided in the rooms?', answer: 'Yes, we provide room heaters during the winter months on request to ensure you stay warm and comfortable.' },
      { question: 'Is parking available?', answer: 'Yes, we offer safe and free parking on the premises, which is a significant advantage over hotels in main Shimla.' },
      { question: 'Can you arrange a bonfire?', answer: 'Absolutely! We can arrange a cozy bonfire evening for you and your family on request (subject to weather conditions).' },
      { question: 'Is the property safe for couples?', answer: 'Yes, our hotel is completely safe, secure, and family/couple friendly with a trusted staff.' },
      { question: 'How far is the Shoghi railway station?', answer: 'The Shoghi railway station (on the Kalka-Shimla heritage line) is just about 2 km away from the property.' },
      { question: 'Do the rooms have wooden interiors?', answer: 'Yes, many of our rooms feature authentic wooden paneling that provides a classic mountain feel.' },
      { question: 'Is Wi-Fi reliable at the property?', answer: 'We provide good Wi-Fi, perfect for basic browsing and remote work, though mountain weather can occasionally affect speeds.' },
      { question: 'Do you help with local taxi bookings?', answer: 'Yes, the GhumoG team can arrange reliable local taxis for your Shimla sightseeing tours.' }
    ],
    reviews: [
      { author: 'Neha J.', rating: 5, text: 'Beautiful wooden rooms and the food was just like home. Loved staying in Shoghi instead of crowded Shimla.', date: 'September 2023' },
      { author: 'Vikram S.', rating: 4.5, text: 'Great hospitality. They arranged a bonfire for us which made our evening special.', date: 'October 2023' },
      { author: 'Arun M.', rating: 5, text: 'Very peaceful location. Easy parking and the Tara Devi temple is very close by.', date: 'November 2023' }
    ]
  },

  'rishikesh-camping-resorts': {
    seo: {
      title: 'Rishikesh Camping Resorts | Luxury Camps in Shivpuri Rishikesh',
      description: 'Book the best camping in Rishikesh at Shivpuri. Enjoy luxury tents, swimming pool, riverside views, river rafting, and bonfire nights. Adventure awaits!',
      keywords: 'Camping in Rishikesh, Rishikesh Camping Resorts, Shivpuri Camps, Luxury Camping Rishikesh, River Rafting Rishikesh, Tents in Rishikesh, Riverside Camping',
    },
    longAbout: [
      "Immerse yourself in the ultimate outdoor adventure at Rishikesh Camping Resorts by GhumoG. Located in the adventure hub of Shivpuri, just outside the main city of Rishikesh, our resort offers a thrilling yet comfortable camping experience surrounded by the pristine beauty of the Himalayas and the holy Ganges.",
      "Our camping resort is designed for travelers who want to experience the wild without sacrificing comfort. We offer premium, spacious tents equipped with comfortable bedding and essential amenities. Unlike basic camps, our property features a sparkling swimming pool where you can cool off after an exciting day of river rafting or trekking.",
      "Shivpuri is globally renowned for its white-water river rafting, and staying with us puts you right at the starting point of the best rapids. Beyond rafting, you can enjoy jungle walks, beach volleyball, and zip-lining. When the sun sets, the resort transforms into a magical oasis with cozy bonfire nights, music, and delicious meals served under a canopy of stars.",
      "Safety and hygiene are our top priorities. Our camp is fully secure, making it ideal for families, corporate groups, and couples. We provide clean washroom facilities, delicious buffet meals, and 24/7 staff assistance to ensure a hassle-free stay.",
      "Experience the thrill of nature with the reliability of GhumoG. Whether you are looking for a weekend getaway with friends or a unique family vacation, Rishikesh Camping Resorts promises memories that will last a lifetime."
    ],
    whyStayHere: [
      'Located in Shivpuri, the premier hub for river rafting in Rishikesh.',
      'Comfortable luxury tents rather than basic alpine tents.',
      'On-site swimming pool with stunning views of the surrounding hills.',
      'Evening bonfires with music and delicious buffet meals.',
      'Safe, secure, and family-friendly camping environment.',
      'Easy access to rafting points, zip-lining, and jungle treks.'
    ],
    locationDetails: {
      address: 'Badrinath Road, Shivpuri, Rishikesh, Uttarakhand 249192',
      railwayStation: 'Yog Nagari Rishikesh Railway Station (approx. 18 km)',
      airport: 'Jolly Grant Airport, Dehradun (approx. 35 km)',
      busStand: 'Rishikesh ISBT (approx. 18 km)',
      directions: 'Drive on the Badrinath Highway past Tapovan for about 15km to reach Shivpuri. The campsite is easily accessible from the main road.',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13803.957245781665!2d78.3840742!3d30.1374523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909117621c17bd9%3A0x6b41a8c9b3e1b072!2sShivpuri%2C%20Uttarakhand%20249192!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    },
    rooms: [
      {
        name: 'Luxury Swiss Tent',
        image: '',
        description: 'Spacious and comfortable Swiss-style tents featuring proper beds, electricity, and attached washrooms for a luxurious outdoor experience.',
        amenities: ['Comfortable Beds', 'Attached Washroom', 'Fan / Cooler', 'Charging Points', 'Seating Area'],
        occupancy: '2-3 Adults',
        highlights: ['Camping Experience', 'Comfortable Rooms', 'Outdoor Stay']
      },
      {
        name: 'Family Safari Tent',
        image: '',
        description: 'Larger tents designed for groups and families, offering a rugged yet comfortable stay with ample space and essential amenities.',
        amenities: ['Multiple Beds', 'Attached Washroom', 'Fan / Cooler', 'Mountain View'],
        occupancy: '4 Adults',
        highlights: ['Family & Couple Friendly', 'Nature Views', 'Best Budget Options']
      }
    ],
    nearbyAttractions: [
      { name: 'Vashishta Gufa', distance: '8 km', travelTime: '20 mins drive', description: 'Ancient cave where Sage Vashishta meditated, situated by the Ganges.' },
      { name: 'Neer Garh Waterfall', distance: '12 km', travelTime: '30 mins drive', description: 'A multi-tier waterfall with small pools for swimming.' },
      { name: 'Lakshman Jhula', distance: '15 km', travelTime: '35 mins drive', description: 'The famous suspension bridge in Rishikesh.' },
      { name: 'Jumpin Heights', distance: '20 km', travelTime: '45 mins drive', description: 'India\'s highest bungee jumping point.' }
    ],
    thingsToDo: [
      { name: 'White Water Rafting', description: 'The ultimate Shivpuri experience. Tackle exciting rapids on the Ganges.' },
      { name: 'Pool Relaxing', description: 'Unwind in our on-site swimming pool surrounded by mountains.' },
      { name: 'Bonfire & Music', description: 'Enjoy the chilly evenings with a warm bonfire and light music at the camp.' },
      { name: 'Jungle Trekking', description: 'Explore the surrounding trails for a dose of nature and bird watching.' }
    ],
    faqs: [
      { question: 'Are the tents safe and secure?', answer: 'Yes, our campsite is fully secure with 24/7 staff and boundaries, making it completely safe for families and solo travelers.' },
      { question: 'Do the tents have attached washrooms?', answer: 'Yes, our Luxury Swiss Tents come with clean, attached washrooms with running water.' },
      { question: 'Is river rafting included in the price?', answer: 'The base price is for the stay and meals. However, we offer excellent combo packages that include river rafting. Please inquire on WhatsApp.' },
      { question: 'Is the swimming pool operational year-round?', answer: 'The pool is operational during the summer and pleasant months. It may be closed during peak winter.' },
      { question: 'What kind of meals are provided?', answer: 'We provide buffet meals including Breakfast, Lunch, and Dinner with both vegetarian and non-vegetarian options (on request).' },
      { question: 'Is electricity available in the tents?', answer: 'Yes, the tents have electricity, lighting, and charging points for your devices.' },
      { question: 'How far is the camp from the river?', answer: 'The camp is located in Shivpuri, with a short trek or drive required to reach the actual river banks and rafting starting points.' },
      { question: 'Can we bring pets?', answer: 'Please contact us directly regarding pet policies as it depends on the season and occupancy.' },
      { question: 'Are there insects or mosquitoes?', answer: 'While we are in a natural setting, we take measures to keep the camp clean. We recommend carrying basic insect repellent for outdoor evenings.' },
      { question: 'Do you arrange transport from Rishikesh?', answer: 'Yes, we can arrange cab or jeep transfers from Rishikesh bus stand or railway station at an additional cost.' }
    ],
    reviews: [
      { author: 'Siddharth T.', rating: 5, text: 'Best camping experience! The tents were very clean and the swimming pool was a great addition.', date: 'April 2023' },
      { author: 'Kriti S.', rating: 4.5, text: 'Loved the bonfire night and the food was delicious. Very close to the rafting point.', date: 'May 2023' },
      { author: 'Rajat P.', rating: 5, text: 'Safe and fun place for families. The staff was very attentive and helpful.', date: 'June 2023' }
    ]
  }
};
