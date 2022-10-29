import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { delay } from '@/core/utils';
import { CircularProgress, Icon } from '@/core/ui/components/atoms';
import { ChooseAvatar, Container, Letter, WrapperAvatar } from './styles';

interface IAvatar {
  url?: string;
  size?: number;
  chooseAvatar?: boolean;
  updatePicture?: (picture: Blob) => Promise<void>;
}

export const Avatar: React.FC<IAvatar> = ({ url, size, chooseAvatar, updatePicture }) => {
  const [openOption, setOpenOption] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const isValidUrl = (testUrl: string): boolean => {
    const reg = /http/;
    return reg.test(testUrl);
  };

  const handleOpenChooseImage = (open: boolean) => {
    if (chooseAvatar) setOpenOption(open);
  };

  const handleUploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    try {
      event.preventDefault();
      const { files } = event.target;

      setOpenOption(true);
      setLoading(true);

      await updatePicture(files?.[0]);
      await delay(2000);

      setImagePreview(URL.createObjectURL(files?.[0]));
    } catch (err) {
      enqueueSnackbar(err, { variant: 'error' });
    } finally {
      setLoading(false);
    }
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
