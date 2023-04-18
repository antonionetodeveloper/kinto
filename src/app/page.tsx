"use client"

import { KeyboardEvent, useState } from "react"
import Button from "./components/button"

export default function Home() {
   const [currentKey, setCurrentKey] = useState<string>("")

   const handleKeyDown = (event: KeyboardEvent) => {
      setCurrentKey(event.key.toUpperCase())
   }

   const handleKeyUp = () => {
      setCurrentKey("")
   }

   return (
      <main
         onKeyDown={(event) => {
            handleKeyDown(event)
         }}
         onKeyUp={() => {
            handleKeyUp()
         }}
         tabIndex={0}
      >
         <section className="flex h-screen items-center justify-center bg-gray-900">
            <div className="flex flex-col gap-10 items-center">
               <Button content="W" pressed={currentKey} />
               <div className="flex gap-10">
                  <Button content="A" pressed={currentKey} />
                  <Button content="S" pressed={currentKey} />
                  <Button content="D" pressed={currentKey} />
               </div>
            </div>
         </section>
      </main>
   )
}
