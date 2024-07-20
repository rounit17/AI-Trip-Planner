// import { GoogleGenerativeAI } from "@google/generative-ai";

//   const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);

//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });

//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "application/json",
//   };


//     export const chatSession = model.startChat({
//       generationConfig,
//       history: [
//         {
//           role: "user",
//           parts: [
//             {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
//           ],
//         },
//         {
//           role: "model",
//           parts: [
//             {text: "## Las Vegas 3-Day Budget Trip for a Couple:\n\n**Hotels:**\n\n**1.  Circus Circus Hotel & Casino:**\n    * **Address:** 2880 Las Vegas Blvd S, Las Vegas, NV 89109\n    * **Price:** From $40/night\n    * **Image URL:** https://www.circuscircus.com/media/images/hotel-rooms/circus-circus-hotel-rooms.jpg\n    * **Geo Coordinates:** 36.1234° N, 115.1765° W\n    * **Rating:** 3.5 stars\n    * **Description:** Circus Circus is a classic Las Vegas hotel known for its affordable rates, circus-themed entertainment, and family-friendly atmosphere. While not the most luxurious, it offers a decent stay for budget travelers. \n\n**2.  The D Las Vegas:**\n    * **Address:** 301 Fremont Street, Las Vegas, NV 89101\n    * **Price:** From $30/night\n    * **Image URL:** https://www.thedlasvegas.com/media/2021/09/The-D-Las-Vegas-exterior-01-1-800x450.jpg\n    * **Geo Coordinates:** 36.1671° N, 115.1429° W\n    * **Rating:** 3.5 stars\n    * **Description:** This downtown hotel is known for its vintage charm and its proximity to the Fremont Street Experience. It offers a more laid-back vibe with affordable rooms and a decent casino.\n\n**3.  Golden Nugget Las Vegas:**\n    * **Address:** 129 E Fremont St, Las Vegas, NV 89101\n    * **Price:** From $50/night\n    * **Image URL:** https://www.goldennugget.com/media/images/hotel/Golden-Nugget-Exterior-Day.jpg\n    * **Geo Coordinates:** 36.1674° N, 115.1434° W\n    * **Rating:** 4 stars\n    * **Description:** The Golden Nugget offers a more luxurious feel while still maintaining budget-friendly options. It boasts a beautiful pool complex, an exciting casino, and several dining options.\n\n**Itinerary:**\n\n**Day 1:**\n\n* **Morning (9:00 AM - 12:00 PM):** Explore the Fremont Street Experience.\n    * **Place Name:** Fremont Street Experience\n    * **Place Details:** An iconic pedestrian mall with a giant video screen canopy, free live music, and street performers.\n    * **Image URL:** https://www.fremontstreetexperience.com/media/images/video_canopy/FremontStreetExperience-Video-Canopy-01.jpg\n    * **Geo Coordinates:** 36.1670° N, 115.1436° W\n    * **Ticket Pricing:** Free\n    * **Rating:** 4 stars\n* **Afternoon (12:00 PM - 3:00 PM):** Indulge in a delicious and affordable lunch at the Fremont Street Experience. \n    * **Place Name:** Various Food Stalls and Restaurants\n    * **Place Details:** Choose from a wide selection of affordable options, from casual eateries to food trucks.\n    * **Image URL:** https://www.fremontstreetexperience.com/media/images/food-and-drink/Fremont-Street-Experience-Food-and-Drink-01.jpg\n    * **Geo Coordinates:** 36.1670° N, 115.1436° W\n    * **Ticket Pricing:** Varies\n    * **Rating:** 4 stars\n* **Evening (3:00 PM - 8:00 PM):** Explore the Neon Museum and enjoy dinner at a budget-friendly restaurant.\n    * **Place Name:** Neon Museum\n    * **Place Details:** An open-air museum showcasing vintage Las Vegas signs.\n    * **Image URL:** https://www.neonmuseum.org/sites/default/files/styles/hero/public/neon-museum-hero.jpg?itok=fK1o_n8Y\n    * **Geo Coordinates:** 36.1464° N, 115.1526° W\n    * **Ticket Pricing:** $20-25\n    * **Rating:** 4.5 stars\n\n**Day 2:**\n\n* **Morning (9:00 AM - 12:00 PM):** Visit the Bellagio Conservatory & Botanical Garden.\n    * **Place Name:** Bellagio Conservatory & Botanical Garden\n    * **Place Details:** A stunning indoor garden with elaborate floral displays that change seasonally.\n    * **Image URL:** https://www.bellagio.com/content/dam/bellagio/images/conservatory/conservatory-hero-2.jpg\n    * **Geo Coordinates:** 36.1171° N, 115.1724° W\n    * **Ticket Pricing:** Free\n    * **Rating:** 4.5 stars\n* **Afternoon (12:00 PM - 3:00 PM):** Enjoy a picnic lunch at the Fountains of Bellagio.\n    * **Place Name:** Fountains of Bellagio\n    * **Place Details:** A famous water and light show that takes place in front of the Bellagio Hotel.\n    * **Image URL:** https://www.bellagio.com/content/dam/bellagio/images/fountains/fountains-hero.jpg\n    * **Geo Coordinates:** 36.1172° N, 115.1725° W\n    * **Ticket Pricing:** Free\n    * **Rating:** 5 stars\n* **Evening (3:00 PM - 8:00 PM):** Explore the LINQ Promenade and enjoy dinner at a casual restaurant. \n    * **Place Name:** LINQ Promenade\n    * **Place Details:** A pedestrian mall with shops, restaurants, and attractions including the High Roller observation wheel.\n    * **Image URL:** https://www.caesars.com/content/dam/caesars/linq/linq-promenade/linq-promenade-hero.jpg\n    * **Geo Coordinates:** 36.1148° N, 115.1725° W\n    * **Ticket Pricing:** Varies\n    * **Rating:** 4 stars\n\n**Day 3:**\n\n* **Morning (9:00 AM - 12:00 PM):** Visit the Las Vegas Strip. \n    * **Place Name:** Las Vegas Strip\n    * **Place Details:** The main thoroughfare of Las Vegas, home to world-class hotels, casinos, and entertainment.\n    * **Image URL:** https://www.visitlasvegas.com/media/images/las-vegas-strip-night.jpg\n    * **Geo Coordinates:** 36.1105° N, 115.1735° W\n    * **Ticket Pricing:** Free\n    * **Rating:** 5 stars\n* **Afternoon (12:00 PM - 3:00 PM):** Enjoy a free show at the Bellagio Fountains.\n    * **Place Name:** Bellagio Fountains\n    * **Place Details:** A famous water and light show that takes place in front of the Bellagio Hotel.\n    * **Image URL:** https://www.bellagio.com/content/dam/bellagio/images/fountains/fountains-hero.jpg\n    * **Geo Coordinates:** 36.1172° N, 115.1725° W\n    * **Ticket Pricing:** Free\n    * **Rating:** 5 stars\n* **Evening (3:00 PM - 8:00 PM):** Explore the Wynn Las Vegas and enjoy a final dinner at a budget-friendly restaurant. \n    * **Place Name:** Wynn Las Vegas\n    * **Place Details:** A luxurious resort with a world-class spa, pools, and restaurants.\n    * **Image URL:** https://www.wynnlasvegas.com/content/dam/wynn/images/hero-images/wynn-hero-image-desktop.jpg\n    * **Geo Coordinates:** 36.1116° N, 115.1719° W\n    * **Ticket Pricing:** Free (for exploring the property)\n    * **Rating:** 4.5 stars\n\n**Notes:**\n\n* This itinerary is just a suggestion and can be customized based on your interests and time constraints.\n* Take advantage of free activities and attractions, such as the Bellagio Fountains and Conservatory, the Fremont Street Experience, and the Las Vegas Strip.\n* Look for deals and discounts on food, drinks, and entertainment.\n* Consider using public transportation or walking to save on transportation costs.\n\nThis plan allows you to enjoy the best of Las Vegas without breaking the bank! \n"},
//           ],
//         },
//         {
//           role: "user",
//           parts: [
//             {text: "Write in JSON format"},
//           ],
//         },
//         {
//           role: "model",
//           parts: [
//             {text: "```json\n{\n  \"hotels\": [\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"From $40/night\",\n      \"imageUrl\": \"https://www.circuscircus.com/media/images/hotel-rooms/circus-circus-hotel-rooms.jpg\",\n      \"geoCoordinates\": \"36.1234° N, 115.1765° W\",\n      \"rating\": 3.5,\n      \"description\": \"Circus Circus is a classic Las Vegas hotel known for its affordable rates, circus-themed entertainment, and family-friendly atmosphere. While not the most luxurious, it offers a decent stay for budget travelers.\"\n    },\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"From $30/night\",\n      \"imageUrl\": \"https://www.thedlasvegas.com/media/2021/09/The-D-Las-Vegas-exterior-01-1-800x450.jpg\",\n      \"geoCoordinates\": \"36.1671° N, 115.1429° W\",\n      \"rating\": 3.5,\n      \"description\": \"This downtown hotel is known for its vintage charm and its proximity to the Fremont Street Experience. It offers a more laid-back vibe with affordable rooms and a decent casino.\"\n    },\n    {\n      \"name\": \"Golden Nugget Las Vegas\",\n      \"address\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"From $50/night\",\n      \"imageUrl\": \"https://www.goldennugget.com/media/images/hotel/Golden-Nugget-Exterior-Day.jpg\",\n      \"geoCoordinates\": \"36.1674° N, 115.1434° W\",\n      \"rating\": 4,\n      \"description\": \"The Golden Nugget offers a more luxurious feel while still maintaining budget-friendly options. It boasts a beautiful pool complex, an exciting casino, and several dining options.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": [\n      {\n        \"time\": \"9:00 AM - 12:00 PM\",\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"An iconic pedestrian mall with a giant video screen canopy, free live music, and street performers.\",\n        \"imageUrl\": \"https://www.fremontstreetexperience.com/media/images/video_canopy/FremontStreetExperience-Video-Canopy-01.jpg\",\n        \"geoCoordinates\": \"36.1670° N, 115.1436° W\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4\n      },\n      {\n        \"time\": \"12:00 PM - 3:00 PM\",\n        \"placeName\": \"Various Food Stalls and Restaurants\",\n        \"placeDetails\": \"Choose from a wide selection of affordable options, from casual eateries to food trucks.\",\n        \"imageUrl\": \"https://www.fremontstreetexperience.com/media/images/food-and-drink/Fremont-Street-Experience-Food-and-Drink-01.jpg\",\n        \"geoCoordinates\": \"36.1670° N, 115.1436° W\",\n        \"ticketPricing\": \"Varies\",\n        \"rating\": 4\n      },\n      {\n        \"time\": \"3:00 PM - 8:00 PM\",\n        \"placeName\": \"Neon Museum\",\n        \"placeDetails\": \"An open-air museum showcasing vintage Las Vegas signs.\",\n        \"imageUrl\": \"https://www.neonmuseum.org/sites/default/files/styles/hero/public/neon-museum-hero.jpg?itok=fK1o_n8Y\",\n        \"geoCoordinates\": \"36.1464° N, 115.1526° W\",\n        \"ticketPricing\": \"$20-25\",\n        \"rating\": 4.5\n      }\n    ],\n    \"day2\": [\n      {\n        \"time\": \"9:00 AM - 12:00 PM\",\n        \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n        \"placeDetails\": \"A stunning indoor garden with elaborate floral displays that change seasonally.\",\n        \"imageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/conservatory/conservatory-hero-2.jpg\",\n        \"geoCoordinates\": \"36.1171° N, 115.1724° W\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.5\n      },\n      {\n        \"time\": \"12:00 PM - 3:00 PM\",\n        \"placeName\": \"Fountains of Bellagio\",\n        \"placeDetails\": \"A famous water and light show that takes place in front of the Bellagio Hotel.\",\n        \"imageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/fountains/fountains-hero.jpg\",\n        \"geoCoordinates\": \"36.1172° N, 115.1725° W\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 5\n      },\n      {\n        \"time\": \"3:00 PM - 8:00 PM\",\n        \"placeName\": \"LINQ Promenade\",\n        \"placeDetails\": \"A pedestrian mall with shops, restaurants, and attractions including the High Roller observation wheel.\",\n        \"imageUrl\": \"https://www.caesars.com/content/dam/caesars/linq/linq-promenade/linq-promenade-hero.jpg\",\n        \"geoCoordinates\": \"36.1148° N, 115.1725° W\",\n        \"ticketPricing\": \"Varies\",\n        \"rating\": 4\n      }\n    ],\n    \"day3\": [\n      {\n        \"time\": \"9:00 AM - 12:00 PM\",\n        \"placeName\": \"Las Vegas Strip\",\n        \"placeDetails\": \"The main thoroughfare of Las Vegas, home to world-class hotels, casinos, and entertainment.\",\n        \"imageUrl\": \"https://www.visitlasvegas.com/media/images/las-vegas-strip-night.jpg\",\n        \"geoCoordinates\": \"36.1105° N, 115.1735° W\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 5\n      },\n      {\n        \"time\": \"12:00 PM - 3:00 PM\",\n        \"placeName\": \"Bellagio Fountains\",\n        \"placeDetails\": \"A famous water and light show that takes place in front of the Bellagio Hotel.\",\n        \"imageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/fountains/fountains-hero.jpg\",\n        \"geoCoordinates\": \"36.1172° N, 115.1725° W\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 5\n      },\n      {\n        \"time\": \"3:00 PM - 8:00 PM\",\n        \"placeName\": \"Wynn Las Vegas\",\n        \"placeDetails\": \"A luxurious resort with a world-class spa, pools, and restaurants.\",\n        \"imageUrl\": \"https://www.wynnlasvegas.com/content/dam/wynn/images/hero-images/wynn-hero-image-desktop.jpg\",\n        \"geoCoordinates\": \"36.1116° N, 115.1719° W\",\n        \"ticketPricing\": \"Free (for exploring the property)\",\n        \"rating\": 4.5\n      }\n    ]\n  }\n}\n```"},
//           ],
//         },
//       ],
//     });




// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate a Travel Plan for the Location: Las Vegas, for 3 Days for a Couple with a Cheap budget. Give a list of Hotel options with Hotel Name, Price, Hotel Image url, Geo Coordinates, Rating, Description. Also suggest an itinerary with Place Name, Place Details, Place Image url, Geo Coordinates, ticket Pricing, Time to Travel each of the location in 3 Days with each day, plan the best time to visit in JSON format" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "## Las Vegas Travel Plan for a Couple on a Budget (3 Days)\n\n**Budget:** This plan focuses on finding affordable options and maximizing free experiences.\n\n**Hotel Options:**\n\n**1.  Circus Circus Hotel & Casino**\n\n* **Price:**  Starts from $30 per night\n* **Image URL:** https://www.circuscircus.com/media/images/featured-image/circus-circus-las-vegas-exterior-night.jpg\n* **Geo Coordinates:** 36.1699° N, 115.1723° W\n* **Rating:** 3.5 stars\n* **Description:** A classic Las Vegas experience with a carnival theme, offering affordable rooms, a midway with games, and a circus show.\n\n**2.  The D Las Vegas**\n\n* **Price:** Starts from $40 per night\n* **Image URL:** https://www.thedlasvegas.com/media/images/hotel/TheD-ExteriorNight.jpg\n* **Geo Coordinates:** 36.1684° N, 115.1738° W\n* **Rating:** 3.5 stars\n* **Description:**  A stylish and modern hotel with affordable rooms, a casino, and a lively bar.\n\n**3.  The Golden Nugget Hotel & Casino**\n\n* **Price:**  Starts from $50 per night\n* **Image URL:** https://www.goldennugget.com/las-vegas/media/images/goldennugget_lasvegas_exterior.jpg\n* **Geo Coordinates:** 36.1678° N, 115.1717° W\n* **Rating:** 4 stars\n* **Description:**  A historic hotel with a luxurious feel, offering an impressive pool area with a shark tank and a vibrant casino.\n\n**Itinerary:**\n\n**Day 1:**\n\n* **Morning (9:00 AM - 12:00 PM):** \n    * **Place:** Fremont Street Experience\n    * **Details:**  Free walking area with a giant video canopy, live music, street performers, and classic casinos.\n    * **Image URL:** https://www.fremontstreetexperience.com/media/images/frontpage-carousel-image-1.jpg\n    * **Geo Coordinates:** 36.1683° N, 115.1733° W\n    * **Ticket Pricing:** Free\n    * **Time to Travel:** 2 hours\n* **Afternoon (12:00 PM - 4:00 PM):**\n    * **Place:**  The Neon Museum\n    * **Details:** Explore a collection of vintage Las Vegas signs, including iconic ones from the city's past.\n    * **Image URL:** https://www.neonmuseum.org/images/gallery/main-gallery/main-gallery-02.jpg\n    * **Geo Coordinates:** 36.1726° N, 115.1404° W\n    * **Ticket Pricing:**  $25 per person \n    * **Time to Travel:**  2 hours\n* **Evening (4:00 PM - 10:00 PM):**\n    * **Place:**  Free Show at a Casino \n    * **Details:**  Most casinos on the Strip offer free shows, such as fountains, light shows, or concerts.\n    * **Image URL:** https://www.bellagio.com/media/images/bellagio-fountains.jpg\n    * **Geo Coordinates:** 36.1178° N, 115.1724° W (Bellagio Fountains)\n    * **Ticket Pricing:** Free\n    * **Time to Travel:**  4 hours\n\n**Day 2:**\n\n* **Morning (9:00 AM - 12:00 PM):** \n    * **Place:**  Hiking at Red Rock Canyon National Conservation Area\n    * **Details:**  Enjoy scenic hiking trails and stunning desert landscapes.\n    * **Image URL:** https://www.nps.gov/redr/learn/nature/images/redrockcanyon-mountain.jpg\n    * **Geo Coordinates:** 36.1473° N, 115.1778° W \n    * **Ticket Pricing:**  $15 per vehicle\n    * **Time to Travel:**  3 hours \n* **Afternoon (12:00 PM - 4:00 PM):**\n    * **Place:**  Valley of Fire State Park\n    * **Details:**  Explore red rock formations, unique geological features, and scenic hiking trails.\n    * **Image URL:** https://www.parks.nv.gov/images/parks/valley-of-fire/valley-of-fire-featured.jpg\n    * **Geo Coordinates:** 36.3609° N, 114.8025° W\n    * **Ticket Pricing:**  $10 per vehicle\n    * **Time to Travel:**  3 hours\n* **Evening (4:00 PM - 10:00 PM):**\n    * **Place:**  Free Concert or Show\n    * **Details:**  Many bars and clubs in downtown Las Vegas offer free live music and entertainment.\n    * **Image URL:**  https://www.fremontstreetexperience.com/media/images/frontpage-carousel-image-1.jpg (Fremont Street)\n    * **Geo Coordinates:**  36.1683° N, 115.1733° W\n    * **Ticket Pricing:**  Free\n    * **Time to Travel:**  4 hours \n\n**Day 3:**\n\n* **Morning (9:00 AM - 12:00 PM):**\n    * **Place:**  Stratosphere Tower\n    * **Details:**  Ride the Big Shot and other thrill rides, enjoy panoramic views from the observation deck, and explore the casino.\n    * **Image URL:** https://www.stratospherehotel.com/media/images/big-shot.jpg\n    * **Geo Coordinates:** 36.1711° N, 115.1715° W\n    * **Ticket Pricing:**  From $15 per ride\n    * **Time to Travel:** 2 hours\n* **Afternoon (12:00 PM - 4:00 PM):**\n    * **Place:**  Free Walking Tour of the Strip \n    * **Details:**  Take a self-guided tour to admire the iconic hotels and casinos. \n    * **Image URL:** https://www.lasvegas.com/media/images/las-vegas-strip-at-night.jpg\n    * **Geo Coordinates:** 36.1178° N, 115.1724° W \n    * **Ticket Pricing:**  Free \n    * **Time to Travel:** 3 hours\n* **Evening (4:00 PM - 10:00 PM):**\n    * **Place:**  Local Dinner and Drinks \n    * **Details:**  Enjoy a budget-friendly dinner at a local restaurant and drinks at a bar.\n    * **Image URL:**  (Place a relevant image of a local eatery)\n    * **Geo Coordinates:**  (Provide a specific restaurant location)\n    * **Ticket Pricing:**  Based on your choices\n    * **Time to Travel:**  4 hours\n\n**Best Time to Visit:**\n\n* **Spring (March-May) and Fall (September-November):**  Pleasant weather with moderate temperatures.\n* **Summer (June-August):**  Extremely hot weather, but many indoor attractions and activities are available.\n* **Winter (December-February):**  Mild temperatures, but the city is busy with holiday events.\n\n**This itinerary provides a balance of free and paid experiences, allowing you to explore the vibrant city of Las Vegas on a budget. It can be adjusted based on your interests and preferences.**\n" },
      ],
    },
    {
      role: "user",
      parts: [
        { text: "Write in JSON format" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"budget\": \"cheap\",\n  \"location\": \"Las Vegas\",\n  \"duration\": \"3 days\",\n  \"travelers\": \"Couple\",\n  \"hotels\": [\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"price\": \"Starts from $30 per night\",\n      \"image_url\": \"https://www.circuscircus.com/media/images/featured-image/circus-circus-las-vegas-exterior-night.jpg\",\n      \"geo_coordinates\": \"36.1699° N, 115.1723° W\",\n      \"rating\": \"3.5 stars\",\n      \"description\": \"A classic Las Vegas experience with a carnival theme, offering affordable rooms, a midway with games, and a circus show.\"\n    },\n    {\n      \"name\": \"The D Las Vegas\",\n      \"price\": \"Starts from $40 per night\",\n      \"image_url\": \"https://www.thedlasvegas.com/media/images/hotel/TheD-ExteriorNight.jpg\",\n      \"geo_coordinates\": \"36.1684° N, 115.1738° W\",\n      \"rating\": \"3.5 stars\",\n      \"description\": \"A stylish and modern hotel with affordable rooms, a casino, and a lively bar.\"\n    },\n    {\n      \"name\": \"The Golden Nugget Hotel & Casino\",\n      \"price\": \"Starts from $50 per night\",\n      \"image_url\": \"https://www.goldennugget.com/las-vegas/media/images/goldennugget_lasvegas_exterior.jpg\",\n      \"geo_coordinates\": \"36.1678° N, 115.1717° W\",\n      \"rating\": \"4 stars\",\n      \"description\": \"A historic hotel with a luxurious feel, offering an impressive pool area with a shark tank and a vibrant casino.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"schedule\": [\n        {\n          \"time\": \"9:00 AM - 12:00 PM\",\n          \"place\": \"Fremont Street Experience\",\n          \"details\": \"Free walking area with a giant video canopy, live music, street performers, and classic casinos.\",\n          \"image_url\": \"https://www.fremontstreetexperience.com/media/images/frontpage-carousel-image-1.jpg\",\n          \"geo_coordinates\": \"36.1683° N, 115.1733° W\",\n          \"ticket_pricing\": \"Free\",\n          \"time_to_travel\": \"2 hours\"\n        },\n        {\n          \"time\": \"12:00 PM - 4:00 PM\",\n          \"place\": \"The Neon Museum\",\n          \"details\": \"Explore a collection of vintage Las Vegas signs, including iconic ones from the city's past.\",\n          \"image_url\": \"https://www.neonmuseum.org/images/gallery/main-gallery/main-gallery-02.jpg\",\n          \"geo_coordinates\": \"36.1726° N, 115.1404° W\",\n          \"ticket_pricing\": \"$25 per person\",\n          \"time_to_travel\": \"2 hours\"\n        },\n        {\n          \"time\": \"4:00 PM - 10:00 PM\",\n          \"place\": \"Free Show at a Casino\",\n          \"details\": \"Most casinos on the Strip offer free shows, such as fountains, light shows, or concerts.\",\n          \"image_url\": \"https://www.bellagio.com/media/images/bellagio-fountains.jpg\",\n          \"geo_coordinates\": \"36.1178° N, 115.1724° W\",\n          \"ticket_pricing\": \"Free\",\n          \"time_to_travel\": \"4 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"schedule\": [\n        {\n          \"time\": \"9:00 AM - 12:00 PM\",\n          \"place\": \"Hiking at Red Rock Canyon National Conservation Area\",\n          \"details\": \"Enjoy scenic hiking trails and stunning desert landscapes.\",\n          \"image_url\": \"https://www.nps.gov/redr/learn/nature/images/redrockcanyon-mountain.jpg\",\n          \"geo_coordinates\": \"36.1473° N, 115.1778° W\",\n          \"ticket_pricing\": \"$15 per vehicle\",\n          \"time_to_travel\": \"3 hours\"\n        },\n        {\n          \"time\": \"12:00 PM - 4:00 PM\",\n          \"place\": \"Valley of Fire State Park\",\n          \"details\": \"Explore red rock formations, unique geological features, and scenic hiking trails.\",\n          \"image_url\": \"https://www.parks.nv.gov/images/parks/valley-of-fire/valley-of-fire-featured.jpg\",\n          \"geo_coordinates\": \"36.3609° N, 114.8025° W\",\n          \"ticket_pricing\": \"$10 per vehicle\",\n          \"time_to_travel\": \"3 hours\"\n        },\n        {\n          \"time\": \"4:00 PM - 10:00 PM\",\n          \"place\": \"Free Concert or Show\",\n          \"details\": \"Many bars and clubs in downtown Las Vegas offer free live music and entertainment.\",\n          \"image_url\": \"https://www.fremontstreetexperience.com/media/images/frontpage-carousel-image-1.jpg\",\n          \"geo_coordinates\": \"36.1683° N, 115.1733° W\",\n          \"ticket_pricing\": \"Free\",\n          \"time_to_travel\": \"4 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 3\",\n      \"schedule\": [\n        {\n          \"time\": \"9:00 AM - 12:00 PM\",\n          \"place\": \"Stratosphere Tower\",\n          \"details\": \"Ride the Big Shot and other thrill rides, enjoy panoramic views from the observation deck, and explore the casino.\",\n          \"image_url\": \"https://www.stratospherehotel.com/media/images/big-shot.jpg\",\n          \"geo_coordinates\": \"36.1711° N, 115.1715° W\",\n          \"ticket_pricing\": \"From $15 per ride\",\n          \"time_to_travel\": \"2 hours\"\n        },\n        {\n          \"time\": \"12:00 PM - 4:00 PM\",\n          \"place\": \"Free Walking Tour of the Strip\",\n          \"details\": \"Take a self-guided tour to admire the iconic hotels and casinos.\",\n          \"image_url\": \"https://www.lasvegas.com/media/images/las-vegas-strip-at-night.jpg\",\n          \"geo_coordinates\": \"36.1178° N, 115.1724° W\",\n          \"ticket_pricing\": \"Free\",\n          \"time_to_travel\": \"3 hours\"\n        },\n        {\n          \"time\": \"4:00 PM - 10:00 PM\",\n          \"place\": \"Local Dinner and Drinks\",\n          \"details\": \"Enjoy a budget-friendly dinner at a local restaurant and drinks at a bar.\",\n          \"image_url\": \"PLACEHOLDER_IMAGE_URL\",\n          \"geo_coordinates\": \"PLACEHOLDER_COORDINATES\",\n          \"ticket_pricing\": \"Based on your choices\",\n          \"time_to_travel\": \"4 hours\"\n        }\n      ]\n    }\n  ],\n  \"best_time_to_visit\": [\n    \"Spring (March-May)\",\n    \"Fall (September-November)\",\n    \"Summer (June-August) - Extremely hot weather but many indoor attractions and activities are available.\",\n    \"Winter (December-February) - Mild temperatures, but the city is busy with holiday events.\"\n  ]\n}\n```\n\n**Note:**  \n- You will need to replace \"PLACEHOLDER_IMAGE_URL\" and \"PLACEHOLDER_COORDINATES\" with actual values for the local dinner and drinks section.\n- This JSON format is designed to be easily parsed and used for further processing or display. \n" },
      ],
    },
  ],
});



