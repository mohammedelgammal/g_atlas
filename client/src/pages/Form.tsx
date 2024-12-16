import {
  Box,
  Button,
  Card,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import image1 from "src/assets/imgs/1.webp";
import image2 from "src/assets/imgs/2.jpg";
import image3 from "src/assets/imgs/3.jpeg";
import image4 from "src/assets/imgs/4.webp";
import image5 from "src/assets/imgs/5.png";
import image6 from "src/assets/imgs/6.png";
import image7 from "src/assets/imgs/7.jpg";
import image8 from "src/assets/imgs/8.jpg";
import image9 from "src/assets/imgs/9.webp";
import image10 from "src/assets/imgs/10.jpg";
import image11 from "src/assets/imgs/11.png";

import { useState } from "react";

const hrs = ["2 Hours", "4 Hours", "6 Hours", "8 Hours"];

const cards = [
  {
    src: image1,
    title: "Transportation To & From",
  },
  {
    src: image2,
    title: "Snorkeling",
  },
  {
    src: image3,
    title: "Alcohol",
  },
  {
    src: image4,
    title: "Dj",
  },
  {
    src: image5,
    title: "Couples Decoration",
  },
  {
    src: image6,
    title: "Happy Birthday Decorations",
  },
  {
    src: image7,
    title: "Female Party Goers",
  },
  {
    src: image8,
    title: "Performers",
  },
  {
    src: image9,
    title: "Photographer",
  },
  {
    src: image10,
    title: "Flowers",
  },
  {
    src: image11,
    title: "Food Catering",
  },
];

const Circle = ({
  bg,
  num,
  numCol,
  hasBorder,
}: {
  bg: string;
  num: number;
  numCol: string;
  hasBorder: boolean;
}) => {
  return (
    <Box
      borderRadius={"50px"}
      width="20px"
      height="20px"
      backgroundColor={bg}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      border={hasBorder ? "1px solid darkslategray" : ""}
      margin={0}
      padding={"12px"}
    >
      <Text fontSize={"11px"} color={numCol}>
        {num}
      </Text>
    </Box>
  );
};

const Form = () => {
  const [isDurationOpen, setDurationOpen] = useState<boolean>(false);
  const [isAmenOpen, setAmenOpen] = useState<boolean>(false);
  const [hr, setHr] = useState<string>(hrs[0]);
  const [amen, setAmen] = useState<string>("Amenities");

  const AmenCard = ({ src, title }: { src: string; title: string }) => {
    return (
      <Box
        position={"relative"}
        borderWidth="1px"
        borderRadius="18px"
        overflow="hidden"
        boxShadow="md"
      >
        <Image
          width={"100%"}
          height={"200px"}
          src={src}
          alt="Placeholder Image"
          objectFit={"cover"}
        />
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p="10px 20px"
          bg={"#0a1f3d"}
        >
          <Tag
            fontSize={18}
            color={"white"}
            fontWeight={700}
            position={"absolute"}
            top={3}
            right={3}
            variant={"solid"}
            p={"9px 12px"}
            borderRadius={"15px"}
            bg={"#0a1f3d"}
          >
            Free
          </Tag>
          <Text
            height={"70px"}
            color={"white"}
            fontWeight="bold"
            fontSize="lg"
            textAlign={"center"}
          >
            {title}
          </Text>
          <Button
            borderRadius={18}
            fontWeight={400}
            p={"4px 25px"}
            w={"100%"}
            bg={"white"}
            color={"#e06f27"}
            border={"2px solid #e06f27"}
            _hover={{
              bg: "#e06f27",
              color: "white",
            }}
            onClick={() => {
              setAmenOpen(false);
              setAmen(title);
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    );
  };
  const DurationButton = ({ hr }: { hr: string }) => {
    return (
      <Button
        onClick={() => {
          setDurationOpen(false);
          setHr(hr);
        }}
      >
        {hr}
      </Button>
    );
  };
  return (
    <Stack
      margin={0}
      padding={"30px"}
      spacing={5}
      border={"1px solid gray"}
      className="Form"
      borderRadius={"20px"}
    >
      <Text textAlign={"center"} fontWeight={"800"} fontSize={"22px"}>
        FINISH BOOKING
      </Text>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Circle hasBorder={false} bg={"darkslategray"} num={1} numCol="white" />
        <Box backgroundColor={"lightgray"} w={"100%"} height={"1px"}></Box>
        <Circle hasBorder bg={"white"} num={2} numCol="darkslategray" />
      </Box>
      <Stack spacing={"20px"}>
        <Stack>
          <Text color={"darkslategrey"} fontWeight={600}>
            Add Date
          </Text>
          <Input
            borderColor={"darkslategray"}
            border={"1px"}
            placeholder="Date"
            sx={{
              "::placeholder": {
                color: "darkslategray",
                fontWeight: "bolder",
                fontSize: "15px",
              },
            }}
          ></Input>
        </Stack>
        <Stack>
          <Modal onClose={() => setDurationOpen(false)} isOpen={isDurationOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Duration</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <SimpleGrid columns={[2]} gap="10px" marginBottom={5}>
                  {hrs.map((hr, i) => (
                    <DurationButton key={i} hr={hr} />
                  ))}
                </SimpleGrid>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Text color={"darkslategrey"} fontWeight={600}>
            Duration
          </Text>
          <Input
            borderColor={"darkslategray"}
            border={"1px"}
            placeholder="2 hours"
            sx={{
              "::placeholder": {
                color: "gray",
                fontWeight: "bolder",
                fontSize: "15px",
              },
            }}
            onClick={() => setDurationOpen(!isDurationOpen)}
            onChange={() => {}}
            value={hr}
          />
        </Stack>
        <RadioGroup>
          <Radio defaultChecked marginRight={"30px"}>
            <Text>Captained</Text>
          </Radio>
          <Radio>
            <Text>No Captain</Text>
          </Radio>
        </RadioGroup>
        <Stack>
          <Modal
            isOpen={isAmenOpen}
            onClose={() => setAmenOpen(false)}
            size="lg"
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Amenities</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <SimpleGrid marginBottom={2} gridGap={3} columns={[2]}>
                  {cards.map(({ title, src }, i) => (
                    <AmenCard key={i} title={title} src={src} />
                  ))}
                </SimpleGrid>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Text color={"darkslategrey"} fontWeight={600}>
            Amenities
          </Text>
          <Input
            onClick={() => setAmenOpen(!isAmenOpen)}
            borderColor={"darkslategray"}
            border={"1px"}
            placeholder="Amenities"
            sx={{
              "::placeholder": {
                color: "darkslategray",
                fontWeight: "bolder",
                fontSize: "15px",
              },
            }}
            onChange={() => {}}
            value={amen}
          ></Input>
        </Stack>
        <Stack>
          <Text color={"darkslategrey"} fontWeight={600}>
            Passengers
          </Text>
          <Input
            borderColor={"darkslategray"}
            border={"1px"}
            placeholder="Passengers"
            sx={{
              "::placeholder": {
                color: "darkslategray",
                fontWeight: "bolder",
                fontSize: "15px",
                type: "number",
              },
            }}
          ></Input>
        </Stack>
        <Box
          marginTop={2}
          display={"block"}
          backgroundColor={"gray"}
          w={"100%"}
          height={"1px"}
        ></Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Stack spacing={"5px"}>
            <Text fontSize={"24px"} fontWeight={"900"}>
              Total Price
            </Text>
            <Text fontSize={"13px"}>Additional Fees Will Show At Checkout</Text>
          </Stack>
          <Text fontSize={"24px"} fontWeight={"900"}>
            $0
          </Text>
        </Box>
        <Button
          fontSize={"17px"}
          fontWeight={"800"}
          color={"white"}
          bg="#0751C2"
          size="lg" // Large button
          variant="solid" // Solid background
          _hover={{ backgroundColor: "#06499E" }}
        >
          NEXT
        </Button>
      </Stack>
    </Stack>
  );
};

export default Form;
