// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Subscribe to an event bus topic.
 */
export interface IEventBusSubscribeRequest {
	/**
	 * The parameters from the body.
	 */
	body: {
		/**
		 * The topic to subscribe to.
		 */
		topic: string;
	};
}
