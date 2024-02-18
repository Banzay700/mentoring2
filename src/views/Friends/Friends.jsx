import { withLayout } from "../../hooks/withLayout"
import {FriendsPageSidebar} from "../../components/sidebars";
import {FriendsPageWrapper} from "./Friends.styled";

const FriendsPage = () => {
    return (
        <FriendsPageWrapper>
            <FriendsPageSidebar/>
        </FriendsPageWrapper>
    )
}

const Friends = withLayout(FriendsPage)
export default Friends
