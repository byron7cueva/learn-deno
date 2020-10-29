import { Application, Router } from '../../deps.ts';

export class Server {
  private static instance: Server;

  private app: Application;

  private constructor() {
    this.app = new Application();
  }

  static getInstance() {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  useRouter(router: Router) {
    this.app.use(router.routes());
  }

  run() {
    const env = Deno.env.toObject();
    const port = parseInt(env.SERVER_PORT) || 3000;
    this.app.listen({ port });
  }
}