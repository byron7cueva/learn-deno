import { Application, Router } from '../../deps.ts';

const env = Deno.env.toObject();
const port = parseInt(env.SERVER_PORT);

/**
 * Server http
 */
export class Server {
  private static instance: Server;

  private app: Application;

  private constructor() {
    this.app = new Application();
    this.app.addEventListener('listen', this.listenHandle);
  }

  private listenHandle = () => {
    console.log(`Server run on port: ${port}`);
  }

  static getInstance() {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  useRouter(router: Router) {
    this.app.use(router.routes());
    this.app.use(router.allowedMethods());
  }

  run() {
    this.app.listen({ port });
  }

}