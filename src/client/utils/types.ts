export interface iRestaurants {
    name: string;
    url: string;
    formatted_phone_number: string;
    formatted_address: string;
    opening_hours: string;
    weekday_text: [];
    business_status: string;
    vicinity: string;
    photos: [];
    place_id: string;
  }

  export interface iBars {
      name: string;
      url: string;
      formatted_phone_number: string;
      formatted_address: string;
      opening_hours: string;
      weekday_text: [];
      business_status: string;
      vicinity: string;
      photos: [];
      place_id: string;
    }

    export interface iAttractions {
        name: string;
        url: string;
        formatted_phone_number: string;
        formatted_address: string;
        opening_hours: string;
        weekday_text: [];
        business_status: string;
        vicinity: string;
        photos: [];
        place_id: string;
      }