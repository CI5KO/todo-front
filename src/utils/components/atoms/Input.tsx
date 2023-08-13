interface InputProps {
  id: string
  type: 'number' | 'date' | 'email' | 'password'
  placeholder: string
  onChange?: (event: any) => void
}

export default function Input({ id, type, placeholder, onChange }: InputProps) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full border rounded-md px-3 py-2"
    />
  )
}
