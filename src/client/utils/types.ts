export interface iRestaurants {
  name: string;
  url: string;
  website: string;
  formatted_phone_number: string;
  formatted_address: string;
  opening_hours: {weekday_text: Array<any>};
  description: string;
  weekday_text: string;
  rating: number;
  business_status: string;
  vicinity: string;
  photos?: string;
  place_id: string;
}

export interface iBars {
  name: string;
  url: string;
  website: string;
  formatted_phone_number: string;
  formatted_address: string;
  opening_hours: Array<string>;
  description: string;
  weekday_text: string;
  rating: number;
  business_status: string;
  vicinity: string;
  photos?: string;
  place_id: string;
}