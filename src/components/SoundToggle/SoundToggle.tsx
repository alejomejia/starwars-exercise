'use client'

import { useContext } from 'react'
import useSound from 'use-sound'

import { AppContext } from '@/context'
import { IconButton } from '../IconButton/IconButton'
import { IconVolumeOn } from '../Icons/IconVolumeOn'
import { IconVolumeOff } from '../Icons/IconVolumeOff'

export function SoundToggle() {
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

  return <IconButton onClick={toggleSound}>{isSoundEnabled ? <IconVolumeOn /> : <IconVolumeOff />}</IconButton>
}
