export interface FoodItem {
  id: string;
  chain: 'mcdonalds' | 'kfc' | 'burgerking' | 'popeyes';
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  tip?: string;
}
