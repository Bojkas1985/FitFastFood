export interface FoodItem {
  id: string;
  chain: 'mcdonalds' | 'kfc' | 'burgerking' | 'subway' | 'popeyes' | 'generic';
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  tip?: string;
  isVegetarian?: boolean;
}
