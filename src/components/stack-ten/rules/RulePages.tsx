import { Card, RulePage, Stack } from "./Utils";

export const RulePage1 = () => <RulePage title="RULES">
    <p>
        Hello, newcomer! No matter if you are familar to the stack data structure or not, you can still easily start playing after reading rules in a few minutes! Let's quickly introduce the most important concept in this game: <strong>Stacks</strong>!
    </p>

    <Stack stack={[1, 2, -3, 5, 3]} desc="A simple stack." />

    <p>
        Stacks are ordered collections of elements, in this game, those elements will be different numbers and the top will be the right most element. What special about stacks, is that stacks follow a rule called <strong>FIFO</strong> (First In First Out). Basically, this rule limits us to only operate with the top element, and allows us to do two things to a stack at the same time. One called <strong>Push</strong> that push a element on the top of the stack.
    </p>

    <p>
        For example, if we push a '7' to the stack above, it will become:
    </p>

    <Stack stack={[1, 2, -3, 5, 3, 7]} desc="The stack after pushing." />

    <p>
        Another operation is called <strong>Pop</strong>. This operation take the top element out. If we pop the original stack before pushing, it will become:
    </p>

    <Stack stack={[1, 2, -3, 5]} desc="Original stack after popping." />
</RulePage>;

export const RulePage2 = () => <RulePage title="STACK CAPACITY">
    <p>Now, you have known how stacks work. Let's introduce the capacity of stack!</p>

    <p>In this game, the stack have a <strong>capacity</strong> of 10. A stack can only hold 10 elements at the same time. Stacks of capacity 10 are shown below.</p>

    <Stack stack={[1, 2, 3, 4, 5, 6, 7, null, null, null]} desc="A stack which has length of 7 and capacity of 10." />
    <br />
    <Stack stack={[null, null, null, null, null, null, null, null, null, null]} desc="A stack which has length of 0 (empty) and capacity of 10." />
    <br />
    <Stack stack={[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]} desc="A stack which has length of 9 (full) and capacity of 10." />

    <p>If we push another element onto a full stack, the stack <strong>overflows</strong>. It is called Stack Overflow and often considered bad in computer science. However, in this game, your aim is to let the stack overflows! We will go into this later. Let's talk about operations now.</p>
</RulePage>;

export const RulePage3 = () => <RulePage title="OPERATIONS">
    <p>We have introduced two operations before, Push and Pop. They are basic operation that are allowed in computer science. However, in order to let this game be more fun, 3 more operations will be added! One is called <strong>Reverse</strong>. It simply reverse the whole stack. Suppose we have following stack:</p>

    <Stack stack={[1, 2, 3, 4, 5, null, null, null, null, null]} />

    <p>After reversing it, it will look like this:</p>

    <Stack stack={[5, 4, 3, 2, 1, null, null, null, null, null]} />

    <p>Another operation is <strong>Add</strong>. It add a number to the top element. Notice that it is different from pushing! For example, if we are going to add 3 to the stack, the stack becomes:</p>

    <Stack stack={[5, 4, 3, 2, 4, null, null, null, null, null]} />

    <p>The last operation is called <strong>Negate</strong>. It negate the top element, or mathematically speaking, it multiplied the top element by -1. For example, if we negate the stack above, it becomes:</p>

    <Stack stack={[5, 4, 3, 2, -4, null, null, null, null, null]} />

    <p>If we negate it once more, it becomes the original stack!</p>

    <Stack stack={[5, 4, 3, 2, 4, null, null, null, null, null]} />
</RulePage>;

export const RulePage4 = () => <RulePage title="CARDS">
    <p>Let's talk about cards! Firstly, we will have a empty stack.</p>

    <Stack stack={[null, null, null, null, null, null, null, null, null]} desc="Initial stack." />

    <p>Each turn, player will have 3 cards to choose. <strong>Cards</strong> are collections of 1-4 operation(s). Suppose a player use the following card:</p>

    <Card opers={["PUSH -1", "PUSH 2", "REVERSE"]} />

    <p>After playing this card, the stack becomes:</p>

    <Stack stack={[2, -1, null, null, null, null, null, null, null, null]} />

    <p>Why? Let's take a closer look into how cards work!</p>

    <p>Cards execute their operations <strong>from top to the bottom</strong>. Therefore, the card will first execute 'PUSH -1'. After pushing -1, the stack becomes:</p>

    <Stack stack={[-1, null, null, null, null, null, null, null, null, null]} />

    <p>After that, the card execute 'PUSH 2'.</p>

    <Stack stack={[-1, 2, null, null, null, null, null, null, null, null]} />

    <p>Finally, we reverse the whole stack!</p>

    <Stack stack={[2, -1, null, null, null, null, null, null, null, null]} />

</RulePage>;

export const RulePage5 = () => <RulePage title="GAME">
    <p>Talking about the actual gameplay, every player will have 10 points at start. You can consider this as your health, since if you lose all your points, you lose! The only way to win is to defeat other players! But how? Remember overflows that we have just talked about? They are how you get points and defeat other players. Consider the following stack:</p>

    <Stack stack={[2, -3, 9, 2, 3, -1, 0, 5, 4, null]} />

    <p>If a player use this card: </p>

    <Card opers={["PUSH 7", "PUSH 1", "PUSH 2"]} />

    <p>After pushing 7, the stack are already full!</p>

    <Stack stack={[2, -3, 9, 2, 3, -1, 0, 5, 4, 7]} />

    <p>If we push 1 into the stack, the stack will overflow! Overflowing clears the whole stack and the <strong>overflower</strong> (the one who overflows the stack) get points same as the top element. Each player except the overflower would lose points same as the bottom element. In this scenario, the overflower will get 7 points, and other players will lose 2 points. Notice that the element that we push would got disposed!</p>

    <Stack stack={[null, null, null, null, null, null, null, null, null, null]} />

    <p>After overflowing, the card execute the last operation: 'PUSH 2'.</p>

    <Stack stack={[2, null, null, null, null, null, null, null, null, null]} />

    <p>That's all! Hope you would enjoy this game!</p>

</RulePage>;