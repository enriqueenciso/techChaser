import { GameProfile } from '../game-profile/game-profile.model';

export interface EventProfile {
  id: string;
  name: String;
  status: String; // True = already happened, False = future event.
  // imageURL: String;
  date: Date;
  region: String;
  // address: String;
  // host: String; // Crew &/Or Profile
  // games: GameProfile[];
  // contact: String[]; // Crew/Player profile?

  description: String;

  // Social Media
  // mediaURL: String[];
  // socialURL: String[];
  // bracketURL: String; // Smash GG / Challonge
  // streamURL: String[];
}
