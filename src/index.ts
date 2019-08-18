import { handle as handleError } from '@oclif/errors/lib/handle';
import TSGir from './TSGir';

(async () => {
  try {
    await TSGir.run();
  } catch (err) {
    handleError(err);
  }
})();
