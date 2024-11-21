// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IHttpRequestContext, ISocketRoute, ITag } from "@twin.org/api-models";
import { ComponentFactory, Guards } from "@twin.org/core";
import type {
	IEventBusComponent,
	IEventBusPublish,
	IEventBusSubscribeRequest,
	IEventBusSubscribeResponse
} from "@twin.org/event-bus-models";
import { nameof } from "@twin.org/nameof";

/**
 * The source used when communicating about these routes.
 */
const ROUTES_SOURCE = "eventBusRoutes";

/**
 * The tag to associate with the routes.
 */
export const tagsEventBus: ITag[] = [
	{
		name: "Event Bus",
		description: "Endpoints which are modelled to access an event bus contract."
	}
];

/**
 * The socket routes for event bus.
 * @param baseRouteName Prefix to prepend to the paths.
 * @param componentName The name of the component to use in the routes stored in the ComponentFactory.
 * @returns The generated routes.
 */
export function generateSocketRoutesEventBus(
	baseRouteName: string,
	componentName: string
): ISocketRoute[] {
	const subscribeRoute: ISocketRoute<
		IEventBusSubscribeRequest,
		IEventBusSubscribeResponse | IEventBusPublish
	> = {
		operationId: "eventBusSubscribe",
		path: `${baseRouteName}/subscribe`,
		handler: async (httpRequestContext, request, emitter) =>
			eventBusSubscribe(httpRequestContext, componentName, request, emitter)
	};

	return [subscribeRoute];
}

/**
 * Subscribe to a topic.
 * @param httpRequestContext The request context for the API.
 * @param componentName The name of the component to use in the routes.
 * @param request The request.
 * @param emitter The emitter to send message back.
 * @returns The response object with additional http response properties.
 */
export async function eventBusSubscribe(
	httpRequestContext: IHttpRequestContext,
	componentName: string,
	request: IEventBusSubscribeRequest,
	emitter: (topic: string, response: IEventBusSubscribeResponse | IEventBusPublish) => Promise<void>
): Promise<void> {
	Guards.object<IEventBusSubscribeRequest>(ROUTES_SOURCE, nameof(request), request);
	Guards.object(ROUTES_SOURCE, nameof(request.body.topic), request.body.topic);

	const component = ComponentFactory.get<IEventBusComponent>(componentName);
	const subscriptionId = await component.subscribe(request.body.topic, async (topic, event) => {
		await emitter("publish", {
			body: {
				topic,
				id: event.id,
				ts: event.ts,
				data: event.data
			}
		});
	});

	await emitter("subscribe", {
		body: {
			subscriptionId
		}
	});
}
