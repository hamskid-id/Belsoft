import { IMaxScreenWrapperPropType } from '@/lib/types/global'
import { cn } from '@/lib/utils'

export const MaxScreenView: React.FC<IMaxScreenWrapperPropType> = ({
  style,
  children
}) => {
  return <div className={cn('m-auto max-w-[1480px]', style)}>{children}</div>
}
