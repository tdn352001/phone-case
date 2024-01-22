import classnames, { ArgumentArray } from 'classnames'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ArgumentArray) => twMerge(classnames(...args))
