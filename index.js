const Notification = (props) => {
  const { text, className, src } = props;
  return (
    <div className={`${className} notification`}>
      <img src={src} className="image" />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="notificationsApp-bg-container">
    <h1 className="notifications-heading">Notifications</h1>
    <Notification
      text="Information Message"
      className="info"
      src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      text="Success Message"
      className="success"
      src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      text="Warning Message"
      className="warn"
      src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      text="Error Message"
      className="err"
      src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
