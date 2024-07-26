import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store"
    })
  } catch (error) {
    console.log(error)
  }
}

const TicketPage = async ({ params }) => {
  // If the ID of the ticket already exists, the ticket should be edited, otherwise, the ticket is new
  const EDITMODE = params.id === "new" ? flase : true;
  let updateTicketData = {}; // blank object
  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    console.log(updateTicketData);
  }
  return <TicketForm />;
};

export default TicketPage;
