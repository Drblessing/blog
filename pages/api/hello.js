// Simple API route that returns a JSON object with a message
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}
