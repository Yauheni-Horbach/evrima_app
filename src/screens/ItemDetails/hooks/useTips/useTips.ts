import React from 'react';
import {foursquare_options, URL_PLACE_TIPS_FOURSQUARE} from '@api/URLList';
import {useRoute} from '@react-navigation/native';

type Tip = {
  created_at: string;
  id: string;
  text: string;
};

export const useTips = () => {
  const {
    params: {fsq_id},
  } = useRoute<ReactNavigation.RouteFor<'ItemDetails'>>();

  const [tips, setTips] = React.useState<Tip[]>([]);
  const [isTipsReceived, setIsTipsReceived] = React.useState(false);
  const [isTipsOpen, setIsTipsOpen] = React.useState(false);

  const fetchData = async (fsq_id: string) => {
    const url = URL_PLACE_TIPS_FOURSQUARE({
      fsq_id,
    });

    await fetch(url, foursquare_options)
      .then(res => res.json())
      .then(json => {
        setTips(json);
        setIsTipsReceived(true);
        setIsTipsOpen(!isTipsOpen);
      })
      .catch(err => console.error('error:' + err));
  };

  const onChangeStateTips = () => {
    if (!isTipsReceived) {
      fetchData(fsq_id);
      return;
    }
    setIsTipsOpen(!isTipsOpen);
  };

  return {
    tips,
    isTipsReceived,
    isTipsOpen,
    onChangeStateTips,
  };
};
