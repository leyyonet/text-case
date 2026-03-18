import {
  InvalidValueError,
  KEY_ERROR_DEFAULT_MESSAGE,
  KEY_ERROR_EMIT,
  KEY_ERROR_I18N,
  KEY_FQN_PACKAGE,
} from "@leyyo/common";
import { PCK } from "../internal.js";

export class InvalidCobolCaseError extends InvalidValueError {
  static {
    this[KEY_FQN_PACKAGE] = PCK;
    this[KEY_ERROR_DEFAULT_MESSAGE] = "Invalid cobol case error";
    this[KEY_ERROR_EMIT] = true;
    this[KEY_ERROR_I18N] = true;
  }
}
