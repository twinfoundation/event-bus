// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Publish an event on the bus.
 */
export interface IEventBusPublish {
	/**
	 * The parameters from the body.
	 */
	body: {
		/**
		 * The topic being published.
		 */
		topic: string;

		/**
		 * The id of the event being published.
		 */
		id: string;

		/**
		 * The timestamp of the event being published.
		 */
		ts: number;

		/**
		 * The data of the event being published.
		 */
		data: unknown;
	};
}
