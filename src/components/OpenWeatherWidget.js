import ReactWeather, { useOpenWeather } from 'react-open-weather';

const OpenWeatherWidget = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '09abbc7a8a78715fbda116413ee7f8da',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
    />
  );
};

export default OpenWeatherWidget;