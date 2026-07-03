import room2Image from '../assets/Rishikesh-hotel/room2.jpeg';
import rishikeshViewImage from '../assets/Rishikesh-hotel/Rishikesh-view.png';
import room8Image from '../assets/Shimla-hotel/room2.jpeg'
import shimlaAttraction from '../assets/Shimla-hotel/Shimla-attractions1.png'
import rishikeshCampViewImage from '../assets/Rishikesh-Camping-Resorts/hotel-extier9.jpeg'
import rishikeshCampViewImage2 from '../assets/Rishikesh-Camping-Resorts/RishikeshCamp-attractions4.png'



export const WHATSAPP = 'https://wa.me/917018939901?text=' + encodeURIComponent('Hello GhumoG Team,\nI would like to know more about your hotel stays and travel packages.');
export const PHONE = '+91 9319999913\n+91 7018939901\n+91 8679999913';
export const PHONE_TEL = 'tel:+917018939901';
export const EMAIL = 'ghumog.com@gmail.com';
export const MAP_LINK = 'https://www.google.com/maps/place/Ghumog/@31.0433071,77.1162544,15z';
export const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6836.775235468282!2d77.11625441499316!3d31.04330709731706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057fc4e72297f9%3A0x25917184f9f84837!2sGhumog!5e0!3m2!1sen!2sin!4v1783002252188!5m2!1sen!2sin';

export const SOCIALS = [
  { name: 'YouTube', url: 'https://www.youtube.com/@ghumog', icon: 'youtube' },
  { name: 'Facebook', url: 'https://www.facebook.com/ghumogbharke', icon: 'facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com/aviral9913', icon: 'instagram' },
];

export const TAGLINES = {
  primary: 'Ghumo G Bhar Ke',
  secondary: '',
  experience: 'Yaadein Nahi,\nAnubhav Chuniye',
  himalayan: 'Wake Up to Himalayan Views',
  home: 'Pahadon Ki God Mein Aapka Apna Ghar',
  family: 'Come as a Guest, Leave as Family',
};

export const HOTEL_CATEGORIES = [
  { slug: 'himachal-pradesh', name: 'Himachal Pradesh', tagline: 'Misty mountains & pine forests', weatherQuery: 'Himachal Pradesh Weather' },
  { slug: 'uttarakhand', name: 'Uttarakhand', tagline: 'Sacred rivers & Himalayan peaks', weatherQuery: 'Uttarakhand Weather' },
  { slug: 'top-temples', name: 'Dharmik Yatra', tagline: 'Divine journeys & pilgrimages', weatherQuery: 'Char Dham Weather' },
];

export type GalleryImage = { src: string; alt: string; category: string };

export type Hotel = {
  slug: string;
  name: string;
  category: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  cardImage?: string;
  description: string;
  tagline: string;
  highlights: string[];
  amenities: string[];
  gallery: GalleryImage[];
  galleryCategories: { slug: string; name: string }[];
};

// Dynamically import all images from the hotel asset folders.
// Images are loaded eagerly so they can be referenced by URL at build time.
const rishikeshHotel4U = import.meta.glob('../assets/Rishikesh-hotel/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const shimlaRashal = import.meta.glob('../assets/Shimla-hotel/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const rishikeshCamping = import.meta.glob('../assets/Rishikesh-Camping-Resorts/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

function toGallery(map: Record<string, string>, altPrefix: string): GalleryImage[] {
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src]) => {
      const file = path.split('/').pop() || '';
      const base = file.replace(/\.(jpeg|jpg|png|webp)$/i, '');
      let category = 'exterior';
      if (/^room/i.test(base)) category = 'rooms';
      else if (/food/i.test(base)) category = 'food';
      else if (/parking/i.test(base)) category = 'parking';
      else if (/pool/i.test(base)) category = 'pool';
      else if (/hotel-extier/i.test(base)) category = 'exterior';
      return { src, alt: `${altPrefix} — ${base}`, category };
    });
}

const rishikeshHotel4UGallery = toGallery(rishikeshHotel4U, 'Rishikesh Hotel 4U');
const shimlaRashalGallery = toGallery(shimlaRashal, 'Hotel Rashal Stay');
const rishikeshCampingGallery = toGallery(rishikeshCamping, 'Rishikesh Camping Resorts');

const FALLBACK_IMG = 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200';

