import { useState } from "react";
import { supabase } from "../supabaseClient";

const SendMsg = () => {
    const [value, setValue] = useState("");

    const roomId = 'room104';
    const userId = 'Anonymous';

    async function handleSendMessage  (e) {
        e.preventDefault();

        if(value.trim() === ""){
            alert("Enter valid message");
            return;
        }

        else{
                const res = await supabase.from('messages').insert({
                    room_id: roomId,
                    user_id: userId,
                    message: value,
                })
                //console.log(res);
        }
        setValue("");
    }

    return (
        <div className="bg-gray-300 fixed bottom-0 py-8 w-full shadow-lg">
            <form onSubmit={handleSendMessage} className="containerWrapper flex">
                <input value={value} onChange={e => setValue(e.target.value)}
                    className="input w-full px-3 focus:outline-none bg-gray-100 rounded-r-none" type="text" placeholder="Type a message" />
                <button type="submit" className="w-auto bg-gray-500 rounded-r-lg text-white px-10 text-sm">Send</button>
            </form>
        </div>
    )
}

export default SendMsg;