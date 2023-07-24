import React from "react";
import Spinner from "./Spinner";
import { useTranslation } from "react-i18next";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:00`;
};

const Card = ({ loadingData, showData, weather, forecast }) => {
  const { t} = useTranslation("global");
  if (loadingData) {
    return <Spinner />;
  }

  if (!showData || !weather) {
    return <h1>{t("not")}</h1>;
  }

  const url = "http://openweathermap.org/img/w/";
  const iconUrl = url + weather.weather[0].icon + ".png";
  const forecastItems = forecast.list.slice(1, 4).map((item) => ({
    iconUrl: url + item.weather[0].icon + ".png",
    description: item.weather[0].description,
    temp: (item.main.temp - 273.15).toFixed(1),
    date: formatDate(item.dt_txt),
  }));

  return (
    <Box className="app" mt={5}>
      {showData === true ? (
        <Box
          mx="auto"
          bg="black"
          color="white"
          p={4}
          width="400px"
          height="500px"
          margin-top="30px"
        >
          <Flex flexWrap="wrap">
            <Box flexGrow={1} mt={2}>
              <Text fontSize="xl">{weather.name}</Text>
              <Text>{formatDate(new Date())}</Text>
              <Text fontSize="4xl">
                {(weather.main.temp - 273.15).toFixed(1)}ºC
              </Text>
              <Text>
                <Image src={iconUrl} alt="icon" mr={2} />
                {weather.weather[0].description}
              </Text>
              <Text>
              <h1>{t("Maximum")}</h1>
                {(weather.main.temp_max - 273.15).toFixed(1)}ºC
              </Text>
              <Text>
              <h1>{t("Minimum")}</h1>
                {(weather.main.temp_min - 273.15).toFixed(1)}ºC
              </Text>
              <Text>
              <h1>{t("wind")}</h1> {(weather.main.feels_like - 273.15).toFixed(1)}ºC
              </Text>
            </Box>
            <Box w="100%" mt={4}>
              <hr />
              <Flex>
                {forecastItems.map((item, index) => (
                  <Box key={index} flex={1} textAlign="center">
                    <Text>{item.date}</Text>
                    <Text className="description">
                      <Image src={item.iconUrl} alt="icon" mr={2} />
                      {item.description}
                    </Text>
                    <Text className="temp">{item.temp}ºC</Text>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Box>
      ) : (
        <Text fontSize="2xl" color="white">
          Sin datos
        </Text>
      )}
    </Box>
  );
};

export default Card;
