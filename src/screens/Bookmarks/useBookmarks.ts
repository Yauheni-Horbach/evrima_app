import {useBookmarksStore} from '@store/bookmarks';

export const useBookmarks = () => {
  const bookmarksStore = useBookmarksStore();

  return {
    bookmarksStore,
  };
};
