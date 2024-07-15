import DeleteBlock from "./DeleteBlock";
import PriorityDispaly from "./PriorityDispaly";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div>
      <DeleteBlock />
      <PriorityDispaly />
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;
