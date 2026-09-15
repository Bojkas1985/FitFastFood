import { FoodItem } from '../types/food';

export const kfcData: FoodItem[] = [
  // --- Kuřecí kousky Kentucky ---
  { id: 'kfc-drumstick', chain: 'kfc', name: 'Kentucky Nožička (1ks)', calories: 170, protein: 16, carbs: 5, fat: 9.6, isVegetarian: false },
  { id: 'kfc-breast', chain: 'kfc', name: 'Kentucky Prsa (1ks)', calories: 236, protein: 25, carbs: 7.8, fat: 12, tip: 'Čistý protein s minimem sacharidů', isVegetarian: false },
  { id: 'kfc-rib', chain: 'kfc', name: 'Kentucky Žebra (1ks)', calories: 326, protein: 36, carbs: 10.9, fat: 15, isVegetarian: false },
  { id: 'kfc-thigh', chain: 'kfc', name: 'Kentucky Stehno (1ks)', calories: 301, protein: 22, carbs: 9.3, fat: 20, isVegetarian: false },
  { id: 'kfc-wing', chain: 'kfc', name: 'Kentucky Křídlo (1ks)', calories: 185, protein: 15, carbs: 6.5, fat: 11.1, isVegetarian: false },

  // --- Strips, Wings & Bites ---
  { id: 'kfc-strip', chain: 'kfc', name: 'Hot & Spicy Strip (1ks)', calories: 92, protein: 7, carbs: 3.2, fat: 5.9, tip: 'Poskládej si např. 4ks pro 28g bílkovin', isVegetarian: false },
  { id: 'kfc-hotwing', chain: 'kfc', name: 'Hot Wing (1ks)', calories: 114, protein: 7, carbs: 5, fat: 7.4, isVegetarian: false },
  { id: 'kfc-bites', chain: 'kfc', name: 'Hot & Spicy Bites (90g)', calories: 291, protein: 17, carbs: 14.2, fat: 18.9, isVegetarian: false },

  // --- Sendviče & Tortilly ---
  { id: 'kfc-zinger', chain: 'kfc', name: 'Zinger', calories: 445, protein: 25, carbs: 36.2, fat: 22.1, isVegetarian: false },
  { id: 'kfc-double-zinger', chain: 'kfc', name: 'Double Zinger', calories: 590, protein: 41, carbs: 40.8, fat: 28.8, tip: 'Skvělých 41g bílkovin', isVegetarian: false },
  { id: 'kfc-zinger-grill', chain: 'kfc', name: 'Zinger Grill', calories: 344, protein: 35, carbs: 20.8, fat: 12.8, tip: 'Grilované maso = méně tuků i kalorií', isVegetarian: false },
  { id: 'kfc-grander-texas', chain: 'kfc', name: 'Grander Texas', calories: 807, protein: 33, carbs: 63.9, fat: 45, isVegetarian: false },
  { id: 'kfc-grander-cheeser', chain: 'kfc', name: 'Grander Cheeser', calories: 740, protein: 32, carbs: 72, fat: 37, isVegetarian: false },
  { id: 'kfc-double-grander-cheeser', chain: 'kfc', name: 'Double Grander Cheeser', calories: 1132, protein: 54, carbs: 92, fat: 62, isVegetarian: false },
  { id: 'kfc-gold-grander', chain: 'kfc', name: 'Kentucky Gold Grander', calories: 763, protein: 32, carbs: 71, fat: 41, isVegetarian: false },
  { id: 'kfc-longer', chain: 'kfc', name: 'Longer', calories: 309, protein: 15, carbs: 43, fat: 8.1, tip: 'Lehká svačina do 310 kcal', isVegetarian: false },
  { id: 'kfc-cheeseburger', chain: 'kfc', name: 'Cheeseburger', calories: 326, protein: 16, carbs: 32.5, fat: 15, isVegetarian: false },
  { id: 'kfc-itwist-classic', chain: 'kfc', name: 'iTwist Classic', calories: 350, protein: 11, carbs: 38.3, fat: 18.5, isVegetarian: false },
  { id: 'kfc-itwist-grill', chain: 'kfc', name: 'iTwist Grill', calories: 241, protein: 13, carbs: 26.8, fat: 9, isVegetarian: false },
  { id: 'kfc-twister-classic', chain: 'kfc', name: 'Twister Classic', calories: 565, protein: 25, carbs: 51.5, fat: 27.1, isVegetarian: false },
  { id: 'kfc-twister-grill', chain: 'kfc', name: 'Twister Grill', calories: 409, protein: 28, carbs: 40.5, fat: 14.1, tip: 'Super poměr s grilovaným masem', isVegetarian: false },
  { id: 'kfc-qurrito', chain: 'kfc', name: 'Qurrito', calories: 564, protein: 29, carbs: 52.7, fat: 26, isVegetarian: false },
  { id: 'kfc-qurrito-grill', chain: 'kfc', name: 'Qurrito Grill', calories: 515, protein: 27, carbs: 48.3, fat: 23.1, isVegetarian: false },
  { id: 'kfc-qurrito-cheeser', chain: 'kfc', name: 'Qurrito Cheeser', calories: 792, protein: 32, carbs: 67, fat: 45, isVegetarian: false },
  { id: 'kfc-qurrito-grande-cheeser', chain: 'kfc', name: 'Qurrito Grande Cheeser', calories: 1103, protein: 45, carbs: 95, fat: 61, isVegetarian: false },
  { id: 'kfc-megapocket', chain: 'kfc', name: 'Megapocket', calories: 715, protein: 29, carbs: 63.1, fat: 37.3, isVegetarian: false },
  { id: 'kfc-megapocket-grill', chain: 'kfc', name: 'Mega Pocket Grill', calories: 569, protein: 29, carbs: 56.1, fat: 24.3, isVegetarian: false },
  { id: 'kfc-gold-wrapper', chain: 'kfc', name: 'Kentucky Gold Wrapper', calories: 1197, protein: 42, carbs: 91, fat: 77, isVegetarian: false },
  { id: 'kfc-wrapper-nachos', chain: 'kfc', name: 'Wrapper Nachos', calories: 1020, protein: 34, carbs: 96, fat: 56, isVegetarian: false },
  { id: 'kfc-halloumi-burger', chain: 'kfc', name: 'Halloumi Burger', calories: 703, protein: 30, carbs: 61, fat: 39, isVegetarian: true },
  { id: 'kfc-halloumi-twister', chain: 'kfc', name: 'Halloumi Twister', calories: 691, protein: 28, carbs: 49, fat: 44, isVegetarian: true },

  // --- Snídaně ---
  { id: 'kfc-snidancove-qurrito', chain: 'kfc', name: 'Snídaňové Qurrito (vejce/slanina)', calories: 548, protein: 31, carbs: 24.2, fat: 35.2, isVegetarian: false },
  { id: 'kfc-snidance-twister', chain: 'kfc', name: 'Snídaňový Twister Cheese & Bacon', calories: 622, protein: 29, carbs: 46.6, fat: 36, isVegetarian: false },
  { id: 'kfc-snidancovy-talir', chain: 'kfc', name: 'Snídaňový talíř', calories: 538, protein: 31, carbs: 38.5, fat: 29.1, isVegetarian: false },
  { id: 'kfc-toast-egg-cheese', chain: 'kfc', name: 'Toast s vejcem a sýrem', calories: 368, protein: 17, carbs: 31.5, fat: 19.5, isVegetarian: true },
  { id: 'kfc-bagel-egg-cheese', chain: 'kfc', name: 'Snídaňový Bagel s vejcem a sýrem', calories: 559, protein: 25, carbs: 60.9, fat: 23.1, isVegetarian: true },
  { id: 'kfc-double-toast', chain: 'kfc', name: 'Dvojitý toast (vejce/sýr/slanina)', calories: 738, protein: 36, carbs: 54, fat: 42, isVegetarian: false },

  // --- Saláty ---
  { id: 'kfc-caesar-grill', chain: 'kfc', name: 'Salát Caesar (grilovaný filet)', calories: 102, protein: 20, carbs: 2.5, fat: 0.5, tip: 'Absolutní dietní vítěz (20g proteinu na 102 kcal)', isVegetarian: false },
  { id: 'kfc-salat-piccante', chain: 'kfc', name: 'Salát Piccante', calories: 256, protein: 21, carbs: 9.9, fat: 13.8, isVegetarian: false },
  { id: 'kfc-coleslaw', chain: 'kfc', name: 'Salát Coleslaw', calories: 141, protein: 1, carbs: 13.3, fat: 9.7, isVegetarian: true },

  // --- Přílohy ---
  { id: 'kfc-bramborova-kase', chain: 'kfc', name: 'Bramborová kaše s omáčkou', calories: 117, protein: 3, carbs: 22.2, fat: 1.3, isVegetarian: true },
  { id: 'kfc-hranolky-male', chain: 'kfc', name: 'Hranolky malé', calories: 176, protein: 3, carbs: 25.9, fat: 7, isVegetarian: true },
  { id: 'kfc-hranolky-velke', chain: 'kfc', name: 'Hranolky velké', calories: 265, protein: 4, carbs: 38.9, fat: 10.5, isVegetarian: true },
  { id: 'kfc-hranolky-kyblik', chain: 'kfc', name: 'Hranolky kyblík', calories: 605, protein: 9, carbs: 88.8, fat: 24, isVegetarian: true },
  { id: 'kfc-lupinky-male', chain: 'kfc', name: 'Bramborové lupínky malé', calories: 292, protein: 3, carbs: 28.9, fat: 17.5, isVegetarian: true },
  { id: 'kfc-lupinky-velke', chain: 'kfc', name: 'Bramborové lupínky velké', calories: 584, protein: 7, carbs: 57.7, fat: 34.9, isVegetarian: true },
  { id: 'kfc-rosti', chain: 'kfc', name: 'Rosti', calories: 238, protein: 3, carbs: 30.5, fat: 11.6, isVegetarian: true },
  { id: 'kfc-chilli-nuggets', chain: 'kfc', name: 'Chilli Cheese Nuggets', calories: 318, protein: 8, carbs: 28.5, fat: 19.1, isVegetarian: true },
  { id: 'kfc-cibulose-krouzky', chain: 'kfc', name: 'Cibulové kroužky', calories: 207, protein: 2, carbs: 29.1, fat: 10.2, isVegetarian: true }
];
