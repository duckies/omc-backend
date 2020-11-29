import { Grade } from '../../backend/src/user/enums/grade.enum'
import { ReminderFreq } from '../../backend/src/user/enums/reminder-freq.enum'

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const sexes = Object.freeze([
  {
    text: 'Female',
    value: 'female',
  },
  { text: 'Male', value: 'male' },
])

export const education = Object.freeze({
  'Elementary School': [
    { text: 'Kindergarten', value: Grade.KINDERGARTEN },
    { text: '1st Grade', value: Grade.FIRST },
    { text: '2nd Grade', value: Grade.SECOND },
    { text: '3rd Grade', value: Grade.THIRD },
    { text: '4th Grade', value: Grade.FOURTH },
    { text: '5th Grade', value: Grade.FIFTH },
  ],
  'Middle School': [
    { text: '6th Grade', value: Grade.SIXTH },
    { text: '7th Grade', value: Grade.SEVENTH },
    { text: '8th Grade', value: Grade.EIGHTH },
  ],
  'High School': [
    { text: '9th Grade', value: Grade.NINTH },
    { text: '10th Grade', value: Grade.TENTH },
    { text: '11th Grade', value: Grade.ELEVENTH },
    { text: '12th Grade', value: Grade.TWELFTH },
  ],
  College: [
    { text: 'Undergraduate', value: 'Undergrad' },
    { text: 'Postgraduate', value: 'Postgrad' },
  ],
})

export const reminders = Object.freeze([
  { text: 'Week Before', value: ReminderFreq.WEEK },
  { text: 'Day Before', value: ReminderFreq.DAY },
  { text: 'Hour Before', value: ReminderFreq.HOUR },
  { text: '15 Minutes Before', value: ReminderFreq.FIFTEEN },
])

/**
 * Authentication
 */

export const COOKIE_THEME = 'omc-theme'
export const COOKIE_JWT = 'omc-token'
export const COOKIE_COMPLETE = 'omc-complete'
export const COOKIE_NAME = 'omc_token'
export const COOKIE_CALENDAR_TYPE = 'omc_calendar_type'
