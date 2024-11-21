// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Event record.
 */
export interface IEvent<T = unknown> {
	/**
	 * The id for the event.
	 */
	id: string;

	/**
	 * The timestamp for the event.
	 */
	ts: number;

	/**
	 * The data for the event.
	 */
	data: T;
}
