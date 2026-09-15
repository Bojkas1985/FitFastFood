import { FoodItem } from '../types/food';

export const popeyesData: FoodItem[] = [
  // --- Chicken Sandwiches & Wrapy ---
  { id: 'pop-sw-classic', chain: 'popeyes', name: 'Chicken Sandwich Classic', calories: 753, protein: 41, carbs: 44, fat: 47, tip: 'Vydatná porce s 41g proteinu', isVegetarian: false },
  { id: 'pop-sw-spicy', chain: 'popeyes', name: 'Chicken Sandwich Spicy', calories: 782, protein: 41, carbs: 44, fat: 50, isVegetarian: false },
  { id: 'pop-sw-deluxe-classic', chain: 'popeyes', name: 'Chicken Sandwich Deluxe Classic', calories: 826, protein: 45, carbs: 45, fat: 53, isVegetarian: false },
  { id: 'pop-sw-deluxe-spicy', chain: 'popeyes', name: 'Chicken Sandwich Deluxe Spicy', calories: 855, protein: 45, carbs: 45, fat: 56, isVegetarian: false },
  { id: 'pop-sw-coleslaw-classic', chain: 'popeyes', name: 'Chicken Sandwich Coleslaw Classic', calories: 834, protein: 41.8, carbs: 47.7, fat: 54.2, isVegetarian: false },
  { id: 'pop-sw-coleslaw-spicy', chain: 'popeyes', name: 'Chicken Sandwich Coleslaw Spicy', calories: 864, protein: 42.7, carbs: 48.6, fat: 57.2, isVegetarian: false },
  { id: 'pop-wrap-classic', chain: 'popeyes', name: 'Wrap Classic', calories: 576, protein: 23, carbs: 39, fat: 46, isVegetarian: false },
  { id: 'pop-wrap-spicy', chain: 'popeyes', name: 'Wrap Spicy', calories: 553, protein: 23, carbs: 39, fat: 34, isVegetarian: false },

  // --- Kuřecí kousky Classic (Pieces) ---
  { id: 'pop-piece-classic-1', chain: 'popeyes', name: 'Kuřecí kousek Classic (1ks)', calories: 318, protein: 24, carbs: 13, fat: 19, isVegetarian: false },
  { id: 'pop-piece-classic-2', chain: 'popeyes', name: 'Kuřecí kousky Classic (2ks)', calories: 635, protein: 48, carbs: 25, fat: 38, isVegetarian: false },
  { id: 'pop-piece-classic-3', chain: 'popeyes', name: 'Kuřecí kousky Classic (3ks)', calories: 952, protein: 72, carbs: 38, fat: 56, tip: 'Masivní nálož 72g bílkovin', isVegetarian: false },
  { id: 'pop-piece-classic-5', chain: 'popeyes', name: 'Kuřecí kousky Classic (5ks)', calories: 1587, protein: 120, carbs: 63, fat: 94, isVegetarian: false },
  { id: 'pop-piece-classic-7', chain: 'popeyes', name: 'Kuřecí kousky Classic (7ks)', calories: 2220, protein: 169, carbs: 89, fat: 132, isVegetarian: false },

  // --- Kuřecí kousky Spicy (Pieces) ---
  { id: 'pop-piece-spicy-1', chain: 'popeyes', name: 'Kuřecí kousek Spicy (1ks)', calories: 337, protein: 26, carbs: 13, fat: 21, isVegetarian: false },
  { id: 'pop-piece-spicy-2', chain: 'popeyes', name: 'Kuřecí kousky Spicy (2ks)', calories: 673, protein: 51, carbs: 26, fat: 41, isVegetarian: false },
  { id: 'pop-piece-spicy-3', chain: 'popeyes', name: 'Kuřecí kousky Spicy (3ks)', calories: 1010, protein: 76, carbs: 40, fat: 61, isVegetarian: false },
  { id: 'pop-piece-spicy-5', chain: 'popeyes', name: 'Kuřecí kousky Spicy (5ks)', calories: 1685, protein: 127, carbs: 66, fat: 102, isVegetarian: false },
  { id: 'pop-piece-spicy-7', chain: 'popeyes', name: 'Kuřecí kousky Spicy (7ks)', calories: 2356, protein: 177, carbs: 92, fat: 142, isVegetarian: false },

  // --- Kuřecí křídla (Wings) ---
  { id: 'pop-wings-classic-2', chain: 'popeyes', name: 'Kuřecí křídla Classic (2ks)', calories: 296, protein: 18.7, carbs: 12.7, fat: 18.7, isVegetarian: false },
  { id: 'pop-wings-classic-3', chain: 'popeyes', name: 'Kuřecí křídla Classic (3ks)', calories: 444, protein: 28, carbs: 19, fat: 28, isVegetarian: false },
  { id: 'pop-wings-classic-5', chain: 'popeyes', name: 'Kuřecí křídla Classic (5ks)', calories: 738, protein: 47, carbs: 32, fat: 48, isVegetarian: false },
  { id: 'pop-wings-classic-8', chain: 'popeyes', name: 'Kuřecí křídla Classic (8ks)', calories: 1180, protein: 75, carbs: 57, fat: 76, isVegetarian: false },
  { id: 'pop-wings-classic-15', chain: 'popeyes', name: 'Kuřecí křídla Classic (15ks)', calories: 2220, protein: 140, carbs: 96, fat: 140, isVegetarian: false },
  { id: 'pop-wings-voodoo-3', chain: 'popeyes', name: 'Kuřecí křídla Voodoo (3ks)', calories: 540, protein: 29, carbs: 42, fat: 39.7, isVegetarian: false },
  { id: 'pop-wings-voodoo-5', chain: 'popeyes', name: 'Kuřecí křídla Voodoo (5ks)', calories: 900, protein: 48.5, carbs: 70.7, fat: 66.1, isVegetarian: false },

  // --- Polędwiczki (Tenders) ---
  { id: 'pop-tenders-classic-2', chain: 'popeyes', name: 'Kuřecí Tenders Classic (2ks)', calories: 286, protein: 22, carbs: 11.3, fat: 16.7, isVegetarian: false },
  { id: 'pop-tenders-classic-3', chain: 'popeyes', name: 'Kuřecí Tenders Classic (3ks)', calories: 429, protein: 33, carbs: 17, fat: 25, tip: 'Skvělý poměr bílkovin', isVegetarian: false },
  { id: 'pop-tenders-classic-5', chain: 'popeyes', name: 'Kuřecí Tenders Classic (5ks)', calories: 715, protein: 54, carbs: 29, fat: 42, isVegetarian: false },
  { id: 'pop-tenders-spicy-2', chain: 'popeyes', name: 'Kuřecí Tenders Spicy (2ks)', calories: 277, protein: 23, carbs: 10, fat: 16, isVegetarian: false },
  { id: 'pop-tenders-spicy-3', chain: 'popeyes', name: 'Kuřecí Tenders Spicy (3ks)', calories: 416, protein: 35, carbs: 15, fat: 24, tip: '35g proteinu na porci', isVegetarian: false },
  { id: 'pop-tenders-spicy-5', chain: 'popeyes', name: 'Kuřecí Tenders Spicy (5ks)', calories: 693, protein: 58, carbs: 25, fat: 40, isVegetarian: false },

  // --- Nugetky (Nuggets) ---
  { id: 'pop-nuggets-classic-2', chain: 'popeyes', name: 'Kuřecí nugetky Classic (2ks)', calories: 155, protein: 8.4, carbs: 4.3, fat: 6.4, isVegetarian: false },
  { id: 'pop-nuggets-classic-3', chain: 'popeyes', name: 'Kuřecí nugetky Classic (3ks)', calories: 232, protein: 12.6, carbs: 6.5, fat: 9.5, isVegetarian: false },
  { id: 'pop-nuggets-classic-5', chain: 'popeyes', name: 'Kuřecí nugetky Classic (5ks)', calories: 387, protein: 21, carbs: 10.8, fat: 15.9, isVegetarian: false },
  { id: 'pop-nuggets-classic-8', chain: 'popeyes', name: 'Kuřecí nugetky Classic (8ks)', calories: 620, protein: 33.6, carbs: 17.3, fat: 25.4, isVegetarian: false },

  // --- Přílohy & Vegetariánské ---
  { id: 'pop-fries-classic-sml', chain: 'popeyes', name: 'Hranolky Classic (malé)', calories: 226, protein: 3.2, carbs: 31, fat: 10.4, isVegetarian: true },
  { id: 'pop-fries-classic-med', chain: 'popeyes', name: 'Hranolky Classic (střední)', calories: 283, protein: 4, carbs: 40, fat: 13, isVegetarian: true },
  { id: 'pop-fries-classic-lrg', chain: 'popeyes', name: 'Hranolky Classic (velké)', calories: 396, protein: 5.6, carbs: 50, fat: 21, isVegetarian: true },
  { id: 'pop-fries-cajun-sml', chain: 'popeyes', name: 'Cajun hranolky (malé)', calories: 233, protein: 4, carbs: 32, fat: 10.4, isVegetarian: true },
  { id: 'pop-fries-cajun-med', chain: 'popeyes', name: 'Cajun hranolky (střední)', calories: 291, protein: 5, carbs: 41, fat: 13, isVegetarian: true },
  { id: 'pop-fries-cajun-lrg', chain: 'popeyes', name: 'Cajun hranolky (velké)', calories: 369, protein: 7, carbs: 52, fat: 21, isVegetarian: true },
  { id: 'pop-fries-supreme', chain: 'popeyes', name: 'Supreme hranolky', calories: 519, protein: 11, carbs: 54, fat: 30, isVegetarian: true },
  { id: 'pop-onion-rings-5', chain: 'popeyes', name: 'Cibulové kroužky (5ks)', calories: 205, protein: 2, carbs: 16.2, fat: 11.45, isVegetarian: true },
  { id: 'pop-onion-rings-10', chain: 'popeyes', name: 'Cibulové kroužky (10ks)', calories: 410, protein: 4, carbs: 32.2, fat: 23, isVegetarian: true },
  { id: 'pop-coleslaw', chain: 'popeyes', name: 'Salát Coleslaw', calories: 178, protein: 1.9, carbs: 8.5, fat: 14.5, isVegetarian: true },
  { id: 'pop-biscuit-honey', chain: 'popeyes', name: 'Biscuit s medem', calories: 272, protein: 6.7, carbs: 38, fat: 11, isVegetarian: true },
];
