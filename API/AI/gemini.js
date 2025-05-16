const axios = require('axios');

const client = axios.create({
  withCredentials: true,
  headers: {
    'user-agent': 'Mozilla/5.0 (Linux; Android 10)',
    'accept': '*/*',
    'accept-language': Intl.DateTimeFormat().resolvedOptions().locale || 'id-ID',
    'cache-control': 'no-cache',
    'connection': 'keep-alive',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': 'https://toolbaz.com',
    'pragma': 'no-cache',
    'referer': 'https://toolbaz.com/',
    'sec-fetch-mode': 'cors'
  }
});

function randomString(length) {
  let result = '';
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function generateToken() {
  const payload = {
    bR6wF: {
      nV5kP: "Mozilla/5.0 (Linux; Android 10)",
      lQ9jX: Intl.DateTimeFormat().resolvedOptions().locale || 'id-ID',
      sD2zR: "431x958",
      tY4hL: Intl.DateTimeFormat().resolvedOptions().timeZone,
      pL8mC: "Linux armv81",
      cQ3vD: new Date().getFullYear(),
      hK7jN: new Date().getHours()
    },
    uT4bX: { mM9wZ: [], kP8jY: [] },
    tuTcS: Math.floor(Date.now() / 1000),
    tDfxy: null,
    RtyJt: generateUUID()
  };
  return `d8TW0v${Buffer.from(JSON.stringify(payload)).toString('base64')}`;
}

async function getAuth() {
  try {
    const session_id = randomString(36);
    const token = generateToken();
    const params = new URLSearchParams({ session_id, token });
    const { data } = await client.post('https://data.toolbaz.com/token.php', params.toString());
    return data.success ? { token: data.token, session_id } : null;
  } catch (error) {
    return null;
  }
}

async function ask(prompt, model = "gemini-2.0-flash") {
  const auth = await getAuth();
  if (!auth) return null;
  try {
    const params = new URLSearchParams({
      text: prompt,
      capcha: auth.token,
      model,
      session_id: auth.session_id
    });
    const { data } = await client.post('https://data.toolbaz.com/writing.php', params.toString());
    return data;
  } catch (error) {
    return null;
  }
}

module.exports = async (req, res) => {
  try {
    const prompt = req.query.prompt;
    if (!prompt) {
      return res.errorJson({ error: 'Missing "prompt" query parameter.' }, 400);
    }
    const responseData = await ask(prompt);
    if (!responseData) {
      return res.status(500).json({ error: 'Error communicating with the API.' });
    }
    res.succesJson(responseData);
  } catch (error) {
    res.errorJson({ error: error.message });
  }
};