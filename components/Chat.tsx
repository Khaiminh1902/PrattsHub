import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'
import { IoChatbox } from "react-icons/io5";
import { Input } from './ui/input';
import { FaPaperPlane } from "react-icons/fa6";

const Chat = () => {

  return (
    <div>
      <Sheet>
        <SheetTrigger className='h-[21px] w-[18px] flex items-center justify-center'>
          <Button>
            <IoChatbox className='h-[30px] w-[19px]' />
          </Button>
        </SheetTrigger>
        <SheetContent className='flex flex-col justify-between bg-dark-1 border-1 text-white overflow-y-auto'>
          <SheetHeader>
            <SheetTitle className='border-b border-stone-500 pb-3'>Messages</SheetTitle>
            <SheetDescription className='pt-2 flex flex-col gap-5'>
            </SheetDescription>
          </SheetHeader>
          <div className='flex gap-1'>
            <Input 
              className='rounded-xl placeholder:text-stone-500'
              placeholder="Type message..."
            />
            <Button 
              className='border w-[45px] rounded-xl bg-blue-1 border-blue-1'
            >
              <FaPaperPlane />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Chat