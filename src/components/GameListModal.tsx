import * as Select from "@radix-ui/react-select";
import { useEffect, useState } from "react";

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export default function GameListModal() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);
  return (
    <Select.Viewport className="bg-zinc-900 ">
      {games.map((game) => {
        return (
          <Select.Item
            value={game.id}
            key={game.id}
            className="text-zinc-500 hover:bg-violet-600 hover:text-white px-4 py-3 text-sm"
          >
            <Select.ItemText>{game.title}</Select.ItemText>
          </Select.Item>
        );
      })}
    </Select.Viewport>
  );
}
