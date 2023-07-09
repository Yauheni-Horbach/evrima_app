import React from 'react';
import {
  useAddBookmark,
  useBookmarksStore,
  useDeleteBookmark,
} from '@store/bookmarks';
import {useCurrentTravelStore} from '@store/currentTravel';

export const useAddBookmarkButton = ({id}: {id: string}) => {
  const {data} = useCurrentTravelStore();
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

    const currentItem = data.placesList.find(item => item.fsq_id === id);

    addBookmark(currentItem);
  };

  const isAddedToBookmarks = React.useMemo(() => {
    return !!bookmarksData.bookmarksList.find(item => item.fsq_id === id);
  }, [bookmarksData.bookmarksList]);

  return {isAddedToBookmarks, onAddToBookmarks};
};
