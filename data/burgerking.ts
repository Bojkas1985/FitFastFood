import { FoodItem } from '../types/food';

export const burgerkingData: FoodItem[] = [
  // --- Hovězí Burgery ---
  { id: 'bk-1', chain: 'burgerking', name: 'Whopper', calories: 640, protein: 28, carbs: 49, fat: 36, tip: 'Klasika s 28g hovězího proteinu', isVegetarian: false },
  { id: 'bk-2', chain: 'burgerking', name: 'Double Whopper', calories: 900, protein: 48, carbs: 51, fat: 57, tip: 'Dvě porce masa = 48g bílkovin', isVegetarian: false },
  { id: 'bk-3', chain: 'burgerking', name: 'Triple Whopper', calories: 1160, protein: 68, carbs: 53, fat: 78, tip: 'Extrémní nálož 68g proteinu', isVegetarian: false },
  { id: 'bk-4', chain: 'burgerking', name: 'Whopper Jr.', calories: 340, protein: 15, carbs: 28, fat: 19, tip: 'Menší verze do 350 kcal', isVegetarian: false },
  { id: 'bk-5', chain: 'burgerking', name: 'Big King', calories: 510, protein: 24, carbs: 33, fat: 31, isVegetarian: false },
  { id: 'bk-6', chain: 'burgerking', name: 'Big King XXL', calories: 980, protein: 56, carbs: 42, fat: 64, tip: 'Neskutečných 56g proteinu na velký hlad', isVegetarian: false },
  { id: 'bk-7', chain: 'burgerking', name: 'Bacon King', calories: 1040, protein: 63, carbs: 40, fat: 69, tip: 'Absolutní nálož bílkovin i tuků', isVegetarian: false },
  { id: 'bk-8', chain: 'burgerking', name: 'Double Bacon King', calories: 1350, protein: 85, carbs: 41, fat: 95, isVegetarian: false },
  { id: 'bk-9', chain: 'burgerking', name: 'Steakhouse', calories: 850, protein: 42, carbs: 60, fat: 48, isVegetarian: false },
  { id: 'bk-10', chain: 'burgerking', name: 'Double Steakhouse', calories: 1120, protein: 65, carbs: 62, fat: 71, isVegetarian: false },
  { id: 'bk-11', chain: 'burgerking', name: 'Hamburger', calories: 260, protein: 13, carbs: 28, fat: 10, tip: 'Lehká základní svačina', isVegetarian: false },
  { id: 'bk-12', chain: 'burgerking', name: 'Cheeseburger', calories: 300, protein: 15, carbs: 29, fat: 13, isVegetarian: false },
  { id: 'bk-13', chain: 'burgerking', name: 'Double Cheeseburger', calories: 450, protein: 26, carbs: 30, fat: 24, isVegetarian: false },
  { id: 'bk-14', chain: 'burgerking', name: 'Triple Cheeseburger', calories: 600, protein: 37, carbs: 31, fat: 35, isVegetarian: false },
  { id: 'bk-15', chain: 'burgerking', name: 'Chili Cheese Burger', calories: 330, protein: 15, carbs: 30, fat: 17, isVegetarian: false },
  { id: 'bk-16', chain: 'burgerking', name: 'Double Chili Cheese Burger', calories: 520, protein: 27, carbs: 31, fat: 32, isVegetarian: false },

  // --- Kuřecí & Rybí ---
  { id: 'bk-17', chain: 'burgerking', name: 'Long Chicken', calories: 570, protein: 22, carbs: 54, fat: 30, isVegetarian: false },
  { id: 'bk-18', chain: 'burgerking', name: 'Crispy Chicken', calories: 540, protein: 22, carbs: 53, fat: 27, isVegetarian: false },
  { id: 'bk-19', chain: 'burgerking', name: 'Chicken Wrap', calories: 420, protein: 18, carbs: 41, fat: 20, isVegetarian: false },
  { id: 'bk-20', chain: 'burgerking', name: 'Fish King', calories: 430, protein: 16, carbs: 46, fat: 20, isVegetarian: false },
  { id: 'bk-21', chain: 'burgerking', name: 'King Nuggets (6ks)', calories: 260, protein: 14, carbs: 18, fat: 15, tip: 'Skvělá lehká varianta', isVegetarian: false },
  { id: 'bk-22', chain: 'burgerking', name: 'King Nuggets (9ks)', calories: 390, protein: 21, carbs: 27, fat: 22, isVegetarian: false },
  { id: 'bk-23', chain: 'burgerking', name: 'King Nuggets (20ks)', calories: 860, protein: 46, carbs: 60, fat: 49, isVegetarian: false },
  { id: 'bk-24', chain: 'burgerking', name: 'Chicken Wings (5ks)', calories: 320, protein: 24, carbs: 12, fat: 20, isVegetarian: false },

  // --- Plant-Based (Rostlinné) ---
  { id: 'bk-25', chain: 'burgerking', name: 'Plant-based Whopper', calories: 600, protein: 21, carbs: 52, fat: 34, isVegetarian: true },
  { id: 'bk-26', chain: 'burgerking', name: 'Plant-based Big King', calories: 500, protein: 22, carbs: 36, fat: 30, isVegetarian: true },
  { id: 'bk-27', chain: 'burgerking', name: 'Plant-based Long Chicken', calories: 550, protein: 20, carbs: 56, fat: 28, isVegetarian: true },
  { id: 'bk-28', chain: 'burgerking', name: 'Plant-based Nuggets (6ks)', calories: 250, protein: 13, carbs: 20, fat: 13, isVegetarian: true },

  // --- Přílohy & Omáčky ---
  { id: 'bk-29', chain: 'burgerking', name: 'Hranolky malé', calories: 230, protein: 3, carbs: 31, fat: 10, isVegetarian: true },
  { id: 'bk-30', chain: 'burgerking', name: 'Hranolky střední', calories: 320, protein: 4, carbs: 43, fat: 15, isVegetarian: true },
  { id: 'bk-31', chain: 'burgerking', name: 'Hranolky velké', calories: 410, protein: 5, carbs: 55, fat: 19, isVegetarian: true },
  { id: 'bk-32', chain: 'burgerking', name: 'Onion Rings (6ks)', calories: 230, protein: 3, carbs: 29, fat: 11, isVegetarian: true },
  { id: 'bk-33', chain: 'burgerking', name: 'Chili Cheese Bites (6ks)', calories: 300, protein: 10, carbs: 24, fat: 18, isVegetarian: true },
  { id: 'bk-34', chain: 'burgerking', name: 'BBQ omáčka', calories: 45, protein: 0, carbs: 11, fat: 0, isVegetarian: true },
  { id: 'bk-35', chain: 'burgerking', name: 'Sladkokyselá omáčka', calories: 50, protein: 0, carbs: 12, fat: 0, isVegetarian: true },
  { id: 'bk-36', chain: 'burgerking', name: 'Majonéza', calories: 90, protein: 0, carbs: 1, fat: 10, isVegetarian: true },

  // --- Dezerty & Šejky ---
  { id: 'bk-37', chain: 'burgerking', name: 'Hot Brownie', calories: 320, protein: 4, carbs: 41, fat: 16, isVegetarian: true },
  { id: 'bk-38', chain: 'burgerking', name: 'King Shake Čokoláda', calories: 380, protein: 7, carbs: 62, fat: 11, isVegetarian: true },
  { id: 'bk-39', chain: 'burgerking', name: 'King Shake Jahoda', calories: 360, protein: 7, carbs: 60, fat: 10, isVegetarian: true },
  { id: 'bk-40', chain: 'burgerking', name: 'Sundae Čokoláda', calories: 260, protein: 5, carbs: 42, fat: 8, isVegetarian: true },
  { id: 'bk-41', chain: 'burgerking', name: 'Sundae Jahoda', calories: 220, protein: 4, carbs: 38, fat: 6, isVegetarian: true },
];