function firstImg(gallery: GalleryImage[], fallback: string) {
  return gallery[0]?.src || fallback;
}

export const HOTELS: Hotel[] = [
  {
    slug: 'rishikesh-hotel-4u',
    name: 'Rishikesh Hotel 4U by GhumoG',
    category: 'uttarakhand',
    location: 'Tapovan, Rishikesh',
    price: 2200,
    rating: 4.8,
    image: rishikeshViewImage,
    cardImage: room2Image,
    description: 'A serene riverside retreat in Tapovan, Rishikesh — wake to Himalayan views, walk to yoga ashrams and cafes, and unwind in comfortable, thoughtfully appointed rooms.',
    tagline: 'Wake Up to Himalayan Views',
    highlights: ['Scenic Views', 'Premium Stay', 'Comfort & Luxury', 'Family & Couple Friendly', 'Homely Hospitality', 'Free Parking'],
    amenities: ['Free WiFi', 'Mountain View', 'Hot Water', 'Free Parking', 'Room Service', 'Peaceful Stay'],
    gallery: rishikeshHotel4UGallery,
    galleryCategories: [
      { slug: 'exterior', name: 'Exterior' },
      { slug: 'rooms', name: 'Rooms' },
    ],
  },  
  {
    slug: 'hotel-rashal-stay',
    name: 'Hotel Rashal Stay by GhumoG',
    category: 'himachal-pradesh',
    location: 'Shoghi, Shimla',
    price: 2800,
    rating: 4.9,
    image: shimlaAttraction,
    cardImage: room8Image,
    description: 'A homely mountain stay in Shoghi, Shimla — surrounded by cedar forests with warm hospitality, homely food on request, and a peaceful atmosphere that feels like your own Himalayan home.',
    tagline: 'Pahadon Ki God Mein Aapka Apna Ghar',
    highlights: ['Homely Hospitality', 'Homely Food on Request', 'Peaceful Stay', 'Wooden Rooms', 'Bonfire on Request', 'Free Parking'],
    amenities: ['Free WiFi', 'Mountain View', 'Homely Food on Request', 'Bonfire on Request', 'Free Parking', 'Heater'],
    gallery: shimlaRashalGallery,
    galleryCategories: [
      { slug: 'exterior', name: 'Exterior' },
      { slug: 'rooms', name: 'Rooms' },
      { slug: 'food', name: 'Food Area' },
      { slug: 'parking', name: 'Parking Area' },
    ],
  },
  {
    slug: 'rishikesh-camping-resorts',
    name: 'Rishikesh Camping Resorts by GhumoG',
    category: 'uttarakhand',
    location: 'Shivpuri, Badrinath Road, Rishikesh',
    price: 1800,
    rating: 4.7,
    image: rishikeshCampViewImage2,
    cardImage : rishikeshCampViewImage,
    description: 'An outdoor camping experience on the banks of the Ganges — comfortable tents, a swimming pool, nature views and bonfire nights under the stars at Shivpuri, Rishikesh.',
    tagline: 'Come as a Guest, Leave as Family',
    highlights: ['Camping Experience', 'Swimming Pool', 'Nature Views', 'Outdoor Stay', 'Comfortable Rooms', 'Bonfire on Request'],
    amenities: ['Swimming Pool', 'Bonfire on Request', 'Free Parking', 'Hot Water', 'Meals', 'Nature Views'],
    gallery: rishikeshCampingGallery,
    galleryCategories: [
      { slug: 'exterior', name: 'Exterior & Camp' },
      { slug: 'rooms', name: 'Rooms' },
      { slug: 'pool', name: 'Swimming Pool' },
    ],
  },
];

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string[];
};

