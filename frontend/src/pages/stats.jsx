import { StatsTable } from "../components/StatsTable";
import { useState, useEffect } from "react";

function StatPage() {
    const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/stats')
      .then(res => res.json())
      .then(setStats)    
      .catch(console.error);
    }, []);

  return (
    <>
    <div className="flex justify-around items-center h-full w-full bg-cover bg-[url('assets/sword_and_spell.jpg')]">
    <div>
      {StatsTable(stats)}
    </div>
    <div>
      {StatsTable(stats)}
    </div>
    </div>
    </>
  );
}

export default StatPage;
