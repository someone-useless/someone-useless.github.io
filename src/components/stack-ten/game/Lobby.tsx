import { createMemo, createSignal, type Setter, type Signal } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { GameNotFound, ServerDisconnected, UnknownError, type PopUp } from "./PopUp";

export const ServerURL = "https://cautious-umbrella-4jgw75wvgq59f499-8080.app.github.dev";

export abstract class GameState {
    public abstract to_component(state: Signal<GameState>, pop_up: Setter<PopUp | undefined>): JSX.Element;
}

interface GameExistResponse {
    game_exist: boolean,
}

export function JoinArea(props: { join_game: (game_code: string) => void, pop_up: Setter<PopUp | undefined> }) {
    const [game_code, game_code_setter] = createSignal("");
    const game_code_re = RegExp("^[a-zA-Z0-9]{3}$");
    const is_valid_game_code = createMemo(() => game_code_re.test(game_code()));
    const enter_game = async () => {
        try {
            const result = await fetch(`${ServerURL}/game-exist/${game_code()}`);
            const ok = result.ok;
            if (ok) {
                const { game_exist }: GameExistResponse = await result.json();
                if (!game_exist) {
                    props.pop_up(() => GameNotFound);
                } else {
                    props.join_game(game_code());
                }
            }
        } catch (_) {
            props.pop_up(() => ServerDisconnected);
        }
    };
    return <div id="join-area">
        <h1>ENTER GAME CODE</h1>
        <input autocomplete="off" type="text" id="game-code" onInput={(e) => game_code_setter(e.currentTarget.value)} value={game_code()}></input>
        <button id="enter" onClick={enter_game} disabled={!is_valid_game_code()}>Enter</button>
    </div>;
};

interface CreateGameResponse {
    game_code: string,
}

export function CreateArea(props: { join_game: (game_code: string) => void, pop_up: Setter<PopUp | undefined> }) {
    const enter_game = async () => {
        try {
            const result = await fetch(`${ServerURL}/create-game`, {
                method: "POST",
            });
            const ok = result.ok;
            if (ok) {
                const { game_code: game_code_val }: CreateGameResponse = await result.json();
                props.join_game(game_code_val);
            } else {
                props.pop_up(() => UnknownError);
            }
        } catch (_) {
            props.pop_up(() => ServerDisconnected);
        }
    };
    return <div id="create-area">
        <h1>CREATE GAME</h1>

        <button id="enter" onClick={enter_game}>Create Game</button>
    </div>;
}

export class Lobby extends GameState {
    public to_component(state: Signal<GameState>, pop_up: Setter<PopUp | undefined>): JSX.Element {
        const [get_state, set_state] = state;
        const join_game = () => {
        };
        return <>
            <JoinArea join_game={join_game} pop_up={pop_up} />
            <CreateArea join_game={join_game} pop_up={pop_up} />
        </>
    }
}

export class Lobby2 extends GameState {
    public to_component(state: Signal<GameState>, pop_up: Setter<PopUp | undefined>): JSX.Element {
        return <>
            <h1>Hello2</h1>
        </>
    }
}