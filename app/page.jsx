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

const Dashboard = async () => {
  // نمایش تیکتها در صفحه اصلی از دیتابیس
  const { tickets } = await getTickets();

  // for remove duplicate
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      <div>
        <div className="lg:grid grid-cols-2 xl:grid-cols-4">
          {/* اگر تیکت وجود دارد و کتگوری آن یونیک است */}
          {tickets &&
            uniqueCategories?.map((uniqueCategory, categoryIndex) => (
              <div key={categoryIndex} className="mb-4">
                
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
