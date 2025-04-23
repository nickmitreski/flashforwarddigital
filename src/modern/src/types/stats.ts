/**
 * Types for Statistics Components
 */

export interface StatProps {
  /** The numeric value to display */
  value: number
  /** The label text above the value */
  label: string
  /** The description text below the value */
  description: string
  /** Optional prefix to display before the value */
  prefix?: string
  /** Optional suffix to display after the value */
  suffix?: string
  /** Optional Tailwind color class for gradient */
  colorClass?: string
}

export interface StatsData {
  /** Array of statistics to display */
  stats: StatProps[]
  /** Optional heading text */
  heading?: string
  /** Optional subheading text */
  subheading?: string
} 