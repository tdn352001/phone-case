import { icons, LucideProps } from 'lucide-react'

export type IconProps = LucideProps & {
  name: keyof typeof icons
}

const Icon = ({ name, color = 'currentColor', size = 20, ...props }: IconProps) => {
  const LucideIcon = icons[name]

  return <LucideIcon color={color} size={size} {...props} />
}

export default Icon
