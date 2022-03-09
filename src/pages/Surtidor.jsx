import { Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import ImageCar from "../assets/img/car.png";
import { useNavigate } from "react-router-dom";

export default function Surtidor() {
  const navigate = useNavigate();

  const surtidores = [
    {
      id: 1,
      name: "surtidor 1",
    },
    {
      id: 2,
      name: "surtidor 2",
    },
    {
      id: 3,
      name: "surtidor 3",
    },
    {
      id: 4,
      name: "surtidor 4",
    },
    {
      id: 5,
      name: "surtidor 5",
    },
    {
      id: 6,
      name: "surtidor 6",
    },
  ];

  const clickSurtidor = (id) => {
    localStorage.setItem("surtidor", id);
    navigate("/product");
  };

  return (
    <>
      <Heading textAlign="center" marginBottom="5">
        Selecciona el surtidor
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={9}>
        {surtidores.map((surtidor) => (
          <GridItem
            key={surtidor.id}
            w="100%"
            h="40"
            margin="5"
            borderRadius="10"
            padding="4"
            cursor="pointer"
            textAlign="center"
            boxShadow="0px 4px 10px -3px rgb(117 117 177);"
            _hover={{
              background:
                "linear-gradient(to right, var(--chakra-colors-teal-500), var(--chakra-colors-green-500))",
              color: "#fff",
              shadow: "2xl",
            }}
            onClick={() => clickSurtidor(surtidor.id)}
          >
            <Heading size="lg" textTransform="capitalize">
              {surtidor.name}
            </Heading>
            <Image
              src={ImageCar}
              alt={surtidor.name}
              width={100}
              margin="0 auto"
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
