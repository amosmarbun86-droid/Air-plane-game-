const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const { name, score, mission, kills, difficulty } = req.body || {};

    if (typeof score !== 'number' || !isFinite(score) || score < 0 || score > 5000000) {
      res.status(400).json({ error: 'Skor tidak valid' });
      return;
    }

    const cleanName = String(name || 'PILOT').trim().slice(0, 18) || 'PILOT';
    const cleanDiff = ['easy', 'normal', 'hard'].includes(difficulty) ? difficulty : 'normal';
    const cleanMission = Math.max(1, Math.floor(Number(mission) || 1));
    const cleanKills = Math.max(0, Math.floor(Number(kills) || 0));

    await db.collection('scores').add({
      name: cleanName,
      score: Math.floor(score),
      mission: cleanMission,
      kills: cleanKills,
      difficulty: cleanDiff,
      ts: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Gagal menyimpan skor' });
  }
};
