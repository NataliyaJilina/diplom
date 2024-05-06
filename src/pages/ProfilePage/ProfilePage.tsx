import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { SCProfilePage } from "./ProfilePage.styled";
import { Header } from "../../components/UI/Header/Header";




export const ProfilePage = () => {
    const user = useSelector((state: RootState) => state.userSlice.user)

    return(
        <div className="ProfilePage">
        <Header/>
        <SCProfilePage>
        <div className="profile">
            
                <h1>Name: {user?.name}</h1>
                <h1>E-Mail: {user?.mail}</h1>
                <h1>Phone number: {user?.phone_number}</h1>
                <h1>User ID: {user?.user_id}</h1>
                <h1>City: {user?.city}</h1>
            {/* <h1>Registration date: {user?.reg_date}</h1> */}
            
        </div>
        </SCProfilePage>
        </div>
        )
}