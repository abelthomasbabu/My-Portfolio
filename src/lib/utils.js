import {clsx} from 'clsx'; // This utility function merges class names and handles conditional classes
import {twMerge} from 'tailwind-merge'; // This utility function merges Tailwind CSS classes, resolving conflicts

export const cn = (...inputs) => {
  return twMerge(clsx(...inputs));
}