import axios from "@/local-api/axios";
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const { data } = await axios.get(`/cron`);

  console.log(data);
  return {
    statusCode: 200,
  };
};

export { handler };
