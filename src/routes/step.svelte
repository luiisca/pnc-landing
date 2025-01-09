<script lang="ts">
    import { ICONS } from "$lib/constants";
    import type { Snippet } from "svelte";
    import CopyToClipboard from "./copyToClipboard.svelte";

    interface Props {
        pos: number;
        code?: string;
        children: Snippet<[]>;
    }
    let { pos, code, children }: Props = $props();
</script>

<div class="flex flex-col gap-2">
    <div class="flex items-center gap-3">
        <div
            class="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-100 flex items-center justify-center text-sm"
        >
            {pos}
        </div>
        {@render children()}
    </div>
    {#if code}
        <div class="mx-9 flex-1 group relative p-2 bg-violet-500/10 rounded-lg">
            <div
                class="absolute inset-0 bg-violet-500/5 rounded-lg -z-10 group-hover:bg-violet-500/10 transition-colors duration-200"
            ></div>
            <div
                class="flex items-center px-4 py-2 font-mono text-sm gap-2 text-violet-100"
            >
                <span
                    class="w-4 h-4 text-violet-300 [&>svg]:w-full [&>svg]:h-full"
                >
                    {@html ICONS.terminal}
                </span>
                <span id="code-snippet">{code}</span>
                <CopyToClipboard content={code} />
            </div>
        </div>
    {/if}
</div>
