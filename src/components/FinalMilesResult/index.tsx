import {
  Container,
  InternationalTravels,
  MondeyInPocket,
  NationalTravels,
  Total,
} from "./styles";

interface FinalMilesResultsProps {
  totalMiles: number | undefined;
}

const FinalMilesResults: React.FC<FinalMilesResultsProps> = ({
  totalMiles,
}) => {
  const internationalTotal = Math.floor(totalMiles! / 80000).toLocaleString(
    "pt-BR"
  );
  const nationalTotal = Math.floor(totalMiles! / 20000).toLocaleString("pt-BR");

  const moneyTotal = ((totalMiles! / 1000) * 20).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  console.log(totalMiles);
  return (
    <Container className="bot-message">
      <div className="message-content--auto">
        <div>
          <Total>Isso representa em média:</Total>
          <InternationalTravels>
            <span>{internationalTotal}</span>{" "}
            {internationalTotal === "1"
              ? "VIAGEM INTERNACIONAL"
              : "VIAGENS INTERNACIONAIS"}
          </InternationalTravels>
          <NationalTravels>
            <span>{nationalTotal}</span>{" "}
            {nationalTotal === "1" ? "VIAGEM NACIONAL" : "VIAGENS NACIONAIS"}
          </NationalTravels>
          <MondeyInPocket>
            <span>{moneyTotal}</span> de renda extra no seu bolso
          </MondeyInPocket>
        </div>
      </div>
    </Container>
  );
};

export default FinalMilesResults;
