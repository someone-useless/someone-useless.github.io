import type { JSX } from "solid-js/jsx-runtime";

export type PopUp = () => JSX.Element;

export const GameNotFound: PopUp = () => <>
    <h3><strong>GAME NOT FOUND</strong></h3>
    <br />
    <p>Well, we did not find your game, try creating a new one or check if you are typing wrong.</p>
</>;

export const UnknownError: PopUp = () => <>
    <h3><strong>UNKNOWN ERROR</strong></h3>
    <br />
    <p>We do not know what happened. Maybe try to refresh and join again?</p>
</>;

export const ServerDisconnected: PopUp = () => <>
    <h3><strong>Server Disconnected</strong></h3>
    <br />
    <p>This game is <strong>very instable</strong>. The server probably shut down.</p>
</>;