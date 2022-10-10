/* eslint-disable no-use-before-define */
import { RequestHttpRepository } from '@/core/infra';
import { ProfileRepository } from '@/user/data';

export class ProfileRepositoryData implements ProfileRepository {
  async updatePicture(picture: Blob): Promise<string> {
    const http = new RequestHttpRepository<FormData, UpdatePictureRespone>(process.env.BASE_URL);

    const formData = new FormData();
    formData.append('file', picture);

    const httpResponse = await http.request({
      method: 'post',
      url: `user/updatePicture`,
      body: formData,
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    return httpResponse.body.pictureUrl;
  }
}

interface UpdatePictureRespone {
  pictureUrl: string;
}
