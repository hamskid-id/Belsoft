import { cn } from '@/lib/utils'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './form'
import { Input } from './input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './select'
import { Textarea } from './textarea'
import { IFormField } from '@/lib/types/global'
import { Text } from '@/components/global/text'

export const FormInputField = ({
  control,
  name,
  labelStyle,
  label,
  inputCategory,
  inputType,
  readOnly = false,
  value,
  handleValueChange,
  inputStyle,
  placeholder,
  selectList
}: IFormField) => {
  const inputCnStyle = cn(
    `border border-Surface_400 bg-Surface_200 p-[12px] gap-[12px] flex items-center`,
    inputStyle
  )

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className={`${labelStyle}`}>
              <Text style='flex items-start gap-1'>{label}</Text>
            </FormLabel>
          )}
          {inputCategory === 'input' && (
            <FormControl>
              {handleValueChange ? (
                <Input
                  value={value}
                  readOnly={readOnly}
                  type={inputType || 'text'}
                  className={inputCnStyle}
                  placeholder={placeholder}
                  onChange={handleValueChange}
                />
              ) : (
                <Input
                  readOnly={readOnly}
                  type={inputType || 'text'}
                  className={inputCnStyle}
                  placeholder={placeholder}
                  {...field}
                />
              )}
            </FormControl>
          )}
          {inputCategory === 'textArea' && (
            <FormControl>
              <Textarea
                readOnly={readOnly}
                className={inputCnStyle}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          )}
          {inputCategory === 'select' && (
            <div className='relative mb-2'>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={readOnly}
              >
                <FormControl>
                  <SelectTrigger className={inputCnStyle}>
                    <SelectValue
                      placeholder={placeholder}
                      className='flex ites-center'
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {selectList !== undefined &&
                    selectList.map((item, index) => (
                      <SelectItem value={item} key={index}>
                        {item}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
