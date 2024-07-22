import { createSignal, Show, type Accessor, type Setter } from "solid-js";
import { Lobby } from "./Lobby";
import type { PopUp } from "./PopUp";

export function PopUpArea(props: { pop_up_msg: Accessor<PopUp | undefined>, pop_up: Setter<PopUp | undefined> }) {
    return <Show when={props.pop_up_msg() !== undefined}>
            <div class="popup">
                {props.pop_up_msg()!()}
                <button class="close" onClick={() => props.pop_up(undefined)}>CLOSE</button>
            </div>
            <div class="popup-overlay" />
        </Show>;
}

export default function GamePage() {
    const state = createSignal(new Lobby());
    const [game_state, _] = state; 
    const [pop_up_msg, pop_up] = createSignal<PopUp | undefined>();
    return <>
        <PopUpArea pop_up_msg={pop_up_msg} pop_up={pop_up} />
        {game_state().to_component(state, pop_up)}
    </>;
}