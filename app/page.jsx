import TicketCard from "./(components)/TicketCard";

// نمایش تیکتها در صفحه اصلی از دیتابیس
const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("خطا در دریافت تیکت ها", error);
  }
};

const Dashboard = () => {

  // نمایش تیکتها در صفحه اصلی از دیتابیس
  const {tickets} = await getTickets()
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
