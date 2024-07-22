import { RulePage, Stack } from "./Utils";

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