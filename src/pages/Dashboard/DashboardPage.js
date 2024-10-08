import { useEffect, useState } from "react";
import { DashbaordCard } from "./components/DashboardCard";
import { DashbaordEmpty } from "./components/DashboardEmpty";
import { getUserOrders } from "../../services";
import { useTitle } from "../../hooks/useTitle";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle('Dashboard');

  useEffect(() => {
    async function fetchOrders(){
     try{
        const data = await getUserOrders();
        setOrders(data); 
     } catch(error){
      toast.error(error.message, {position: "bottom-center"});
     }    
    }

    fetchOrders();
  }, []);  

    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>

        <section>
          { orders.length && orders.map((order) => (
            <DashbaordCard key={order.id} order={order}/>
          ))}
        </section>

        <section>
          { !orders.length && <DashbaordEmpty /> }
        </section>
      </main>
    )
  }