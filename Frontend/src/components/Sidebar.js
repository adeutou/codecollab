import React, { useContext, useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./Sidebar.css"; // Import your CSS file
import { AppContext } from "../context/appContext"; // Import context
import { useSelector,useDispatch } from "react-redux";
import { addNotifications, resetNotifications } from "../features/userSlice";
function Sidebar() {
  const user = useSelector((state) => state.user);
  const { socket, setCurrentRoom, setRooms, rooms, currentRoom } = useContext(AppContext);
  const dispatch = useDispatch();
  function joinRoom(room) {
    if (!user) {
      return alert("Please login");
    }
    socket.emit("join-room", room, currentRoom);
    setCurrentRoom(room);
    // dispatch for notifications
    dispatch(resetNotifications(room))
socket.off("notifications").on("notifications", (room) => {
  if (currentRoom !== room) dispatch(addNotifications(room));
});
    
  }



  useEffect(() => {
    if (user) {
      setCurrentRoom("HTML/CSS"); // Set initial room
      getRooms(); // Fetch room data
      socket.emit("join-room", "HTML/CSS");
      socket.emit("new-user");
    }
  }, [user]); // Run effect only when user changes

  socket.off("new-user").on("new-user", (payload) => {
    console.log(payload);
  });

  function getRooms() {
    fetch("http://localhost:5001/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data)); // Update rooms state with fetched data
  }

  if (!user) {
    return <></>; // Render nothing if no user
  }

  // Check if rooms exist before accessing its length or mapping
  return (
    <div id="con">
      <br />
      <h2>
        <i
          class="fa-solid fa-users-rectangle "
          style={{ color: "rgb(114, 175, 244)" }}
        ></i>
          Forums :
      </h2>
      <ListGroup>
        {rooms && rooms.length > 0 ? (
          rooms.map((room, idx) => (
            <ListGroup.Item
              key={idx}
              active={room === currentRoom}
              onClick={() => joinRoom(room)}
            >
              {room}
              {currentRoom !== room && (
                <span className="badge rounded-pill bg-primary">
                  {user.newMessages[room]}
                </span>
              )}
            </ListGroup.Item>
          ))
        ) : (
          <p>Loading rooms...</p> // Display loading message if rooms haven't loaded
        )}
      </ListGroup>
    </div>
  );
}

export default Sidebar;
