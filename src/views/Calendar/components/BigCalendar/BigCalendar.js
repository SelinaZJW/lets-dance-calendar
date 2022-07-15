import React, { Fragment, useMemo, useRef, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import events from './events';
import moment from 'moment';
import { Box } from '@mui/material';

import { FestivalQuickViewDialog } from 'views/Festivals/components/FestivalList/components';


const localizer = momentLocalizer(moment);

export default function BigCalendar() {
  const [openId, setOpenId] = useState(null);
  const clickRef = useRef(null);

  const { components, defaultDate, max, views } = useMemo(
    () => ({
      defaultDate: new Date(2022, 3, 1),
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
      console.log(calEvent.id);
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
          events={events}
          localizer={localizer}
          views={views}
          popup
          onDoubleClickEvent={onDoubleClickEvent}
        />
      </Box>

      {events.map((item) => {
        return (      
          <FestivalQuickViewDialog
            key={item.id}
            open={openId === item.id}
            onClose={() => setOpenId(null)}
            imageSrc={null}
            details={{
              title: item.title,
              description: '',
              price: '',
              href: '',
              reviewScore: 5,
              reviewCount: 12,
            }}
          />
        );
      })}
    </Fragment>
  );
}

// BigCalendar.propTypes = {
//   localizer: PropTypes.instanceOf(DateLocalizer),
// };