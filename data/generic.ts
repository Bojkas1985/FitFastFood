import { FoodItem } from '../types/food';

export const genericData: FoodItem[] = [
  // --- Kebab ---
  { id: 'gen-kebab-durum', chain: 'generic', name: 'Kebab Dürum (tortilla)', calories: 750, protein: 42, carbs: 68, fat: 32, tip: 'Hodně masa, ale pozor na kalorie z velké tortilly a majonézy', isVegetarian: false },
  { id: 'gen-kebab-doner', chain: 'generic', name: 'Döner Kebab (v housce)', calories: 620, protein: 38, carbs: 52, fat: 26, tip: 'Méně sacharidů než tortilla, slušná porce proteinu', isVegetarian: false },
  { id: 'kebab-box-fries', chain: 'generic', name: 'Kebab Box s hranolky', calories: 820, protein: 40, carbs: 65, fat: 44, tip: 'Tuková i kalorická bomba kvůli smaženým hranolkům', isVegetarian: false },
  { id: 'kebab-box-salad', chain: 'generic', name: 'Kebab Box pouze se salátem', calories: 480, protein: 42, carbs: 12, fat: 28, tip: 'TOP fitness volba u kebabu (zrušíš sacharidy z přílohy)', isVegetarian: false },

  // --- Generická Pizza (porce = 1/4 pizzy, cca 150g) ---
  { id: 'gen-pizza-sunkova', chain: 'generic', name: 'Pizza Šunková (1/4 ks)', calories: 370, protein: 18, carbs: 43, fat: 13, tip: 'Klasický základ s rozumným poměrem tuků', isVegetarian: false },
  { id: 'gen-pizza-salami', chain: 'generic', name: 'Pizza Salámová / Pepperoni (1/4 ks)', calories: 420, protein: 16, carbs: 42, fat: 21, isVegetarian: false },
  { id: 'gen-pizza-quattro', chain: 'generic', name: 'Pizza 4 Formaggi (1/4 ks)', calories: 460, protein: 21, carbs: 40, fat: 24, tip: 'Hodně bílkovin, ale masivní tuky ze sýrů', isVegetarian: true },
  { id: 'gen-pizza-margherita', chain: 'generic', name: 'Pizza Margherita (1/4 ks)', calories: 340, protein: 14, carbs: 42, fat: 12, tip: 'Základní sýrová klasika', isVegetarian: true },

  // --- České stánky & Lahůdky ---
  { id: 'gen-smazak', chain: 'generic', name: 'Smažený sýr v housce s tatarkou', calories: 780, protein: 24, carbs: 65, fat: 46, tip: 'Extrémní nálož tuků ze smažení a tatarky', isVegetarian: true },
  { id: 'gen-parek-roklik', chain: 'generic', name: 'Párek v rohlíku (1ks)', calories: 310, protein: 9, carbs: 28, fat: 18, isVegetarian: false },
  { id: 'gen-sekana-houska', chain: 'generic', name: 'Sekaná v housce s hořčicí', calories: 520, protein: 20, carbs: 45, fat: 28, isVegetarian: false },
  { id: 'gen-langos', chain: 'generic', name: 'Langoš s česnekem, sýrem a kečupem', calories: 680, protein: 16, carbs: 72, fat: 36, isVegetarian: true },

  // --- Asijské Bistro ---
  { id: 'gen-smazenky-nudle', chain: 'generic', name: 'Smažené nudle s kuřecím', calories: 720, protein: 32, carbs: 85, fat: 26, isVegetarian: false },
  { id: 'gen-kung-pao', chain: 'generic', name: 'Kung Pao s rýží', calories: 650, protein: 35, carbs: 75, fat: 22, tip: 'Dobrý zdroj bílkovin, pozor na větší porce rýže', isVegetarian: false },
  { id: 'gen-pho-bo', chain: 'generic', name: 'Polévka Pho Bo (hovězí)', calories: 450, protein: 30, carbs: 55, fat: 10, tip: 'Skvělý vývar, nízké tuky, zasytí', isVegetarian: false },
];
