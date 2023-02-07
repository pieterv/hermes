/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RUN: (! %hermesc -dump-transformed-ast %s 2>&1 ) | %FileCheck %s

//CHECK: error: 'break' not within a loop or a switch
{
  while(
    { get 0 () {
      break;
      }
      })
  return 2
}
