const { io } = require('socket.io-client')

const socket = io('https://bizfinn.onrender.com', {
  transports: ['websocket']
  

})
console.log(socket, "sttaus")
socket.on('connect_error', () => {
  // revert to classic upgrade
  socket.io.opts.transports = ['polling', 'websocket']
})
export default socket