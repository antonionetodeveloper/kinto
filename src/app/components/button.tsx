"use client"

import axios from "axios"

interface ButtonProps {
   content: string
   pressed: string
}

const Button = ({ content, pressed }: ButtonProps) => {
   const url = "http://192.168.133.124"

   switch (pressed) {
      case "W":
         axios.get(url + "/car/move/foward")
         break
      case "A":
         axios.get(url + "/car/move/left")
         break
      case "S":
         axios.get(url + "/car/move/backward")
         break
      case "D":
         axios.get(url + "/car/move/right")
         break
      case "":
         axios.get(url + "/car/move/stop")
         break
      default:
         break
   }

   return (
      <button
         className={`bg-green-500 hover:cursor-auto rounded-full w-32 h-32 text-6xl text-white focus:outline-none ${
            pressed === content ? "bg-green-600" : ""
         }`}
      >
         {content}
      </button>
   )
}

export default Button
