import { PlayerProfile } from '../player-profile/player-profile.model';

export interface CrewProfile {
  name: String;
  sponsor: boolean;
  imageURL: String;
  founder: String;
  members: PlayerProfile[];
  region: String;
  games: String [];
  description: String;
}
