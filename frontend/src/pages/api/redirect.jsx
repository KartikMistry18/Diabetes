// pages/api/redirect.js

export default function handler(req, res) {
  try {
    res.redirect('https://diabetesretinopathy.streamlit.app/');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
