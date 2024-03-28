//<reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_INSTAGRAM_TOKEN: string;
    REACT_APP_GOOGLE_MAPS_API_KEY: string;
    REACT_APP_GOOGLE_MAPS_PLACE_ID: string;
  }
}
