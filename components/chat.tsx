import React from 'react'
import { MessageCircleMore } from 'lucide-react'

const Chat = () => {
  return (
    <div className="chat fixed w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-700 right-8 bottom-8 md:right-16 md:bottom-16 flex items-center justify-center shadow-lg">
        <MessageCircleMore size={24} />
    </div>
  )
}

export default Chat