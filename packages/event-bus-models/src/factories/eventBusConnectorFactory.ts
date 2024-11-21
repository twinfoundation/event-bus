// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Factory } from "@twin.org/core";
import type { IEventBusConnector } from "../models/IEventBusConnector";

/**
 * Factory for creating event bus connectors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EventBusConnectorFactory = Factory.createFactory<IEventBusConnector>("event-bus");