export const BLOGS: Blog[] = [
  {
    slug: 'shikari-devi-mandir',
    title: 'Shikari Devi Mandir — The Highest Temple in Shimla Hills',
    excerpt: 'A mystical temple perched at 3357m, offering 360° views of snow peaks and endless meadows.',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'March 12, 2025',
    readTime: '6 min read',
    content: [
      'Shikari Devi Mandir is one of the most sacred and least-commercialised temples in the Shimla hills. At an altitude of 3357 metres, it is the highest peak in the Shimla district and offers breathtaking 360-degree views of the Himalayan ranges.',
      'The temple is dedicated to Goddess Shikari Devi, and the journey itself is a pilgrimage through dense deodar forests, alpine meadows, and winding mountain trails. The route from Karsog is the most popular, passing through apple orchards and tiny hamlets.',
      'Best time to visit is between April and November. Monsoon months bring lush green carpets across the meadows, while autumn paints the landscape gold. Carry warm clothing even in summer — the wind at the summit is fierce.',
      'There is a forest rest house near the temple for overnight stays. Watching the sunrise from the peak, with clouds floating below you, is an experience that stays with you forever.',
    ],
  },
  {
    slug: 'hatu-peak',
    title: 'Hatu Peak — A Day Trip from Narkanda',
    excerpt: 'The highest point near Shimla with a pagoda-style temple and sweeping valley views.',
    image: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'February 28, 2025',
    readTime: '5 min read',
    content: [
      'Hatu Peak, at 3400 metres, is the highest peak in the Shimla district and a popular day trip from Narkanda. A narrow motorable road winds through dense coniferous forests to the summit.',
      'Atop the peak sits the Hatu Mata temple, built in traditional pagoda style with intricate wood carvings. The temple is believed to be where the Pandavas stayed during their exile.',
      'The 360° views from the top stretch from the Pir Panjal to the Dhauladhar ranges. On a clear day, you can see snow-capped peaks stretching endlessly. The meadows around the temple are perfect for a quiet picnic.',
      'Combine your visit with a stop at Tani Jubbar Lake, a serene spot 8km from Narkanda, ideal for a peaceful afternoon.',
    ],
  },
  {
    slug: 'khajjiar',
    title: 'Khajjiar — The Mini Switzerland of India',
    excerpt: 'A emerald meadow cradled by deodar forests, floating between Dalhousie and Chamba.',
    image: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'January 15, 2025',
    readTime: '7 min read',
    content: [
      'Khajjiar is often called the "Mini Switzerland of India" — and for good reason. A vast green meadow, surrounded by thick deodar forests, with a small lake at its centre, it looks straight out of a postcard.',
      'Located 24km from Dalhousie, Khajjiar is perfect for a day of leisure. You can horse-ride across the meadow, try zorbing in season, or simply lie back and watch the clouds drift over the surrounding peaks.',
      'The 12th-century Khajji Nag temple, with its golden dome and wooden carvings, sits at the edge of the meadow. It is one of the few temples where snakes are worshipped alongside the main deity.',
      'Visit between March and June for pleasant weather, or in winter (December-February) when the meadow is blanketed in snow — a completely different, magical experience.',
    ],
  },
  {
    slug: 'rishikesh-guide',
    title: 'Rishikesh — A First-Timer\'s Guide to the Yoga Capital',
    excerpt: 'Ashrams, cafes, river rafting and the Ganga aarti — your perfect Rishikesh itinerary.',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'December 20, 2024',
    readTime: '6 min read',
    content: [
      'Rishikesh, nestled in the foothills of the Himalayas along the Ganges, is known worldwide as the Yoga Capital of the World. But there is far more here than ashrams and meditation.',
      'Start your day with a walk through Tapovan, where cafes serve filter coffee with mountain views. Visit the iconic Laxman Jhula and Ram Jhula suspension bridges, and explore the Beatles Ashram for a slice of music history.',
      'Adventure seekers can book white-water rafting on the Ganges, or head to Shivpuri for riverside camping. The evening Ganga aarti at Triveni Ghat is a soul-stirring experience not to be missed.',
      'Stay at Rishikesh Hotel 4U in Tapovan for easy access to cafes and ashrams, or choose Rishikesh Camping Resorts in Shivpuri for a riverside camping experience with a swimming pool.',
    ],
  },
  {
    slug: 'shimla-shoghi-guide',
    title: 'Shoghi — Shimla\'s Quietest Corner',
    excerpt: 'Why this cedar-forested hamlet just outside Shimla is the perfect peaceful base.',
    image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'November 8, 2024',
    readTime: '5 min read',
    content: [
      'Shoghi, a quiet hamlet 13km short of Shimla, is surrounded by dense cedar and oak forests. Far from the crowds of Mall Road, it offers genuine peace and spectacular valley views.',
      'It is the ideal base for travellers who want Shimla\'s mountain charm without the noise. Wake to birdsong, walk through pine-scented trails, and watch the sunset paint the ranges gold.',
      'Hotel Rashal Stay by GhumoG is our homely property here — with wooden rooms, homely food on request, bonfire nights, and free parking. It truly feels like "Pahadon ki god mein aapka apna ghar".',
      'Combine your stay with day trips to Kufri, Mashobra, and the Christ Church area of Shimla, returning each evening to the quiet of Shoghi.',
    ],
  },
  {
    slug: 'spiti-valley',
    title: 'Spiti Valley — A Journey to the Middle Land',
    excerpt: 'A cold desert mountain valley with ancient monasteries, fossil villages, and stark beauty.',
    image: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'October 2, 2024',
    readTime: '8 min read',
    content: [
      'Spiti, meaning "the middle land", sits between Tibet and India at an average altitude of 12,500 feet. It is a cold desert — stark, dramatic, and profoundly beautiful. The landscape is all bare mountains, deep gorges, and tiny white-washed villages clinging to cliffs.',
      'Key Monastery, perched at 4112m, is the spiritual heart of Spiti. It is over 1000 years old and home to around 300 monks. The views from the monastery roof are otherworldly.',
      'Other must-visit spots include Chandratal Lake (a crescent of turquoise at 4300m), the fossil village of Langza, the world\'s highest post office in Hikkim, and the mummy of Giu.',
      'The best time to visit is between May and September. In winter, Spiti is largely cut off by snow. Carry cash — ATMs are rare and often empty. And acclimatise slowly to avoid altitude sickness.',
    ],
  },
];

