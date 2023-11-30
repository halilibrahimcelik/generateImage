import { NextResponse, NextRequest, NextMiddleware } from "next/server";
import { withHeaders } from "./middlewares/withHeaders";
import { withRate } from "./middlewares/withRate";
import { stackMiddlewares } from "./middlewares/stackMiddlewres";
const middlewares = [withHeaders];
export default stackMiddlewares(middlewares);

// export const config = {
//   matcher: "/apis/(.*)",
// };
