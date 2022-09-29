/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useHistory } from 'react-router-dom'

export type Celebrity = {
  id: string
  name: string
  imageUrl: string
  status: 'GOOD' | 'BAD' | 'UGLY'
  socialAccounts: {
    type: string
    url: string
  }[]
}

export type CardProps = {
  celebrity: Celebrity
  level: number
  visible: boolean
}

export const Card = ({ celebrity, level, visible }: CardProps) => {
  const { id, name, imageUrl, status } = celebrity

  const history = useHistory()

  const levelMapping = {
    0: { w: 20, s: 2 },
    1: { w: 30, s: 3 },
    2: { w: 40, s: 4 },
    3: { w: 60, s: 6 },
    4: { w: 80, s: 8 },
    5: { w: 100, s: 10 },
    6: { w: 120, s: 12 },
    7: { w: 140, s: 14 },
    8: { w: 180, s: 18 },
  }

  return (
    <div
      className="shadow group overflow-hidden m-[1px] transition-all duration-200"
      key={id}
      onClick={() => {
        history.push(`/profile/${id}`)
      }}
      style={{ width: `${levelMapping[level].w}px` }}
      draggable={false}
    >
      <div className="relative">
        {status === 'GOOD' && (
          <div
            className="absolute inset-0 opacity-40 bg-green-500 group-hover:hidden z-30 transition-all duration-500"
            draggable={false}
          />
        )}
        {status === 'UGLY' && (
          <div
            className="absolute inset-0 opacity-40 bg-red-500 group-hover:hidden z-30 transition-all duration-500"
            draggable={false}
          />
        )}

        <img
          src={imageUrl}
          alt={name}
          className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
          draggable={false}
        />
      </div>
      {visible && (
        <div
          className="p-[1px] text-center"
          style={{ fontSize: `${levelMapping[level].s}px` }}
        >
          {name}
        </div>
      )}
    </div>
  )
}
