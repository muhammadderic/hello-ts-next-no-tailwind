import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware({ debug: true });

// Match against the pages
export const config = { matcher: ["/"] };