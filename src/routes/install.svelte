<script lang="ts">
    import { ICONS } from "$lib/constants";
    import InstallTab from "./install-tab.svelte";
    import Link from "./link.svelte";
    import Step from "./step.svelte";

    let activeTab = $state("brat");
</script>

{#snippet methodBttn(id: string, icon: keyof typeof ICONS, name: string)}
    <button
        onclick={() => (activeTab = id)}
        class={`flex items-center gap-2 px-6 py-4 text-lg transition-colors duration-200 ${
            activeTab === id
                ? "bg-violet-500/10 text-violet-100 border-b-2 border-violet-300"
                : "text-muted hover:text-white hover:bg-secondary-300 border-b-2 border-transparent"
        }`}
    >
        {@html ICONS[icon]}
        {name}
    </button>
{/snippet}

<div class="container mx-auto py-24" id="install">
    <div class="max-w-4xl mx-auto">
        <!-- header -->
        <div class="text-center mb-12">
            <h2 class="text-3xl font-semibold sm:text-4xl">Installation</h2>
            <p class="mt-6 text-xl sm:text-2xl text-muted">
                Get started in minutes. Choose your preferred installation
                method.
            </p>
        </div>

        <!-- {/* Installation Options */} -->
        <div class="bg-secondary rounded-xl overflow-hidden">
            <!-- {/* Tabs */} -->
            <div class="flex border-b border-gray-800">
                {@render methodBttn("brat", "packageSearch", "BRAT plugin")}
                {@render methodBttn("manual", "download", "Manual")}
            </div>

            <!-- {/* Content */} -->
            <InstallTab
                tab="brat"
                description="Recommended: Quick installation through Obsidian BRAT"
                {activeTab}
            >
                <Step pos={1}>
                    <span class="text-lg"
                        >Install BRAT from Obsidian community plugins</span
                    >
                </Step>
                <Step
                    pos={2}
                    code="BRAT: Plugins: Add a beta plugin for testing"
                >
                    <span class="text-lg">Open Command Palette and run:</span>
                </Step>
                <Step
                    pos={3}
                    code="https://github.com/luiisca/obsidian-periodic-notes-calendar"
                >
                    <span class="text-lg">Enter repository URL</span>
                </Step>
                <Step pos={4}>
                    <span class="text-lg"
                        >Wait for installation to complete</span
                    >
                </Step>
                <Step pos={5}>
                    <span class="text-lg"
                        >Enable <b>Periodic notes calendar</b> in Settings → Community
                        plugins</span
                    >
                </Step>
            </InstallTab>
            <InstallTab
                tab="manual"
                description="Download and install directly from our GitHub repository"
                {activeTab}
            >
                <Step pos={1} code="periodic-notes-calendar.zip">
                    <span class="text-lg">
                        Download the
                        <Link
                            href="https://github.com/luiisca/obsidian-periodic-notes-calendar/releases"
                            target="_blank">latest release</Link
                        > from GitHub
                    </span>
                </Step>
                <Step pos={2} code="path-to-your-vault/.obsidian/plugins">
                    <span class="text-lg"
                        >Extract the downloaded file to your vault's plugins
                        folder</span
                    >
                </Step>
                <Step pos={3}>
                    <span class="text-lg"
                        >Enable <b>Periodic notes calendar</b> in Settings → Community
                        plugins</span
                    >
                </Step>
            </InstallTab>
        </div>
    </div>
</div>
