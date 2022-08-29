export interface ProfileRepository {
  updatePicture(pictureUrl: Blob): Promise<string>;
}
