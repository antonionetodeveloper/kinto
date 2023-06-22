"use client"

import axios from "axios"

interface ButtonProps {
   content: string
   pressed: string
}

const Button = ({ content, pressed }: ButtonProps) => {
   const url = "http://192.168.10.124"

   const handlePress = async () => {
      switch (pressed) {
         case "W":
            return await axios.get(url + "/car/move/foward")
         case "A":
            return await axios.get(url + "/car/move/left")
         case "S":
            return await axios.get(url + "/car/move/backward")
         case "D":
            return await axios.get(url + "/car/move/right")
         case " ":
            return await axios.get(url + "/car/stop")

         default:
            break
      }
   }
   handlePress()

   return (
      <button
         className={`bg-green-500 hover:cursor-auto rounded-full w-32 h-32 text-6xl text-white focus:outline-none ${
            pressed === content ? "bg-green-800" : ""
         }`}
      >
         {content}
      </button>
   )
}

export default Button
