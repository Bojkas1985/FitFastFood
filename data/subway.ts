import { FoodItem } from '../types/food';

export const subwayData: FoodItem[] = [
  // --- Sendviče 15 cm ---
  { id: 'sub-1', chain: 'subway', name: 'BBQ Kuře (15cm)', calories: 312, protein: 20, carbs: 49, fat: 3, tip: 'Výborný poměr: 20g proteinu při pouhých 3g tuků', isVegetarian: false },
  { id: 'sub-2', chain: 'subway', name: 'Šunka (15cm)', calories: 419, protein: 18, carbs: 56, fat: 12, isVegetarian: false },
  { id: 'sub-3', chain: 'subway', name: 'Vajíčko se šunkou (15cm)', calories: 444, protein: 29, carbs: 43, fat: 17, tip: 'Skvělá nálož 29g bílkovin', isVegetarian: false },
  { id: 'sub-4', chain: 'subway', name: 'BBQ Ribs (15cm)', calories: 271, protein: 15, carbs: 42, fat: 4, isVegetarian: false },
  { id: 'sub-5', chain: 'subway', name: 'Veggie Delite® (15cm)', calories: 382, protein: 22, carbs: 42, fat: 15, isVegetarian: true },
  { id: 'sub-6', chain: 'subway', name: 'T.L.C.® Teriyaki (15cm)', calories: 259, protein: 11, carbs: 36, fat: 8, isVegetarian: true },
  { id: 'sub-7', chain: 'subway', name: 'Krůtí (15cm)', calories: 400, protein: 20, carbs: 42, fat: 16, isVegetarian: false },
  { id: 'sub-8', chain: 'subway', name: 'Spicy Veggie (15cm)', calories: 282, protein: 20, carbs: 42, fat: 3, tip: 'Super lehká varianta s 20g bílkovin', isVegetarian: true },
  { id: 'sub-9', chain: 'subway', name: 'Kuře Teriyaki (15cm)', calories: 414, protein: 17, carbs: 42, fat: 19, isVegetarian: false },
  { id: 'sub-10', chain: 'subway', name: 'Tuňák (15cm)', calories: 336, protein: 21, carbs: 47, fat: 7, isVegetarian: false },
  { id: 'sub-11', chain: 'subway', name: 'Spicy Italian (15cm)', calories: 296, protein: 20, carbs: 45, fat: 3, isVegetarian: false },
  { id: 'sub-12', chain: 'subway', name: 'Steak & Sýr (15cm)', calories: 431, protein: 28, carbs: 45, fat: 15, tip: 'Poctivých 28g bílkovin ze steaku', isVegetarian: false },
  { id: 'sub-13', chain: 'subway', name: 'Šťavnaté kuře se slaninou (15cm)', calories: 365, protein: 19, carbs: 43, fat: 13, isVegetarian: false },
  { id: 'sub-14', chain: 'subway', name: 'Kuře Rotisserie (15cm)', calories: 232, protein: 10, carbs: 42, fat: 3, tip: 'Nízkokalorická volba do 240 kcal', isVegetarian: false },
  { id: 'sub-15', chain: 'subway', name: 'Kuřecí Stripsy (15cm)', calories: 381, protein: 19, carbs: 49, fat: 11, isVegetarian: false },
  { id: 'sub-16', chain: 'subway', name: 'Veggie s medovou hořčicí (15cm)', calories: 221, protein: 9, carbs: 40, fat: 3, isVegetarian: true },
  { id: 'sub-17', chain: 'subway', name: 'Italian B.M.T.® (15cm)', calories: 271, protein: 21, carbs: 39, fat: 3, isVegetarian: false },

  // --- Snacky & Chicken Bites ---
  { id: 'sub-18', chain: 'subway', name: 'Waffle Fries (80g)', calories: 147, protein: 2.2, carbs: 18, fat: 6.6, isVegetarian: true },
  { id: 'sub-19', chain: 'subway', name: 'Waffle Fries (120g)', calories: 221, protein: 3.4, carbs: 27, fat: 9.8, isVegetarian: true },
  { id: 'sub-20', chain: 'subway', name: 'Chicken Bites (4ks)', calories: 180, protein: 11, carbs: 14, fat: 8.5, isVegetarian: false },
  { id: 'sub-21', chain: 'subway', name: 'Chicken Bites (8ks)', calories: 360, protein: 21, carbs: 28, fat: 17, isVegetarian: false },
  { id: 'sub-22', chain: 'subway', name: 'Chicken Bites (12ks)', calories: 540, protein: 32, carbs: 42, fat: 26, tip: 'Skvělý snack: 32g proteinu', isVegetarian: false },

  // --- Wrapy / Speciální nabídka ---
  { id: 'sub-23', chain: 'subway', name: 'Chipotle Šunka & Pepperoni Wrap', calories: 289, protein: 14, carbs: 40, fat: 8, isVegetarian: false },
  { id: 'sub-24', chain: 'subway', name: 'Cheesy BBQ Bacon Wrap', calories: 374, protein: 19, carbs: 37, fat: 17, isVegetarian: false },
  { id: 'sub-25', chain: 'subway', name: 'Chipotle Chicken Bite Wrap', calories: 341, protein: 11, carbs: 42, fat: 18, isVegetarian: false },
  { id: 'sub-26', chain: 'subway', name: 'Veggie Guacamole Wrap', calories: 426, protein: 19, carbs: 46, fat: 18, isVegetarian: true },

  // --- Cookies & Omáčky ---
  { id: 'sub-27', chain: 'subway', name: 'Cookie Čokoláda', calories: 216, protein: 2, carbs: 28, fat: 10, isVegetarian: true },
  { id: 'sub-28', chain: 'subway', name: 'Cookie Malina & Cheesecake', calories: 220, protein: 2, carbs: 27, fat: 11, isVegetarian: true },
  { id: 'sub-29', chain: 'subway', name: 'Cookie Veganská dvojitá čokoláda', calories: 208, protein: 2, carbs: 27, fat: 10, isVegetarian: true },
  { id: 'sub-30', chain: 'subway', name: 'Cookie Makadamové', calories: 213, protein: 2, carbs: 28, fat: 10, isVegetarian: true },
  { id: 'sub-31', chain: 'subway', name: 'Omáčka Mexická Chipotle', calories: 54, protein: 0, carbs: 1, fat: 5, isVegetarian: true },
  { id: 'sub-32', chain: 'subway', name: 'Omáčka Caesar', calories: 60, protein: 0, carbs: 1, fat: 6, isVegetarian: true },
  { id: 'sub-33', chain: 'subway', name: 'Omáčka Medovo-hořčičná', calories: 53, protein: 0, carbs: 2, fat: 5, isVegetarian: true },
  { id: 'sub-34', chain: 'subway', name: 'Omáčka Veganská česneková', calories: 29, protein: 0, carbs: 3, fat: 2, isVegetarian: true },
  { id: 'sub-35', chain: 'subway', name: 'Omáčka BBQ', calories: 18, protein: 0, carbs: 4, fat: 0, isVegetarian: true },
  { id: 'sub-36', chain: 'subway', name: 'Omáčka Sladká cibulová', calories: 30, protein: 0, carbs: 7, fat: 0, isVegetarian: true },
];
