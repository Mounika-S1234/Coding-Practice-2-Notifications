const Notification = ({iconUrl, message, bgColor}) => (
  <div className='notification' style={{backgroundColor: bgColor}}>
    <img src={iconUrl} alt='icon' className='notification-icon' />
    <p className='notification-message'>{message}</p>
  </div>
)

const App = () => (
  <div className='notifications-container'>
    <h1 className='heading'>Notifications</h1>
    <img 
      src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'/>
      message='Information Message'
      bgColor='#0b69ff'
    />
    <Notification
      iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      message='Success Message'
      bgColor='#2dca73'
    />
    <Notification
      iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      message='Warning Message'
      bgColor='#ffb800'
    />
    <Notification
      iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      message='Error Message'
      bgColor='#ff0b37'
    />
  </div>
)

const element = <App />

ReactDOM.render(element, document.getElementById('root'))
