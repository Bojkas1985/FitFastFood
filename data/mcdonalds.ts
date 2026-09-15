import { FoodItem } from '../types/food';

export const mcdonaldsData: FoodItem[] = [
  // --- Hovězí burgery ---
  { id: 'mc-mcroyal-double', chain: 'mcdonalds', name: 'McRoyal Double', calories: 798, protein: 54, carbs: 38, fat: 47, tip: 'Absolutní král bílkovin (54g) s top poměrem', isVegetarian: false },
  { id: 'mc-triple-cheeseburger', chain: 'mcdonalds', name: 'Triple Cheeseburger', calories: 566, protein: 35, carbs: 31, fat: 33, tip: 'Skvělá porce proteinu na jeden burger', isVegetarian: false },
  { id: 'mc-double-cheeseburger', chain: 'mcdonalds', name: 'Double Cheeseburger', calories: 457, protein: 27, carbs: 31, fat: 24, tip: 'Ověřená klasika s výborným poměrem', isVegetarian: false },
  { id: 'mc-mcroyal', chain: 'mcdonalds', name: 'McRoyal', calories: 501, protein: 29, carbs: 35, fat: 27, isVegetarian: false },
  { id: 'mc-cheeseburger', chain: 'mcdonalds', name: 'Cheeseburger', calories: 306, protein: 16, carbs: 30, fat: 13, isVegetarian: false },
  { id: 'mc-hamburger', chain: 'mcdonalds', name: 'Hamburger', calories: 254, protein: 13, carbs: 30, fat: 8.8, tip: 'Lehký základ s nízkým tukem', isVegetarian: false },
  { id: 'mc-big-mac', chain: 'mcdonalds', name: 'Big Mac', calories: 509, protein: 26, carbs: 42, fat: 26, isVegetarian: false },
  { id: 'mc-big-tasty-bacon', chain: 'mcdonalds', name: 'Big Tasty Bacon', calories: 850, protein: 38, carbs: 50, fat: 55, tip: 'Hodně bílkovin, ale masivní nálož tuků', isVegetarian: false },

  // --- Kuřecí, Ryby & Snacky ---
  { id: 'mc-nuggets-6', chain: 'mcdonalds', name: 'Chicken McNuggets (6 ks)', calories: 262, protein: 13, carbs: 21, fat: 13, isVegetarian: false },
  { id: 'mc-mcchicken', chain: 'mcdonalds', name: 'McChicken', calories: 434, protein: 21, carbs: 42, fat: 19, isVegetarian: false },
  { id: 'mc-filet-o-fish', chain: 'mcdonalds', name: 'Filet-O-Fish', calories: 333, protein: 15, carbs: 37, fat: 13, isVegetarian: false },
  { id: 'mc-mcwrap-grilled', chain: 'mcdonalds', name: 'McWrap s grilovaným kuřetem', calories: 424, protein: 18, carbs: 44, fat: 18, tip: 'Méně tuků než smažená verze', isVegetarian: false },
  { id: 'mc-snack-wrap', chain: 'mcdonalds', name: 'Snack Wrap', calories: 279, protein: 10, carbs: 31, fat: 12, isVegetarian: false },
  { id: 'mc-chickenburger', chain: 'mcdonalds', name: 'Chickenburger', calories: 313, protein: 11, carbs: 44, fat: 9.8, isVegetarian: false },
  { id: 'mc-mcwrap-crispy', chain: 'mcdonalds', name: 'McWrap se smaženým kuřetem', calories: 536, protein: 18, carbs: 57, fat: 26, isVegetarian: false },

  // --- Snídaně ---
  { id: 'mc-mcmuffin-bacon', chain: 'mcdonalds', name: 'McMuffin s vajíčkem a slaninou', calories: 301, protein: 17, carbs: 27, fat: 13, tip: 'Top snídaňový poměr makrovýživ', isVegetarian: false },
  { id: 'mc-mcmuffin-sausage', chain: 'mcdonalds', name: 'McMuffin Single Sausage', calories: 385, protein: 18, carbs: 27, fat: 23, isVegetarian: false },

  // --- Přílohy & Vegetariánské ---
  { id: 'mc-smazeny-syr', chain: 'mcdonalds', name: 'Smažený sýr v housce', calories: 511, protein: 16, carbs: 52, fat: 26, isVegetarian: true },
  { id: 'mc-hash-brown', chain: 'mcdonalds', name: 'Hash brown (bramborová placka)', calories: 144, protein: 1.2, carbs: 16, fat: 8.2, isVegetarian: true },
  { id: 'mc-hranolky-stredni', chain: 'mcdonalds', name: 'Hranolky (Střední)', calories: 327, protein: 4.3, carbs: 41, fat: 15, isVegetarian: true },
];
