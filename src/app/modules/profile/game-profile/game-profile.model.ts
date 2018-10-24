import { Release } from 'src/app/shared/models/release.model';

export interface GameProfile {
  name: String;
  imageURL: String;
  releaseDate: Release[];
  developer: String;
  console: String;
  description: String;
}
