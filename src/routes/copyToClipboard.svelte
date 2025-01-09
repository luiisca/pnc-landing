<script lang="ts">
    import { ICONS } from "$lib/constants";

    interface Props {
        content: string;
    }
    let { content }: Props = $props();
    let copied = $state(false);

    async function handleClick() {
        copied = true;
        try {
            await navigator.clipboard.writeText(content.trim());
            const timeout = setTimeout(() => {
                copied = false;
                clearTimeout(timeout);
            }, 2000);
        } catch (e) {
            console.error(e);
            copied = false;
        }
    }
</script>

<button
    class="w-5 h-5 text-accent [&>svg]:w-full [&>svg]:h-full ml-auto hover:text-violet-50"
    onclick={handleClick}
>
    {#if copied}
        {@html ICONS.clipboardCheck}
    {:else}
        {@html ICONS.clipboard}
    {/if}
</button>
