import dayjs from "dayjs";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Calendar as DefaultCalendar } from "react-native-calendars";

export default ({ setDate, markedDates }) => {
  const today = dayjs().format("YYYY-MM-DD");

  const onManualInput = ({ dateString }) => {
    // console.log("dateString");
    // console.log(dateString);
    setDate(dateString);
  };

  return (
    <DefaultCalendar
      style={styles.calendar}
      current={today}
      markedDates={
        markedDates
          ? markedDates
          : {
              [today]: {
                selected: true,
                marked: true,
                disabled: false,
                disableTouchEvent: false,
              },
            }
      }
      disabledByDefault
      onDayPress={onManualInput}
      disableAllTouchEventsForDisabledDays={true}
      //   disableAllTouchEventsForInactiveDays={true}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    marginRight: 14,
    marginBottom: 30,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
