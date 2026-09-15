import { kfcData } from './kfc';
import { mcdonaldsData } from './mcdonalds';
import { burgerkingData } from './burgerking';
import { subwayData } from './subway';
import { genericData } from './generic';
import { FoodItem } from '../types/food';

export const FOOD_DATA: FoodItem[] = [
  ...mcdonaldsData,
  ...kfcData,
  ...burgerkingData,
  ...subwayData,
  ...genericData,
];
