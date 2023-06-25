import { CacheRepository } from '@/core/data';
import { ProfileRepository } from '@/user/data/protocols';
import { User } from '@/user/domain';

export class UpdatePicture {
  constructor(
    private cacheRepository: CacheRepository,
    private profileRepository: ProfileRepository,
    private picture: Blob
  ) {}

  async execute() {
    const result = await this.profileRepository.updatePicture(this.picture);

    const user = this.cacheRepository.get<User.Data>('@user');
    const picturePreview = URL.createObjectURL(this.picture);

    const updatedPicture: User = new User({ ...user, pictureUrl: picturePreview });

    this.cacheRepository.set('@user', updatedPicture);
    window.dispatchEvent(new Event('storage'));
    return result;
  }
}
