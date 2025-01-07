// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The options for the event bus service.
 */
export interface IEventBusServiceConstructorOptions {
	/**
	 * The event bus connector type.
	 * @default event-bus
	 */
	eventBusConnectorType?: string;
}
