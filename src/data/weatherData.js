export const weatherSnapshot = {
  city: 'Mariner Bay',
  region: 'Pacific Coast',
  description: 'Warm breeze with islands of sunshine',
  temp: 72,
  high: 78,
  low: 66,
  feelsLike: 74,
  humidity: '58%',
  wind: '12 mph NW',
  uv: '4 (Moderate)',
  details: [
    { label: 'Sunrise', value: '5:42 AM' },
    { label: 'Sunset', value: '8:25 PM' },
    { label: 'Pressure', value: '1016 hPa' },
    { label: 'Visibility', value: '10 mi' },
  ],
};

export const hourlyForecast = [
  { time: 'Now', temp: 72, condition: 'Sunny' },
  { time: '10 AM', temp: 74, condition: 'Bright' },
  { time: '12 PM', temp: 76, condition: 'Warm' },
  { time: '2 PM', temp: 77, condition: 'Light breeze' },
  { time: '4 PM', temp: 75, condition: 'Patchy clouds' },
  { time: '6 PM', temp: 71, condition: 'Coastal fog' },
];

export const comfortTips = [
  'Sunglasses recommended for the midday glare.',
  'Carry a light sweater for the evening sea breeze.',
  'Hydrate often—warm air can sneak up slowly.',
];
