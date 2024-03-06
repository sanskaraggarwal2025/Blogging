import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import {cors} from 'hono/cors'
// serverless mai global variables avoid krne chahiye kyuki hr route alag ho skta hia,to hr route ke andr hi connection krna chahiye

const app = new Hono<{
  //this binding part is to access environment variables in hono from wrangler.toml
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.use('/*', cors())
app.route('/api/v1/user/', userRouter);
app.route('/api/v1/blog/', blogRouter);


export default app