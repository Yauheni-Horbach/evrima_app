import {NavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useBookmarksStore} from '@store/bookmarks';

export const useBookmarks = () => {
  const bookmarksStore = useBookmarksStore();

  const navigation = useNavigation<NavigationProp<'TravelSwipes'>>();

  const onOpenItemDetails = (fsq_id: string) => {
    return () => {
      navigation.navigate('ItemDetails', {
        fsq_id,
        type: 'bookmarks',
      });
    };
  };

  return {
    bookmarksStore,
    onOpenItemDetails,
  };
};
