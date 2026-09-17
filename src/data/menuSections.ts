/**
 * The dish list of Hotel Sarvottam - the single source of truth for every menu
 * card.  Content only: no layout, no styling.  Add a dish by adding an entry to
 * the relevant section; the card it appears on is decided in `menuPages.ts`.
 *
 * Prices are stored as numbers so they can be formatted (and one day totalled)
 * consistently; `fullAmount` is the full-plate price where a half plate exists.
 */
import type { MenuSection } from '../types/menu';

export const MENU_SECTIONS = [
  {
    id: 'starters',
    icon: 'papad',
    title: { mr: 'स्टार्टर', en: 'Starters' },
    items: [
      {
        id: 'starters-masala-papad',
        name: { mr: 'मसाला पापड', en: 'Masala Papad' },
        price: { amount: 40 },
      },
      {
        id: 'starters-roasted-papad',
        name: { mr: 'रोस्टेड पापड', en: 'Roasted Papad' },
        price: { amount: 20 },
      },
      {
        id: 'starters-fry-papad',
        name: { mr: 'फ्राय पापड', en: 'Fry Papad' },
        price: { amount: 25 },
      },
      {
        id: 'starters-nagli-masala-papad',
        name: { mr: 'नागली मसाला पापड', en: 'Nagli Masala Papad' },
        price: { amount: 50 },
      },
      {
        id: 'starters-nagli-fry-papad',
        name: { mr: 'नागली फ्राय पापड', en: 'Nagli Fry Papad' },
        price: { amount: 30 },
      },
      {
        id: 'starters-nagli-roasted-papad',
        name: { mr: 'नागली रोस्टेड पापड', en: 'Nagli Roasted Papad' },
        price: { amount: 25 },
      },
      {
        id: 'starters-special-papad',
        name: { mr: 'स्पेशल पापड', en: 'Special Papad' },
        price: { amount: 25 },
      },
    ],
  },
  {
    id: 'main-course',
    icon: 'dal',
    title: { mr: 'मेन कोर्स', en: 'Main Course' },
    items: [
      {
        id: 'main-course-dal-fry',
        name: { mr: 'दाल फ्राय', en: 'Dal Fry' },
        price: { amount: 120 },
      },
      {
        id: 'main-course-dal-tadka',
        name: { mr: 'दाल तडका', en: 'Dal Tadka' },
        price: { amount: 130 },
      },
      {
        id: 'main-course-jeera-dal',
        name: { mr: 'जीरा दाल', en: 'Jeera Dal' },
        price: { amount: 130 },
      },
      {
        id: 'main-course-butter-dal-fry',
        name: { mr: 'बटर दाल फ्राय', en: 'Butter Dal Fry' },
        price: { amount: 140 },
      },
      {
        id: 'main-course-dal-methi',
        name: { mr: 'दाल मेथी', en: 'Dal Methi' },
        price: { amount: 140 },
      },
      {
        id: 'main-course-shev-bhaji',
        name: { mr: 'शेव भाजी', en: 'Shev Bhaji' },
        price: { amount: 120 },
        isSignature: true,
      },
      {
        id: 'main-course-shev-bhaji-milk',
        name: { mr: 'शेव भाजी (दूध)', en: 'Shev Bhaji (Milk)' },
        price: { amount: 130 },
      },
      {
        id: 'main-course-shev-tomato',
        name: { mr: 'शेव टोमॅटो', en: 'Shev Tomato' },
        price: { amount: 130 },
      },
      {
        id: 'main-course-aloo-shev',
        name: { mr: 'आलू शेव', en: 'Aloo Shev' },
        price: { amount: 130 },
      },
      {
        id: 'main-course-shev-kolhapuri',
        name: { mr: 'शेव कोल्हापुरी', en: 'Shev Kolhapuri' },
        price: { amount: 140 },
        isSignature: true,
      },
      {
        id: 'main-course-aloo-matar',
        name: { mr: 'आलू मटर', en: 'Aloo Matar' },
        price: { amount: 130 },
      },
      {
        id: 'main-course-jeera-aloo',
        name: { mr: 'जीरा आलू', en: 'Jeera Aloo' },
        price: { amount: 110 },
      },
      {
        id: 'main-course-aloo-methi',
        name: { mr: 'आलू मेथी', en: 'Aloo Methi' },
        price: { amount: 130 },
      },
      {
        id: 'main-course-aloo-masala',
        name: { mr: 'आलू मसाला', en: 'Aloo Masala' },
        price: { amount: 120 },
      },
      {
        id: 'main-course-aloo-palak-chutney',
        name: { mr: 'आलू पालक चटणी', en: 'Aloo Palak Chutney' },
        price: { amount: 140 },
      },
      {
        id: 'main-course-dum-aloo-punjabi',
        name: { mr: 'दम आलू पंजाबी', en: 'Dum Aloo Punjabi' },
        price: { amount: 180 },
      },
      {
        id: 'main-course-dum-aloo-kashmiri',
        name: { mr: 'दम आलू काश्मिरी', en: 'Dum Aloo Kashmiri' },
        price: { amount: 210 },
      },
      {
        id: 'main-course-aloo-palak',
        name: { mr: 'आलू पालक', en: 'Aloo Palak' },
        price: { amount: 160 },
      },
      {
        id: 'main-course-aloo-gobi',
        name: { mr: 'आलू गोबी', en: 'Aloo Gobi' },
        price: { amount: 140 },
      },
      {
        id: 'main-course-aloo-chole',
        name: { mr: 'आलू छोले', en: 'Aloo Chole' },
        price: { amount: 140 },
      },
      {
        id: 'main-course-shevga-masala',
        name: { mr: 'शेवगा मसाला', en: 'Shevga Masala' },
        price: { amount: 140 },
      },
    ],
  },
  {
    id: 'maharashtrian',
    icon: 'chili',
    title: { mr: 'महाराष्ट्रीय झटका', en: 'Maharashtrian Specials' },
    items: [
      {
        id: 'maharashtrian-pithla',
        name: { mr: 'पिठले', en: 'Pithla' },
        price: { amount: 120 },
      },
      {
        id: 'maharashtrian-lasuni-pithla',
        name: { mr: 'लसुणी पिठले', en: 'Lasuni Pithla' },
        price: { amount: 130 },
      },
      {
        id: 'maharashtrian-shengdana-thecha',
        name: { mr: 'शेंगदाणा ठेचा', en: 'Shengdana Thecha' },
        price: { amount: 120 },
        isSignature: true,
      },
      {
        id: 'maharashtrian-zirak',
        name: { mr: 'झिरक', en: 'Zirak' },
        price: { amount: 100 },
      },
      {
        id: 'maharashtrian-shengdana-chutney',
        name: { mr: 'शेंगदाणा चटणी', en: 'Shengdana Chutney' },
        price: { amount: 120 },
      },
      {
        id: 'maharashtrian-mirchi-thecha',
        name: { mr: 'मिरची ठेचा', en: 'Mirchi Thecha' },
        price: { amount: 100 },
      },
      {
        id: 'maharashtrian-papad-chutney',
        name: { mr: 'पापड चटणी', en: 'Papad Chutney' },
        price: { amount: 130 },
      },
    ],
  },
  {
    id: 'soup',
    icon: 'soup',
    title: { mr: 'सूप', en: 'Soup' },
    items: [
      {
        id: 'soup-veg-manchurian-soup',
        name: { mr: 'व्हेज मंच्युरियन सूप', en: 'Veg Manchurian Soup' },
        price: { amount: 80 },
      },
      {
        id: 'soup-tomato-soup',
        name: { mr: 'टोमॅटो सूप', en: 'Tomato Soup' },
        price: { amount: 80 },
      },
      {
        id: 'soup-veg-soup',
        name: { mr: 'व्हेज सूप', en: 'Veg Soup' },
        price: { amount: 90 },
      },
    ],
  },
  {
    id: 'salad',
    icon: 'salad',
    title: { mr: 'सलाड', en: 'Salad' },
    items: [
      {
        id: 'salad-green-salad',
        name: { mr: 'ग्रीन सलाड', en: 'Green Salad' },
        price: { amount: 50 },
      },
      {
        id: 'salad-onion-salad',
        name: { mr: 'ऑनियन सलाड', en: 'Onion Salad' },
        price: { amount: 30 },
      },
      {
        id: 'salad-russian-salad',
        name: { mr: 'रशियन सलाड', en: 'Russian Salad' },
        price: { amount: 70 },
      },
      {
        id: 'salad-gobi-salad',
        name: { mr: 'गोबी सलाड', en: 'Gobi Salad' },
        price: { amount: 50 },
      },
      {
        id: 'salad-tomato-salad',
        name: { mr: 'टोमॅटो सलाड', en: 'Tomato Salad' },
        price: { amount: 50 },
      },
    ],
  },
  {
    id: 'pure-veg',
    icon: 'leaf',
    title: { mr: '१००% प्युअर व्हेज', en: '100% Pure Veg' },
    items: [
      {
        id: 'pure-veg-bhendi-masala',
        name: { mr: 'भेंडी मसाला', en: 'Bhendi Masala' },
        price: { amount: 130 },
      },
      {
        id: 'pure-veg-bhendi-fry',
        name: { mr: 'भेंडी फ्राय', en: 'Bhendi Fry' },
        price: { amount: 140 },
      },
      {
        id: 'pure-veg-lasun-methi',
        name: { mr: 'लसूण मेथी', en: 'Lasun Methi' },
        price: { amount: 150 },
      },
      {
        id: 'pure-veg-methi-masala',
        name: { mr: 'मेथी मसाला', en: 'Methi Masala' },
        price: { amount: 140 },
      },
      {
        id: 'pure-veg-methi-matar-malai',
        name: { mr: 'मेथी मटर मलाई', en: 'Methi Matar Malai' },
        price: { amount: 200 },
        isSignature: true,
      },
      {
        id: 'pure-veg-methi-butter-malai',
        name: { mr: 'मेथी बटर मलाई', en: 'Methi Butter Malai' },
        price: { amount: 220 },
      },
      {
        id: 'pure-veg-chana-masala',
        name: { mr: 'चना मसाला', en: 'Chana Masala' },
        price: { amount: 120 },
      },
      {
        id: 'pure-veg-chana-roast',
        name: { mr: 'चना रोस्ट', en: 'Chana Roast' },
        price: { amount: 140 },
      },
      {
        id: 'pure-veg-chana-fry',
        name: { mr: 'चना फ्राय', en: 'Chana Fry' },
        price: { amount: 140 },
      },
      {
        id: 'pure-veg-baingan-masala',
        name: { mr: 'बैंगन मसाला', en: 'Baingan Masala' },
        price: { amount: 120 },
      },
      {
        id: 'pure-veg-baingan-aloo',
        name: { mr: 'बैंगन आलू', en: 'Baingan Aloo' },
        price: { amount: 140 },
      },
      {
        id: 'pure-veg-baingan-bharta',
        name: { mr: 'बैंगन भरता', en: 'Baingan Bharta' },
        price: { amount: 180 },
      },
      {
        id: 'pure-veg-green-peas-masala',
        name: { mr: 'ग्रीन पीस मसाला', en: 'Green Peas Masala' },
        price: { amount: 130 },
      },
      {
        id: 'pure-veg-mushroom-masala',
        name: { mr: 'मशरूम मसाला', en: 'Mushroom Masala' },
        price: { amount: 180 },
      },
      {
        id: 'pure-veg-soyabean-masala',
        name: { mr: 'सोयाबीन मसाला', en: 'Soyabean Masala' },
        price: { amount: 120 },
      },
      {
        id: 'pure-veg-soyabean-fry',
        name: { mr: 'सोयाबीन फ्राय', en: 'Soyabean Fry' },
        price: { amount: 140 },
      },
      {
        id: 'pure-veg-plain-palak',
        name: { mr: 'प्लेन पालक', en: 'Plain Palak' },
        price: { amount: 160 },
      },
      {
        id: 'pure-veg-lasuni-palak',
        name: { mr: 'लसुणी पालक', en: 'Lasuni Palak' },
        price: { amount: 180 },
      },
      {
        id: 'pure-veg-green-peas-palak',
        name: { mr: 'ग्रीन पीस पालक', en: 'Green Peas Palak' },
        price: { amount: 180 },
      },
    ],
  },
  {
    id: 'vegetables',
    icon: 'veg',
    title: { mr: 'व्हेजिटेबल्स', en: 'Vegetables' },
    items: [
      {
        id: 'vegetables-mix-veg',
        name: { mr: 'मिक्स व्हेज', en: 'Mix Veg' },
        price: { amount: 140 },
      },
      {
        id: 'vegetables-veg-kolhapuri',
        name: { mr: 'व्हेज कोल्हापुरी', en: 'Veg Kolhapuri' },
        price: { amount: 160 },
        isSignature: true,
      },
      {
        id: 'vegetables-veg-jwalamukhi',
        name: { mr: 'व्हेज ज्वालामुखी', en: 'Veg Jwalamukhi' },
        price: { amount: 220 },
        isSignature: true,
      },
      {
        id: 'vegetables-veg-kadai',
        name: { mr: 'व्हेज कढाई', en: 'Veg Kadai' },
        price: { amount: 180 },
      },
      {
        id: 'vegetables-veg-bhuna-masala',
        name: { mr: 'व्हेज भुना मसाला', en: 'Veg Bhuna Masala' },
        price: { amount: 210 },
      },
      {
        id: 'vegetables-veg-maratha',
        name: { mr: 'व्हेज मराठा', en: 'Veg Maratha' },
        price: { amount: 180 },
      },
      {
        id: 'vegetables-veg-keema-masala',
        name: { mr: 'व्हेज खिमा मसाला', en: 'Veg Keema Masala' },
        price: { amount: 180 },
      },
      {
        id: 'vegetables-veg-kofta',
        name: { mr: 'व्हेज कोफ्ता', en: 'Veg Kofta' },
        price: { amount: 220 },
      },
      {
        id: 'vegetables-veg-patiala',
        name: { mr: 'व्हेज पटियाला', en: 'Veg Patiala' },
        price: { amount: 240 },
      },
      {
        id: 'vegetables-veg-jaipuri',
        name: { mr: 'व्हेज जयपुरी', en: 'Veg Jaipuri' },
        price: { amount: 260 },
      },
      {
        id: 'vegetables-veg-hariyali',
        name: { mr: 'व्हेज हरियाली', en: 'Veg Hariyali' },
        price: { amount: 240 },
      },
      {
        id: 'vegetables-veg-hyderabadi',
        name: { mr: 'व्हेज हैदराबादी', en: 'Veg Hyderabadi' },
        price: { amount: 240 },
      },
      {
        id: 'vegetables-veg-kolhiwada',
        name: { mr: 'व्हेज कोल्हीवाडा', en: 'Veg Kolhiwada' },
        price: { amount: 260 },
      },
      {
        id: 'vegetables-veg-kashmiri',
        name: { mr: 'व्हेज काश्मिरी', en: 'Veg Kashmiri' },
        price: { amount: 240 },
      },
      {
        id: 'vegetables-veg-maharaja',
        name: { mr: 'व्हेज महाराजा', en: 'Veg Maharaja' },
        price: { amount: 220 },
      },
      {
        id: 'vegetables-veg-bhatinda',
        name: { mr: 'व्हेज भटिंडा', en: 'Veg Bhatinda' },
        price: { amount: 220 },
      },
      {
        id: 'vegetables-veg-garden',
        name: { mr: 'व्हेज गार्डन', en: 'Veg Garden' },
        price: { amount: 190 },
      },
      {
        id: 'vegetables-veg-madhubanwala',
        name: { mr: 'व्हेज मधुबनवाला', en: 'Veg Madhubanwala' },
        price: { amount: 220 },
      },
      {
        id: 'vegetables-veg-tufani',
        name: { mr: 'व्हेज तुफानी', en: 'Veg Tufani' },
        price: { amount: 210 },
      },
      {
        id: 'vegetables-veg-do-pyaza',
        name: { mr: 'व्हेज दो प्याजा', en: 'Veg Do Pyaza' },
        price: { amount: 180 },
      },
    ],
  },
  {
    id: 'fasting-special',
    icon: 'fasting',
    title: { mr: 'उपवास स्पेशल', en: 'Fasting Special' },
    items: [
      {
        id: 'fasting-special-sabudana-chivda',
        name: { mr: 'साबुदाणा चिवडा', en: 'Sabudana Chivda' },
        price: { amount: 70 },
        isSignature: true,
      },
      {
        id: 'fasting-special-finger-chips',
        name: { mr: 'फिंगर चिप्स', en: 'Finger Chips' },
        price: { amount: 120 },
      },
    ],
  },
  {
    id: 'cold-drinks',
    icon: 'drink',
    title: { mr: 'कोल्ड्रिंक्स', en: 'Cold Drinks' },
    items: [
      {
        id: 'cold-drinks-mineral-water',
        name: { mr: 'मिनरल वॉटर', en: 'Mineral Water' },
        price: { amount: 20 },
      },
      {
        id: 'cold-drinks-lassi',
        name: { mr: 'लस्सी', en: 'Lassi' },
        price: { amount: 30 },
      },
    ],
  },
  {
    id: 'paneer-special',
    icon: 'paneer',
    title: { mr: 'पनीर स्पेशल', en: 'Paneer Special' },
    items: [
      {
        id: 'paneer-special-paneer-masala',
        name: { mr: 'पनीर मसाला', en: 'Paneer Masala' },
        price: { amount: 170 },
      },
      {
        id: 'paneer-special-paneer-special',
        name: { mr: 'पनीर स्पेशल', en: 'Paneer Special' },
        price: { amount: 180 },
      },
      {
        id: 'paneer-special-paneer-butter-masala',
        name: { mr: 'पनीर बटर मसाला', en: 'Paneer Butter Masala' },
        price: { amount: 210 },
        isSignature: true,
      },
      {
        id: 'paneer-special-paneer-tikka-masala',
        name: { mr: 'पनीर टिक्का मसाला', en: 'Paneer Tikka Masala' },
        price: { amount: 220 },
        isSignature: true,
      },
      {
        id: 'paneer-special-paneer-bhuna-masala',
        name: { mr: 'पनीर भुना मसाला', en: 'Paneer Bhuna Masala' },
        price: { amount: 240 },
      },
      {
        id: 'paneer-special-paneer-bhurji',
        name: { mr: 'पनीर भुर्जी', en: 'Paneer Bhurji' },
        price: { amount: 240 },
      },
      {
        id: 'paneer-special-paneer-patiala',
        name: { mr: 'पनीर पटियाला', en: 'Paneer Patiala' },
        price: { amount: 260 },
      },
      {
        id: 'paneer-special-paneer-pasanda',
        name: { mr: 'पनीर पसंदा', en: 'Paneer Pasanda' },
        price: { amount: 280 },
      },
      {
        id: 'paneer-special-paneer-chatpata',
        name: { mr: 'पनीर चटपटा', en: 'Paneer Chatpata' },
        price: { amount: 200 },
      },
      {
        id: 'paneer-special-paneer-kashmiri',
        name: { mr: 'पनीर काश्मिरी', en: 'Paneer Kashmiri' },
        price: { amount: 260 },
      },
      {
        id: 'paneer-special-paneer-maharaja',
        name: { mr: 'पनीर महाराजा', en: 'Paneer Maharaja' },
        price: { amount: 280 },
      },
      {
        id: 'paneer-special-paneer-jaipuri',
        name: { mr: 'पनीर जयपुरी', en: 'Paneer Jaipuri' },
        price: { amount: 280 },
      },
      {
        id: 'paneer-special-paneer-hyderabadi',
        name: { mr: 'पनीर हैदराबादी', en: 'Paneer Hyderabadi' },
        price: { amount: 260 },
      },
      {
        id: 'paneer-special-paneer-jwalamukhi',
        name: { mr: 'पनीर ज्वालामुखी', en: 'Paneer Jwalamukhi' },
        price: { amount: 280 },
      },
      {
        id: 'paneer-special-paneer-matar-masala',
        name: { mr: 'पनीर मटर मसाला', en: 'Paneer Matar Masala' },
        price: { amount: 180 },
      },
      {
        id: 'paneer-special-paneer-kheema-masala',
        name: { mr: 'पनीर खिमा मसाला', en: 'Paneer Kheema Masala' },
        price: { amount: 200 },
      },
      {
        id: 'paneer-special-paneer-hariyali',
        name: { mr: 'पनीर हरियाली', en: 'Paneer Hariyali' },
        price: { amount: 220 },
      },
      {
        id: 'paneer-special-paneer-jungli',
        name: { mr: 'पनीर जंगली', en: 'Paneer Jungli' },
        price: { amount: 200 },
      },
      {
        id: 'paneer-special-paneer-tufani',
        name: { mr: 'पनीर तुफानी', en: 'Paneer Tufani' },
        price: { amount: 220 },
      },
      {
        id: 'paneer-special-paneer-kadai',
        name: { mr: 'पनीर कढाई', en: 'Paneer Kadai' },
        price: { amount: 180 },
      },
      {
        id: 'paneer-special-paneer-palak',
        name: { mr: 'पनीर पालक', en: 'Paneer Palak' },
        price: { amount: 190 },
      },
      {
        id: 'paneer-special-paneer-kaju-masala',
        name: { mr: 'पनीर काजू मसाला', en: 'Paneer Kaju Masala' },
        price: { amount: 210 },
      },
      {
        id: 'paneer-special-paneer-do-pyaza',
        name: { mr: 'पनीर दो प्याजा', en: 'Paneer Do Pyaza' },
        price: { amount: 160 },
      },
      {
        id: 'paneer-special-paneer-angara',
        name: { mr: 'पनीर अंगारा', en: 'Paneer Angara' },
        price: { amount: 280 },
      },
      {
        id: 'paneer-special-shahi-paneer',
        name: { mr: 'शाही पनीर', en: 'Shahi Paneer' },
        price: { amount: 220 },
      },
      {
        id: 'paneer-special-paneer-dilkhush',
        name: { mr: 'पनीर दिलखुश', en: 'Paneer Dilkhush' },
        price: { amount: 220 },
      },
      {
        id: 'paneer-special-paneer-jaljala',
        name: { mr: 'पनीर जलजला', en: 'Paneer Jaljala' },
        price: { amount: 220 },
      },
      {
        id: 'paneer-special-paneer-garden',
        name: { mr: 'पनीर गार्डन', en: 'Paneer Garden' },
        price: { amount: 280 },
      },
      {
        id: 'paneer-special-paneer-rangila',
        name: { mr: 'पनीर रंगीला', en: 'Paneer Rangila' },
        price: { amount: 240 },
      },
      {
        id: 'paneer-special-paneer-lajawab',
        name: { mr: 'पनीर लाजवाब', en: 'Paneer Lajawab' },
        price: { amount: 240 },
      },
      {
        id: 'paneer-special-paneer-bhurji-masala',
        name: { mr: 'पनीर भुर्जी मसाला', en: 'Paneer Bhurji Masala' },
        price: { amount: 220 },
      },
      {
        id: 'paneer-special-paneer-makkhanwala',
        name: { mr: 'पनीर मक्खनवाला', en: 'Paneer Makkhanwala' },
        price: { amount: 280 },
      },
      {
        id: 'paneer-special-paneer-kolhapuri',
        name: { mr: 'पनीर कोल्हापुरी', en: 'Paneer Kolhapuri' },
        price: { amount: 200 },
      },
      {
        id: 'paneer-special-paneer-kofta',
        name: { mr: 'पनीर कोफ्ता', en: 'Paneer Kofta' },
        price: { amount: 260 },
      },
      {
        id: 'paneer-special-malai-kofta',
        name: { mr: 'मलाई कोफ्ता', en: 'Malai Kofta' },
        price: { amount: 280 },
        isSignature: true,
      },
    ],
  },
  {
    id: 'special-handi',
    icon: 'handi',
    title: { mr: 'स्पेशल हंडी', en: 'Special Handi' },
    items: [
      {
        id: 'special-handi-mix-veg-handi',
        name: { mr: 'मिक्स व्हेज हंडी', en: 'Mix Veg Handi' },
        price: { amount: 600 },
      },
      {
        id: 'special-handi-veg-kolhapuri-handi',
        name: { mr: 'व्हेज कोल्हापुरी हंडी', en: 'Veg Kolhapuri Handi' },
        price: { amount: 700 },
      },
      {
        id: 'special-handi-paneer-handi',
        name: { mr: 'पनीर हंडी', en: 'Paneer Handi' },
        price: { amount: 700 },
      },
      {
        id: 'special-handi-kaju-paneer-handi',
        name: { mr: 'काजू पनीर हंडी', en: 'Kaju Paneer Handi' },
        price: { amount: 800 },
        isSignature: true,
      },
      {
        id: 'special-handi-shev-bhaji-handi',
        name: { mr: 'शेव भाजी हंडी', en: 'Shev Bhaji Handi' },
        price: { amount: 500 },
      },
      {
        id: 'special-handi-shev-bhaji-handi-milk',
        name: { mr: 'शेव भाजी हंडी (दूध)', en: 'Shev Bhaji Handi (Milk)' },
        price: { amount: 600 },
      },
      {
        id: 'special-handi-veg-maratha-handi',
        name: { mr: 'व्हेज मराठा हंडी', en: 'Veg Maratha Handi' },
        price: { amount: 700 },
        isSignature: true,
      },
      {
        id: 'special-handi-dal-tadka-handi',
        name: { mr: 'दाल तडका हंडी', en: 'Dal Tadka Handi' },
        price: { amount: 600 },
      },
      {
        id: 'special-handi-dal-fry-handi',
        name: { mr: 'दाल फ्राय हंडी', en: 'Dal Fry Handi' },
        price: { amount: 550 },
      },
      {
        id: 'special-handi-aloo-matar-handi',
        name: { mr: 'आलू मटर हंडी', en: 'Aloo Matar Handi' },
        price: { amount: 600 },
      },
      {
        id: 'special-handi-shevga-handi',
        name: { mr: 'शेवगा हंडी', en: 'Shevga Handi' },
        price: { amount: 600 },
      },
    ],
  },
  {
    id: 'chef-specials',
    icon: 'star',
    title: { mr: 'स्पेशल डिशेस', en: 'Chef\'s Specials' },
    items: [
      {
        id: 'chef-specials-sarvottam-special',
        name: { mr: 'सर्वोत्तम स्पेशल', en: 'Sarvottam Special' },
        price: { amount: 320 },
        isSignature: true,
      },
      {
        id: 'chef-specials-veg-tiranga',
        name: { mr: 'व्हेज तिरंगा', en: 'Veg Tiranga' },
        price: { amount: 350 },
        isSignature: true,
      },
      {
        id: 'chef-specials-kaju-paneer-masala',
        name: { mr: 'काजू पनीर मसाला', en: 'Kaju Paneer Masala' },
        price: { amount: 210 },
      },
      {
        id: 'chef-specials-kaju-masala',
        name: { mr: 'काजू मसाला', en: 'Kaju Masala' },
        price: { amount: 200 },
      },
      {
        id: 'chef-specials-kaju-curry-sweet',
        name: { mr: 'काजू करी (स्वीट)', en: 'Kaju Curry (Sweet)' },
        price: { amount: 220 },
        isSignature: true,
      },
      {
        id: 'chef-specials-kaju-kashmiri',
        name: { mr: 'काजू काश्मिरी', en: 'Kaju Kashmiri' },
        price: { amount: 240 },
      },
      {
        id: 'chef-specials-kashmiri-kofta',
        name: { mr: 'काश्मिरी कोफ्ता', en: 'Kashmiri Kofta' },
        price: { amount: 260 },
      },
    ],
  },
  {
    id: 'tandoor',
    icon: 'tandoor',
    title: { mr: 'तंदूर', en: 'Tandoor' },
    items: [
      {
        id: 'tandoor-tandoori-roti',
        name: { mr: 'तंदूर रोटी', en: 'Tandoori Roti' },
        price: { amount: 15 },
      },
      {
        id: 'tandoor-butter-roti',
        name: { mr: 'बटर रोटी', en: 'Butter Roti' },
        price: { amount: 20 },
      },
      {
        id: 'tandoor-butter-naan',
        name: { mr: 'बटर नान', en: 'Butter Naan' },
        price: { amount: 45 },
        isSignature: true,
      },
      {
        id: 'tandoor-plain-naan',
        name: { mr: 'प्लेन नान', en: 'Plain Naan' },
        price: { amount: 40 },
      },
      {
        id: 'tandoor-garlic-naan',
        name: { mr: 'गार्लिक नान', en: 'Garlic Naan' },
        price: { amount: 50 },
      },
      {
        id: 'tandoor-lachha-paratha',
        name: { mr: 'लच्छा पराठा', en: 'Lachha Paratha' },
        price: { amount: 45 },
      },
      {
        id: 'tandoor-masala-roti',
        name: { mr: 'मसाला रोटी', en: 'Masala Roti' },
        price: { amount: 30 },
      },
      {
        id: 'tandoor-plain-kulcha',
        name: { mr: 'प्लेन कुलचा', en: 'Plain Kulcha' },
        price: { amount: 35 },
      },
      {
        id: 'tandoor-butter-kulcha',
        name: { mr: 'बटर कुलचा', en: 'Butter Kulcha' },
        price: { amount: 40 },
      },
      {
        id: 'tandoor-butter-paratha',
        name: { mr: 'बटर पराठा', en: 'Butter Paratha' },
        price: { amount: 45 },
      },
      {
        id: 'tandoor-paneer-kulcha',
        name: { mr: 'पनीर कुलचा', en: 'Paneer Kulcha' },
        price: { amount: 45 },
      },
      {
        id: 'tandoor-onion-kulcha',
        name: { mr: 'ऑनियन कुलचा', en: 'Onion Kulcha' },
        price: { amount: 60 },
      },
    ],
  },
  {
    id: 'special-rice',
    icon: 'rice',
    title: { mr: 'सर्वोत्तम स्पेशल राईस', en: 'Sarvottam Special Rice' },
    items: [
      {
        id: 'special-rice-plain-rice',
        name: { mr: 'प्लेन राईस', en: 'Plain Rice' },
        price: { amount: 70, fullAmount: 100 },
      },
      {
        id: 'special-rice-jeera-rice',
        name: { mr: 'जीरा राईस', en: 'Jeera Rice' },
        price: { amount: 70, fullAmount: 100 },
      },
      {
        id: 'special-rice-masala-rice',
        name: { mr: 'मसाला राईस', en: 'Masala Rice' },
        price: { amount: 100, fullAmount: 140 },
      },
      {
        id: 'special-rice-veg-pulao',
        name: { mr: 'व्हेज पुलाव', en: 'Veg Pulao' },
        price: { amount: 120, fullAmount: 160 },
      },
      {
        id: 'special-rice-veg-biryani',
        name: { mr: 'व्हेज बिर्याणी', en: 'Veg Biryani' },
        price: { amount: 180 },
      },
      {
        id: 'special-rice-veg-hyderabadi-biryani',
        name: { mr: 'व्हेज हैदराबादी बिर्याणी', en: 'Veg Hyderabadi Biryani' },
        price: { amount: 210 },
      },
      {
        id: 'special-rice-kaju-pulao',
        name: { mr: 'काजू पुलाव', en: 'Kaju Pulao' },
        price: { amount: 210 },
      },
      {
        id: 'special-rice-kashmiri-pulao',
        name: { mr: 'काश्मिरी पुलाव', en: 'Kashmiri Pulao' },
        price: { amount: 220 },
      },
      {
        id: 'special-rice-dal-khichadi',
        name: { mr: 'दाल खिचडी', en: 'Dal Khichadi' },
        price: { amount: 150 },
      },
      {
        id: 'special-rice-butter-dal-khichadi',
        name: { mr: 'बटर दाल खिचडी', en: 'Butter Dal Khichadi' },
        price: { amount: 160 },
      },
      {
        id: 'special-rice-jeera-rice-handi',
        name: { mr: 'जीरा राईस हंडी', en: 'Jeera Rice Handi' },
        price: { amount: 400 },
      },
    ],
  },
  {
    id: 'chinese',
    icon: 'wok',
    title: { mr: 'चायनीज डिश', en: 'Chinese' },
    items: [
      {
        id: 'chinese-veg-hakka-noodles',
        name: { mr: 'व्हेज हक्का नूडल्स', en: 'Veg Hakka Noodles' },
        price: { amount: 130 },
      },
      {
        id: 'chinese-green-chilli-noodles',
        name: { mr: 'ग्रीन चिल्ली नूडल्स', en: 'Green Chilli Noodles' },
        price: { amount: 140 },
      },
      {
        id: 'chinese-red-chilli-noodles',
        name: { mr: 'रेड चिल्ली नूडल्स', en: 'Red Chilli Noodles' },
        price: { amount: 140 },
      },
      {
        id: 'chinese-soyabean-chilli',
        name: { mr: 'सोयाबीन चिल्ली', en: 'Soyabean Chilli' },
        price: { amount: 130 },
      },
      {
        id: 'chinese-paneer-65',
        name: { mr: 'पनीर 65', en: 'Paneer 65' },
        price: { amount: 180 },
      },
      {
        id: 'chinese-paneer-crispy',
        name: { mr: 'पनीर क्रिस्पी', en: 'Paneer Crispy' },
        price: { amount: 240 },
      },
      {
        id: 'chinese-paneer-chilli',
        name: { mr: 'पनीर चिल्ली', en: 'Paneer Chilli' },
        price: { amount: 240 },
        isSignature: true,
      },
      {
        id: 'chinese-finger-chilli',
        name: { mr: 'फिंगर चिल्ली', en: 'Finger Chilli' },
        price: { amount: 200 },
      },
    ],
  },
  {
    id: 'chinese-rice',
    icon: 'rice',
    title: { mr: 'चायनीज राईस', en: 'Chinese Rice' },
    items: [
      {
        id: 'chinese-rice-veg-fried-rice',
        name: { mr: 'व्हेज फ्राईड राईस', en: 'Veg Fried Rice' },
        price: { amount: 140 },
      },
      {
        id: 'chinese-rice-veg-schezwan-rice',
        name: { mr: 'व्हेज शेजवान राईस', en: 'Veg Schezwan Rice' },
        price: { amount: 150 },
      },
      {
        id: 'chinese-rice-veg-triple-rice',
        name: { mr: 'व्हेज ट्रिपल राईस', en: 'Veg Triple Rice' },
        price: { amount: 160 },
      },
      {
        id: 'chinese-rice-manchurian-fried-rice',
        name: { mr: 'मंच्युरियन फ्राईड राईस', en: 'Manchurian Fried Rice' },
        price: { amount: 170 },
      },
    ],
  },
] as const satisfies readonly MenuSection[];

/** Every section id in the menu, derived from the data itself. */
export type SectionId = (typeof MENU_SECTIONS)[number]['id'];
