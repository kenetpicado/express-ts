import app from './app.js';
import env from './config/env.js';

app.listen(env.PORT, () => {
    console.log(`🚀 API corriendo en http://localhost:${env.PORT}`);
});