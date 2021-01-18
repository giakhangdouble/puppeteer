/**
 * Copyright 2021 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NetworkConditions } from './NetworkManager.js';

export type NetworkConditionsMap = { [name: string]: NetworkConditions };

export const networkConditionsMap: NetworkConditionsMap = {
  Online: {
    offline: false,
    download: -1,
    upload: -1,
    latency: 0,
  },
  Offline: {
    offline: true,
    download: 0,
    upload: 0,
    latency: 0,
  },
  'Slow 3G': {
    offline: false,
    download: ((500 * 1000) / 8) * 0.8,
    upload: ((500 * 1000) / 8) * 0.8,
    latency: 400 * 5,
    connectionType: 'cellular3g',
  },
  'Fast 3G': {
    offline: false,
    download: ((1.6 * 1000 * 1000) / 8) * 0.9,
    upload: ((750 * 1000) / 8) * 0.9,
    latency: 150 * 3.75,
    connectionType: 'cellular3g',
  },
};
