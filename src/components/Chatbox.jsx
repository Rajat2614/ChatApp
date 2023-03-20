import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { supabase } from "../supabaseClient";

export default function Chatbox  () {
    const messagesEndRef = useRef();
    const [messages, setMessages] = useState([]);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behaviour: "smooth" });
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    const channel = supabase.channel('db-messages');

    const roomId = 'room1';

    async function getData() {
        channel.subscribe(async (status) => {
            if (status == "SUBSCRIBED") {
                const { data, error } = await supabase
                    .from('messages')
                    .select()
                if(error){
                    throw new error ("Data not available!");
                }else{
                    setMessages(data);
                    //console.log(data);
                }
                
            }
        })

    }

    useEffect(() => {
        getData();
    },
        [messages]
    )


    channel.on(
        'postgres_changes',
        {
            event: 'INSERT',
            schema: 'public',
            table: 'messages',
            filter: `room_id=eq.${roomId}`,
        },
        (payload) => {
            setMessages(lastData => [...lastData, payload.new])
        }
    )


    return (
        <div className="pb-40 pt-20 wallpaper containerWrapper">
            {messages.map(message => (
                <Message key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef}></div>
        </div>
    )
}


