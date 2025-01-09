<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        tab: string;
        description: string;
        activeTab: string;
        children: Snippet<[]>;
    }
    let { tab, description, activeTab, children }: Props = $props();
</script>

<!-- {/* Content */} -->
<div class={`p-6 space-y-6 ${activeTab === tab ? "block" : "hidden"}`}>
    <div
        class="flex items-start gap-4 p-4 bg-violet-500/5 rounded-lg border border-violet-500/10"
    >
        <div>
            <p class="text-muted">
                {description}
            </p>
        </div>
    </div>

    <div class="space-y-4">
        {@render children()}
    </div>
</div>
