import notfound_icon from "shared/assets/404_icon.svg"
import BackButton from "shared/ui/backButton";
import { Wrapper } from "./style";

const NotFoundPage = () => {
    return <Wrapper>
        <img src={notfound_icon} alt="Not Found" />
        <BackButton />
    </Wrapper>;
};

export default NotFoundPage;