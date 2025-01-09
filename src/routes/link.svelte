<script lang="ts">
    import type { Snippet } from "svelte";
    import type {
        HTMLAttributeAnchorTarget,
        HTMLAttributes,
    } from "svelte/elements";

    type Props = {
        href: string;
        target?: HTMLAttributeAnchorTarget;
        disabled?: boolean;
        className?: string;
        children: Snippet<[]>;
    } & HTMLAttributes<HTMLAnchorElement>;

    let {
        href,
        target,
        disabled = false,
        className = "",
        children,
        ...rest
    }: Props = $props();

    const baseClasses = [
        // base styles
        "text-accent font-medium",
        "transition-colors duration-150 ease-in-out",
        "hover:text-violet-50",

        className,
    ]
        .flat()
        .filter(Boolean)
        .join(" ");
</script>

<a
    class={baseClasses}
    {href}
    aria-disabled={disabled}
    aria-label={rest["aria-label"]}
    {target}
    {...rest}
>
    {@render children()}
</a>
