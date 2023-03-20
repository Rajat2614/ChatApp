
const Message = ({ message }) => {

    let time = message.created_at;
    time = time.slice(11, 16);

    return (
        <div className="pb-0 pt-0 containerWrapper">
            <div>
                <div className="chat chat-end">
                    <div className="chat-header">
                        <time className="text-xs opacity-70 font-bold">{time}</time>
                    </div>
                    <div className="chat-bubble chat-bubble-success ">{message.message}</div>
                </div>
            </div>
        </div>
    )
}

export default Message;