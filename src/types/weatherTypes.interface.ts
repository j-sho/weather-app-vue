export interface WeatherTypes {
  city?: String;
  descriptionIcon?: String;
  errorMessage?: String;
  results?: Result[];
}

export interface Result {
  id: Number;
  title: String;
  value: Number;
}
