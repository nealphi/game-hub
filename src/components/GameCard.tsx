import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CreditScore from "./CreditScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' scrollMarginBottom={3}>
        <PlatformIconList plarforms={game.parent_platforms.map( p => p.platform)} />
        <CreditScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}<Emoji rating={game.rating_top}/></Heading>

      </CardBody>
    </Card>
  );
};

export default GameCard;
