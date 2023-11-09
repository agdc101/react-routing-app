import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Root() {
    const navigation = useNavigation();

    navigation.state === "active" && navigation.navigate("/events");

    return (
        <div>
            <MainNavigation />
            <main>
                { navigation.state === 'loading' && <p>Loading...</p> }
                <Outlet />
            </main>
        </div>
    );
}

export default Root;