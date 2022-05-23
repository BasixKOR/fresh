/** @jsx h */

import { h } from "../deps.client.ts";

interface Props {
  params: Record<string, string | string[]>;
}

export default function Greet(props: Props) {
  return <div>Hello {props.params.name}</div>;
}