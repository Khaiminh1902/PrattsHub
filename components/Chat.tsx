import React, { useState, useEffect } from 'react';
import { IoChatbox } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from './ui/input';
import { Button } from './ui/button';
import './Chat.css'


interface Message {
  text: string;
  sender: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    // Retrieve messages from localStorage on component mount
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever messages change
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const sendMessage = () => {
    if (!messageInput.trim()) return;

    // Add new message to state
    setMessages(prevMessages => [
      ...prevMessages,
      { text: messageInput, sender: 'You' }
    ]);

    // Clear input field
    setMessageInput('');
  };

  return (
    <Sheet>
      <SheetTrigger className='w-[19px] h-[19px] flex items-center justify-center'>
        <Button>
          <IoChatbox className='text-lg' />
        </Button>
      </SheetTrigger>
      <SheetContent className='bg-dark-1 text-white border-none flex flex-col justify-between'>
  <SheetHeader>
    <SheetTitle className='pb-2 border-b border-stone-500'>Messages</SheetTitle>
    <div className='pt-2 gap-2 flex flex-col'>
      {messages.map((msg, index) => (
        <div key={index} className='flex gap-2 items-center'>
          <strong className='text-stone-500 font-normal text-sm'>{msg.sender}</strong>
          <div className='message-container bg-blue-500 p-2 rounded-xl'>
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  </SheetHeader>
  <div className='flex gap-1'>
    <Input
      type='text'
      value={messageInput}
      onChange={(e) => setMessageInput(e.target.value)}
      placeholder='Type your message...'
      className='placeholder:text-stone-500 flex-grow bg-dark-2 text-white mr-2'
    />
    <Button
      onClick={sendMessage}
      className='border bg-blue-1 border-blue-1 rounded-xl w-[47px]'
    >
      <FaPaperPlane className='text-white' />
    </Button>
  </div>
</SheetContent>
    </Sheet>
  );
};

export default Chat;
