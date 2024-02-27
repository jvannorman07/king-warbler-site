import React from 'react'

export default function PageContent({ children }: any) {
  return <div className="flex flex-col min-w-0 sm:px-[64px] px-8 py-8">{children}</div>
}
