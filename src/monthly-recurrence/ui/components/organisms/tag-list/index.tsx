import React, { ReactElement, useEffect, useState } from 'react';
import { Icon, Paper, Skeleton, Typography } from '@/core/ui/components/atoms';
import { Header, StyledIconButton, WrapperTagItems, WrapperTagList } from './styles';
import { TagItem } from '../../molecules';
import { useMonthlyRecurrenceContext } from '@/monthly-recurrence/presenters/contexts/monthly-recurrence-context';
import { useAccessContext } from '@/user/presenters';
import { Pagination as EntityPagination } from '@/core/domain';
import { Tag } from '@/monthly-recurrence/domain';
import { AddTagModal } from '../../molecules/add-tag-modal';
import { Pagination } from '@/core/ui/components/organisms';

export const TagList = (): ReactElement => {
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState<EntityPagination<Tag[], 'tags'>>(null);

  const { tags, getTags } = useMonthlyRecurrenceContext();
  const { currentWallet } = useAccessContext();

  const fetchTags = async (pageToFetch: number) => {
    try {
      setLoading(true);
      const result = await getTags(pageToFetch, currentWallet.id);
      setPage(result);
    } catch (err) {
      // TODO
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags(1);
  }, []);

  const onChangePage = async (pageToFetch: number) => {
    await fetchTags(pageToFetch);
  };

  return (
    <Paper density={1}>
      <WrapperTagList>
        <Header>
          <Typography weight={600} size="xlarge" color="grey" shade={700}>
            Suas tags
          </Typography>
          <StyledIconButton onClick={() => setOpenModal(true)}>
            <Icon icon="add" color="primary" shade="500" size={14} />
          </StyledIconButton>
        </Header>
        <WrapperTagItems>
          {loading ? (
            <>
              <Skeleton height={55} borderRadius={8} />
              <Skeleton height={55} borderRadius={8} />
              <Skeleton height={55} borderRadius={8} />
              <Skeleton height={55} borderRadius={8} />
              <Skeleton height={55} borderRadius={8} />
            </>
          ) : (
            <>
              {tags?.map(tag => (
                <TagItem key={tag.id} tag={tag} page={page.currentPage} />
              ))}
            </>
          )}
        </WrapperTagItems>

        <Pagination
          currentPage={page?.currentPage || 1}
          totalPages={page?.totalPages || 1}
          onChangePage={onChangePage}
        />
      </WrapperTagList>
      {openModal && <AddTagModal page={page.currentPage} closeModal={setOpenModal} />}
    </Paper>
  );
};
