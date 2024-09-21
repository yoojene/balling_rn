import { useEffect, useState } from "react";
export default function PlayerService() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);

  const fetchPlayers = async () => {
    try {


      console.log("players");
      console.log(players);



      const response = await fetch("./players.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("response");
      console.log(response);
      const data = await response.json();

      // console.log(data);
      // setPlayers(data);
      return data;
    } catch (error: any) {
      console.error(error);
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  // fetchPlayers();

  return { fetchPlayers };
}
