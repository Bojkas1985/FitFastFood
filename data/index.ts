import { kfcData } from './kfc';
import { mcdonaldsData } from './mcdonalds';
import { FoodItem } from '../types/food';

export const FOOD_DATA: FoodItem[] = [
  ...mcdonaldsData,
  ...kfcData,
  // Zde v budoucnu jen přidáš např. ...burgerKingData
];
