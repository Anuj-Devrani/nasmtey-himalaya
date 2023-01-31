import React from 'react'

export default function DestinationCard() {
  return (
    <div className="rounded-3xl shadow-2xl">
      <div
        className="rounded-t-3xl"
        style={{
          backgroundImage: 'url("https://picsum.photos/200/300")',
          backgroundSize: 'cover',
          width: '400px',
          height: '384px',
        }}
      ></div>
      <div className="py-4 px-6">
        <span className="font-comfortaa font-bold">Auli Kuari Pass</span>
      </div>
    </div>
  )
}
