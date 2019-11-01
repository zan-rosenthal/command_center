import { NowRequest, NowResponse } from "@now/node";
import axios from 'axios'

const WEBHOOK_URL = process.env.WEBHOOK_URL;

const sendToSlack = (json) => {
  const resp = axios.post(WEBHOOK_URL, {
    json
  });


export default (req: NowRequest, res: NowResponse) => {
  sendToSlack(res.body)
  res.status(200)
  res.send({ json: { message: "Event processed"}})
}
