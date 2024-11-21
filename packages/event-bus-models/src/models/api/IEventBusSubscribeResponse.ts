// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Response to subscribe to an event bus topic.
 */
export interface IEventBusSubscribeResponse {
	/**
	 * The parameters from the body.
	 */
	body: {
		/**
		 * The subscription id.
		 */
		subscriptionId: string;
	};
}
