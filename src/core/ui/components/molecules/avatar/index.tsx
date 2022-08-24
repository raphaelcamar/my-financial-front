import React, { useState } from 'react';
import { delay } from '@/core/utils';
import { CircularProgress, Icon } from '../../atoms';
import { ChooseAvatar, Container, Letter, WrapperAvatar } from './styles';

interface IAvatar {
  url?: string;
  size?: number;
  chooseAvatar?: boolean;
}

export const Avatar: React.FC<IAvatar> = ({ url, size, chooseAvatar }) => {
  const [openOption, setOpenOption] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const isValidUrl = (testUrl: string): boolean => {
    const reg = /http/;
    return reg.test(testUrl);
  };

  const handleOpenChooseImage = (open: boolean) => {
    if (chooseAvatar) setOpenOption(open);
  };

  const handleUploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    event.preventDefault();
    const { files } = event.target;
    setOpenOption(true);
    setLoading(true);
    await delay(2000);
    setLoading(false);

    setImagePreview(URL.createObjectURL(files?.[0]));
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
  };

  return (
    <WrapperAvatar onMouseEnter={() => handleOpenChooseImage(true)} onMouseLeave={() => handleOpenChooseImage(false)}>
      {isValidUrl(imagePreview || url) ? (
        <Container src={imagePreview || url} size={size} />
      ) : (
        <Letter size={size}>{url?.[0]}</Letter>
      )}
      {chooseAvatar || loading ? (
        <ChooseAvatar size={size} open={openOption || loading}>
          <input type="file" accept="image/png, image/jpeg" onChange={handleUploadAvatar} />
          {loading ? <CircularProgress size={8} color="background" /> : <Icon icon="photo" color="grey" shade="50" />}
        </ChooseAvatar>
      ) : null}
    </WrapperAvatar>
  );
};
