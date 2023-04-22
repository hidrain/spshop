import ContentLoader from "react-content-loader"
import { Wrapper } from "./style"

const Skeleton = () => (
  <Wrapper>
    <ContentLoader
      speed={2}
      width={300}
      height={250}
      viewBox="0 0 300 250"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="11" y="29" rx="0" ry="0" width="228" height="130" />
      <rect x="15" y="200" rx="0" ry="0" width="165" height="30" />
      <rect x="15" y="245" rx="0" ry="0" width="102" height="40" />
    </ContentLoader>
  </Wrapper>
)

export default Skeleton