import AsyncStorage from "@react-native-async-storage/async-storage";
import { playerGetByGroup } from "./playerGetByGroup";

export async function playerGetByGroupAndTeams(group: string, team: string) {
  try {
    const storage = await playerGetByGroup(group);
    const players = storage.filter((player) => player.team === team);
    return players;
  } catch (error) {
    // biome-ignore lint/complexity/noUselessCatch: <explanation>
    throw error;
  }
}
