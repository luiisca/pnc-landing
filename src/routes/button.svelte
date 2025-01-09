<script lang="ts">
    import type { Snippet } from "svelte";
    import Link from "./link.svelte";

    interface Props {
        href?: string;
        disabled?: boolean;
        className?: string;
        variant?: "default" | "primary";
        children: Snippet<[]>;
    }

    let {
        href,
        disabled = false,
        className = "",
        variant = "default",
        children,
        ...rest
    }: Props = $props();

    const baseClasses = [
        // Base styles
        "inline-block cursor-pointer select-none whitespace-nowrap",
        "rounded-md text-sm font-semibold text-center",
        "px-6 py-4",
        "shadow transition-colors duration-150",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",

        // Default variant styles
        variant === "default" && [
            "bg-neutral-600 text-white",
            "hover:bg-neutral-500 hover:text-white",
            "focus-visible:outline-neutral-600",
        ],

        // Primary variant styles
        variant === "primary" && [
            "bg-violet-500 text-white",
            "hover:bg-violet",
            "focus-visible:outline-violet-500",
        ],

        // Disabled state
        disabled && "opacity-50 cursor-not-allowed",

        // Custom classes
        className,
    ]
        .flat()
        .filter(Boolean)
        .join(" ");
</script>

{#if href}
    <Link {href} className={baseClasses} {disabled} {...rest}>
        {@render children()}
    </Link>
{:else}
    <button {disabled} class={baseClasses} {...rest}>
        {@render children()}
    </button>
{/if}
