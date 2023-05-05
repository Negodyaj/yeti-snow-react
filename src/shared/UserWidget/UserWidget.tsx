interface UserWidgetProps {
  avatarLink: string;
  name: string;
  status: string;
}

export const UserWidget = (props: UserWidgetProps) => {
  const { avatarLink, name, status } = props;
  return (
    <div className="user-widget">
      <img src={avatarLink} alt="Avatar" />
      <div className="user-name">{name}</div>
      <div className="user-status">{status}</div>
    </div>
  );
}