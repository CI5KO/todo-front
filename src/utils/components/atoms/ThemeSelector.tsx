'use client'

import { useEffect, useState } from 'react'
import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { SunIcon } from '../icons/SunIcon'
import { MoonIcon } from '../icons/MoonIcon'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      defaultSelected
      size="lg"
      color="danger"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={(e: any) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  )
}
