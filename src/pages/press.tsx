import React from 'react'
import { Layout, PressContent, LifestyleSongOfTheDay } from '../components'

export default function Press() {
  return (
    <Layout>
      <div className="flex flex-col w-full items-center gap-y-12">
        <iframe
          src="https://kutx.org/song-of-the-day/king-warbler-lifestyle/"
          className="sm:w-3/4 w-full sm:h-[700px] h-[500px]"
        />
        <iframe
          src="http://austintownhall.com/2019/02/26/king-warbler-share-all-week/"
          className="sm:w-3/4 w-full sm:h-[700px] h-[500px]"
        />
        <iframe
          src="https://kutx.org/song-of-the-day/king-warbler-lighter-fluid/"
          className="sm:w-3/4 w-full sm:h-[700px] h-[500px]"
        />
      </div>
    </Layout>
  )
}
