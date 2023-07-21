import React from 'react';
import type {PlaceItem} from '@api/types';
import {
  useAddBookmark,
  useBookmarksStore,
  useDeleteBookmark,
} from '@store/bookmarks';

export const useAddBookmarkButton = ({
  id,
  data,
}: {
  id: string;
  data: PlaceItem[];
}) => {
  const {data: bookmarksData} = useBookmarksStore();
  const addBookmark = useAddBookmark();
  const deleteBookmark = useDeleteBookmark();

  const onAddToBookmarks = () => {
    const itemInBookmark = bookmarksData.bookmarksList.find(
      item => item.fsq_id === id,
    );

    if (itemInBookmark) {
      deleteBookmark({fsq_id: id});

      return;
    }

    const currentItem = data.find(item => item.fsq_id === id)!;

    addBookmark(currentItem);
  };

  const isAddedToBookmarks = React.useMemo(() => {
    return !!bookmarksData.bookmarksList.find(item => item.fsq_id === id);
  }, [bookmarksData.bookmarksList]);

  return {isAddedToBookmarks, onAddToBookmarks};
};
