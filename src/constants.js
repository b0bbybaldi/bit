/** @flow */
const userHome = require('user-home');
const packageFile = require('../package.json');
const path = require('path');

function getDirectory(): string {
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    return path.join(process.env.LOCALAPPDATA, 'Bit');
  }

  return path.join(userHome, '.bit');
}

function getCacheDirectory(): string {
  if (process.platform === 'darwin') {
    return path.join(userHome, 'Library', 'Caches', 'Bit');
  }

  return getDirectory();
}

export const RESOURCES = path.resolve(path.join(__dirname, '../resources'));

/**
 * bit description
 */
export const BIT_DESCRIPTION = 'bit is a free and open source tool designed for easy use and management of usable code components.';

/**
 * bit usage
 */
export const BIT_USAGE = '[--version] [--help] <command> [<args>]';

export const BITS_DIRNAME = 'bits';

export const INLINE_BITS_DIRNAME = 'inline_bits';

export const BIT_JSON = 'bit.json';

export const REMOTE_ALIAS_SIGN = '@';

export const IMPL_FILE_NAME = 'impl.js';

export const SPEC_FILE_NAME = 'spec.js';

export const DEFAULT_BIT_NAME = '';

export const DEFAULT_TRANSPILER = 'bit-babel';

export const DEFAULT_TESTER = 'bit-jasmin';

export const DEFAULT_BIT_VERSION = 1;

export const DEFAULT_BOX_NAME = 'global';

export const LOCAL_SCOPE_NOTATION = '@this';

/**
 * cache root directory
 */
export const CACHE_ROOT = getCacheDirectory();

/**
 * global transpilers directory
 */
export const TRANSPILERS_DIR = path.join(CACHE_ROOT, 'transpilers');

/**
 * global testers directory
 */
export const TESTERS_DIR = path.join(CACHE_ROOT, 'testers');

/**
 * modules cache directory
 */
export const MODULES_CACHE_DIR = path.join(CACHE_ROOT, 'modules');

/**
 * app cache directory
 */
export const APP_CACHE_DIR = path.join(CACHE_ROOT, 'app');

/**
 * bits cache directory 
 */
export const GLOBAL_BIT_CACHE = path.join(CACHE_ROOT, 'bits');

export const BIT_HIDDEN_DIR = '.bit';

export const BIT_CONTAINER_FOLDERS = ['sources'];

/**
 * modules cache filename
 */
export const MODULES_CACHE_FILENAME = path.join(MODULES_CACHE_DIR, '.roadrunner.json'); 

/**
 * auth cache fileName
 */
export const AUTH_CACHE_FILENAME = path.join(CACHE_ROOT, '.auth.json');

/**
 * bit registry default URL.
 */
export const BIT_REGISTRY = '';

export const LATEST = 'latest';

export const DEPENDENCY_DELIMITER = '/';

export const BIT_SOURCES_DIRNAME = 'source';

export const BIT_TMP_DIRNAME = 'tmp';

export const BIT_CACHE_DIRNAME = 'cache';

export const LATEST_TESTED_MARK = '*';

/**
 * current bit application version
 */
export const BIT_VERSION = packageFile.version;
