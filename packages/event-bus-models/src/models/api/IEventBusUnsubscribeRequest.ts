// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Unsubscribe from an event bus topic.
 */
export interface IEventBusUnsubscribeRequest {
	/**
	 * The parameters from the body.
	 */
	body: {
		/**
		 * The subscription id to remove.
		 */
		subscriptionId: string;
	};
}
