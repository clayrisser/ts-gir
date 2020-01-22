import { handle as handleError } from '@oclif/errors/lib/handle';
import TSGir from './TSGir';

try {
  TSGir.run();
} catch (err) {
  handleError(err);
}
