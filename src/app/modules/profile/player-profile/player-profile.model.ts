import { CrewProfile } from '../crew-profile/crew-profile.model';
import { GameProfile } from '../game-profile/game-profile.model';

export interface PlayerProfile {
  // Basic information
  name: String;
  gamertag: String;
  imageURL: String;
  nationality: String;
  crew: CrewProfile[];

  // Social media information
  facebookURL: String;
  twitterURL: String;
  youtubeURL: String;
  twitchURL: String;
  discordUser: String;
  websiteURL: String;

  // Console ID information
  steamId: String;
  nintendoId: String;
  playStationId: String;
  xboxId: String;

  // Geography information
  country: String;
  region: String;
  city: String;

  // Competitive information
  competitiveGames: GameProfile[];
}
