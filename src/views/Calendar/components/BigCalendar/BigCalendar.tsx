import React, { Fragment, useMemo, useRef, useEffect, useCallback, useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import { Box } from '@mui/material';

import { FestivalQuickViewDialog } from 'views/Festivals/components/FestivalList/components';
import mock_festivals from 'mock_data/festivals';
import { FestivalsProps } from 'views/Festivals/components/FestivalList/FestivalList';

const localizer = momentLocalizer(moment);

const BigCalendar = ({ festivals }: FestivalsProps): JSX.Element => {
  const [openId, setOpenId] = useState(null);
  const clickRef = useRef(null);

  const { defaultDate, views } = useMemo(
    () => ({
      defaultDate: new Date(),
      views: [Views.MONTH, Views.AGENDA],
      // max: dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours'),
    }),
    []
  );

  useEffect(() => {
    return () => {
      window.clearTimeout(clickRef?.current);
    };
  }, []);


  const onDoubleClickEvent = useCallback((calEvent) => {
    window.clearTimeout(clickRef?.current);
    clickRef.current = window.setTimeout(() => {
      // window.alert(JSON.stringify(calEvent.id));
      // console.log(calEvent.id);
      setOpenId(calEvent.id);
    }, 200);
  }, []);


  return (
    <Fragment>
      {/* <DemoLink fileName="popup">
        <strong>
          
          fit all the days events to see an inline popup of all the events.
        </strong>
      </DemoLink> */}
      <Box sx={{height: '100vh'}} >
        <Calendar
          // components={components}
          defaultDate={defaultDate}
          events={festivals}
          localizer={localizer}
          views={views}
          popup
          onDoubleClickEvent={onDoubleClickEvent}
        />
      </Box>

      {festivals.map((item) => {
        return (      
          <FestivalQuickViewDialog
            key={item.id}
            open={openId === item.id}
            onClose={() => setOpenId(null)}
            imageSrc={item.media}
            details={{
              title: item.title,
              city: item.city,
              country: item.country,
              specific_location: item.specific_location,
              styles: item.styles,
              start: item.start,
              organiser: item.organiser,
              website: item.website,
              facebook: item.facebook,
              ticket: item.ticket,
              discount: item.discount,
              contact: item.contact,
            }}
          />
        );
      })}
    </Fragment>
  );
};

export default BigCalendar;

