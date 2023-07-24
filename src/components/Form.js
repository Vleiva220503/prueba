import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

const Form = ({ newLocation }) => {
  const { t} = useTranslation("global");
  
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;

    newLocation(city.trim());
  };

  return (
    <Box className="app" justifyContent="center">
      <form onSubmit={handleSubmit}>
        <InputGroup mb={3} mx="auto" borderRadius="5px">
          <Input
            width="450px"
            justifyContent="center"
            type="text"
            className="form-control"
            id="cityInput"
            placeholder={t("city")}
            height="30px"
            borderRadius="5px"
            value={city}
            onChange={handleChange}     
          />
          <InputRightAddon
            width="100px"
            height="30px"
            borderRadius="5px" 
            as="button"
            color="black"
            type="submit"
            htmlFor="cityInput"
            cursor={"pointer"}
          >
            {t("to")}
          </InputRightAddon>
        </InputGroup>
      </form>
    </Box>
  );
};

export default Form;
