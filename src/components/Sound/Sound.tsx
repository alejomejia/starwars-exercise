'use client'

import { useContext } from 'react'
import useSound from 'use-sound'

import { AppContext } from '@/context'
import { IconVolumeOn } from '../Icons/IconVolumeOn'
import { IconVolumeOff } from '../Icons/IconVolumeOff'

export function Sound() {
  const { isSoundEnabled, setIsSoundEnabled } = useContext(AppContext)

  const [play, { pause }] = useSound('/sounds/imperial-march.mp3', {
    volume: 0.5,
    loop: true,
    soundEnabled: !isSoundEnabled
  })

  const toggleSound = () => {
    setIsSoundEnabled((prev) => !prev)
    isSoundEnabled ? pause() : play()
  }

  return (
    <button
      className="w-12 h-12 flex items-center justify-center text-slate-50 bg-slate-900 rounded-full p-3 transition duration-200 hover:bg-slate-800"
      onClick={toggleSound}
    >
      {isSoundEnabled ? <IconVolumeOff /> : <IconVolumeOn />}
    </button>
  )
}
