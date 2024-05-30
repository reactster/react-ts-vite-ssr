import { json } from "react-router-dom";

export default async function homeLoader() {
  return json({ message: 'Welcome to React Router!' })
}