export const VIDEOS = [
  { id: 'G8RmZvEOlbE', si: 'f4calo2O1VKZJYxt', title: 'Shimla Heritage Walk' },
  { id: 'K4N9ixgboSo', si: 'LyYhD-DxX-Hm1XK1', title: 'Kasauli Hidden Trails' },
  { id: 'AC5WZAM1mkA', si: 'MlmJnBxbeBoakbUT', title: 'Kedarnath Yatra Guide' },
  { id: 'upuNmW-I8yA', si: 'E5BW9pGAUExLe5bY', title: 'Spiti Valley Road Trip' },
  { id: 'FsWjQf8YQ8o', si: '2rUw2MdmDQ0KjTK2', title: 'Himachal Cottages Tour' },
];

export const FAQS = [
  { q: 'How do I book a hotel with GhumoG?', a: 'You can book directly through our website by selecting a hotel and clicking "Book Now", or message us on WhatsApp at +91 7018939901 for instant booking assistance.' },
  { q: 'What is your cancellation policy?', a: 'Free cancellation up to 7 days before check-in. Cancellations within 7 days are subject to a one-night charge. No-shows are charged in full.' },
  { q: 'Do you offer taxi and bike rentals?', a: 'Yes. We provide taxi services for local sightseeing and intercity travel, plus bike and scooty rentals for self-guided exploration. Visit our Transport Solutions page for details.' },
  { q: 'Can you customise holiday packages?', a: 'Absolutely. Every package can be tailored to your dates, budget, and interests. Message us on WhatsApp and our travel experts will craft a personalised itinerary.' },
  { q: 'Are your temple tour packages safe for elderly pilgrims?', a: 'Yes. We design Dharmik Yatra with comfortable transport, manageable trekking options, and rest stops. Let us know your needs and we will plan accordingly.' },
  { q: 'What payment methods do you accept?', a: 'We accept UPI, bank transfers, and major credit/debit cards. A 25% advance confirms your booking, with the balance payable on arrival.' },
];

export const TESTIMONIALS = [
  { name: 'Rahul Sharma', location: 'Delhi', text: 'GhumoG made our Shimla trip effortless. Hotel Rashal Stay in Shoghi was magical — misty mornings, bonfire nights, and the most helpful hosts.', rating: 5 },
  { name: 'Priya Nair', location: 'Bangalore', text: 'Stayed at Rishikesh Hotel 4U in Tapovan. Spotless rooms, Himalayan views from the terrace, and walking distance to cafes. Felt safe and cared for throughout.', rating: 5 },
  { name: 'Aman Verma', location: 'Chandigarh', text: 'Booked the Rishikesh Camping Resorts for a friends trip — swimming pool, riverside bonfire, and comfortable tents. Best budget option in Shivpuri. Highly recommend.', rating: 5 },
  { name: 'Sneha Kapoor', location: 'Mumbai', text: 'The Shoghi stay was exactly what we needed — peaceful, beautiful, and away from crowds. Truly "come as a guest, leave as family". Will book again for sure.', rating: 5 },
];
