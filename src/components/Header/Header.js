import Link from "next/link";
import LogoutButton from "../LogoutButton";
import ProfilePic from "../ProfilePic";

export default function Header() {
    let user = {name: "Tanner",}
  
    return (
    <header className="header">
      <ProfilePic></ProfilePic>
      <div className="userInfo">
        <h6>Hi, { user.name }!</h6>
        <h4><Link href="/">Your Account</Link></h4>
      </div>
      <LogoutButton></LogoutButton>
    </header>
  );
}
