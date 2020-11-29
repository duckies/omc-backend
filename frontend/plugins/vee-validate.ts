import { differenceInYears, parse } from 'date-fns'
import { isNumber } from 'lodash'
import { extend, setInteractionMode } from 'vee-validate'
// eslint-disable-next-line camelcase
import { email, min_value, max_value } from 'vee-validate/dist/rules'

/**
 * Reduces the aggressiveness of vee-validate to not throw errors while the user
 * is still filling out the field being validated.
 *
 * @see https://logaretm.github.io/vee-validate/guide/interaction-and-ux.html#interaction-modes
 */
setInteractionMode('lazy')

extend('min_value', min_value)
extend('max_value', max_value)

extend('positive', {
  validate: (value) => isNumber(value) && value > 0,
  message: 'Value must be positive.',
})

extend('has_course', {
  params: ['course'],
  validate: (value, { course }: any) => {
    return value === 'course' ? !!course : true
  },
  message: 'Selecting a course is required for this payment mode',
})

extend('email', email)

extend('ext', {
  validate: (
    files: File | File[],
    extensions: string[] | Record<string, any>
  ) => {
    const regex = new RegExp(`.(${extensions.join('|')})$`, 'i')

    if (Array.isArray(files)) {
      return files.every((file) => regex.test(file.name))
    }

    return regex.test(files.name)
  },
  message: 'This file type is not permitted.',
})

extend('min_age', {
  params: ['min'],
  validate: (value, { min }: any) => {
    const diff = differenceInYears(new Date(), new Date(value))

    return diff >= min
  },
  message: 'Please have a parent or guardian register in your stead.',
})

extend('max_age', {
  params: ['max'],
  validate: (value, { max }: any) => {
    const diff = differenceInYears(new Date(), new Date(value))

    return diff < max
  },
  message: 'Please select a valid birthday.',
})

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: !['', null, undefined].includes(value),
    }
  },
  computesRequired: true,
  message: 'This field is required.',
})

extend('password', {
  params: ['target'],
  validate: (value, { target }: any) => value === target,
  message: 'Password confirmation does not match.',
})

extend('startdate', {
  params: ['target'],
  validate: (value, { target }: any) => {
    return (
      parse(value, 'EEE, LLL d, yyyy', new Date()) <=
      parse(target, 'EEE, LLL d, yyyy', new Date())
    )
  },
  message: 'Start date cannot be after the end date.',
})

extend('starttime', {
  params: ['time'],
  validate: (value, { time }: any) => {
    const now = new Date()
    return parse(value, 'h:mm aaa', now) <= parse(time, 'h:mm aaa', now)
  },
  message: 'Start time cannot be after end time',
})
