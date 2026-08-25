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
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const snap = await db.collection('scores')
      .orderBy('score', 'desc')
      .limit(10)
      .get();

    const list = snap.docs.map(d => {
      const v = d.data();
      return {
        name: v.name,
        score: v.score,
        mission: v.mission,
        kills: v.kills,
        difficulty: v.difficulty,
      };
    });

    res.status(200).json({ list });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Gagal mengambil leaderboard' });
  }
};
