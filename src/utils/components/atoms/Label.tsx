interface LabelProps {
  htmlFor: string
  children: React.ReactNode | string
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="block text-gray-700 font-medium mb-1">
      {children}
    </label>
  )
}
