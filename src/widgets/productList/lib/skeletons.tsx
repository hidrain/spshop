import Skeleton from "shared/ui/skeleton";

export const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)